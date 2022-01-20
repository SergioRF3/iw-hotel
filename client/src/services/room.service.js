import axios from 'axios';

const API_URL = 'http://localhost:3000/rooms/';

class RoomService {
    getRooms(beds, views, price) {
        return axios.get(API_URL, {params: {'beds': beds, 'views': views, 'price':price}});
    }

    getRoom(id) {
        return axios.get(API_URL + id);
    }
    
    deleteRoom(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createRoom(o){
        return axios.post(API_URL, {'number': o.number, 'image': o.image, 'views': o.views, 'price': o.price,'floor': o.floor, 'beds': o.beds ,'state': o.state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifyRoom(o){
        return axios.put(API_URL, {'id': o.id, 'number': o.number, 'image': o.image, 'views': o.views, 'price': o.price,'floor': o.floor, 'beds': o.beds ,'state': o.state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new RoomService();