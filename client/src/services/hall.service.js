import axios from 'axios';

const API_URL = 'http://localhost:3000/halls/';

class HallService {
    getHalls() {
        return axios.get(API_URL, {params: {}});
    }

    getHall(id) {
        return axios.get(API_URL + id);
    }
    
    deleteHall(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    createHall(number, floor, capacity, description, image, price, state){
        return axios.post(API_URL, {'number': number, 'floor': floor, 'capacity': capacity, 'description': description,'image': image, 'price': price ,'state': state}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    modifyHall(id, name, description, type, price, state){
        return axios.put(API_URL, {'id': id, 'number': number, 'floor': floor, 'capacity': capacity, 'description': description,'image': image, 'price': price ,'state': state}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }
}

export default new HallService();