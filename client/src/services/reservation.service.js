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
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    createReservation(start, end, state, total, room_id, hall_id, user_id){
        return axios.post(API_URL, {'start': start, 'end': end, 'state': state, 'total': total,'room_id': room_id, 'hall_id': hall_id ,'user_id': user_id}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    modifyReservation(id, start, end, state, total, room_id, hall_id, user_id){
        return axios.put(API_URL, {'id': id, 'start': start, 'end': end, 'state': state, 'total': total,'room_id': room_id, 'hall_id': hall_id ,'user_id': user_id}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }
}

export default new ReservationService();