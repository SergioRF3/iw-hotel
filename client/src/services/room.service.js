import axios from 'axios';

const API_URL = 'http://localhost:3000/rooms/';

class RoomService {
    getRooms() {
        return axios.get(API_URL, {params: {}});
    }

    getRoom(id) {
        return axios.get(API_URL + id);
    }
    
    deleteRoom(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createRoom(number, image, views, price, floor, beds, state){
        return axios.post(API_URL, {'number': number, 'image': image, 'views': views, 'price': price,'floor': floor, 'beds': beds ,'state': state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifyRoom(id, number, image, views, price, floor, beds, state){
        return axios.put(API_URL, {'id': id, 'number': number, 'image': image, 'views': views, 'price': price,'floor': floor, 'beds': beds ,'state': state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new RoomService();