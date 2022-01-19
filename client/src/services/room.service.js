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
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    createRoom(number, image, views, price, floor, beds, state){
        return axios.post(API_URL, {'number': number, 'image': image, 'views': views, 'price': price,'floor': floor, 'beds': beds ,'state': state}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    modifyRoom(id, name, description, type, price, state){
        return axios.put(API_URL, {'id': id, 'number': number, 'image': image, 'views': views, 'price': price,'floor': floor, 'beds': beds ,'state': state}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }
}

export default new RoomService();