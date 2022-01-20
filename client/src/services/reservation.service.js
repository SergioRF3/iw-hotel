import axios from 'axios';

const API_URL = 'http://localhost:3000/reservations/';

class ReservationService {
    getReservations() {
        return axios.get(API_URL, {params: {}});
    }

    getReservation(id) {
        return axios.get(API_URL + id);
    }
    
    deleteReservation(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createReservation(o){
        console.log(o)
        return axios.post(API_URL, {'start': o.start, 'end': o.end, 'state': o.state, 'total': o.total,'room_id': o.room_id, 'hall_id': o.hall_id ,'user_id': o.user_id}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifyReservation(o){
        return axios.put(API_URL, {'id': o.id, 'start': o.start, 'end': o.end, 'state': o.state, 'total': o.total,'room_id': o.room_id, 'hall_id': o.hall_id ,'user_id': o.user_id}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new ReservationService();