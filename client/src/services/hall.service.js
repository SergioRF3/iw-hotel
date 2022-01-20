import axios from 'axios';

const API_URL = 'http://localhost:3000/halls/';

class HallService {
    getHalls(capacity, price) {
        return axios.get(API_URL, {params: {'capacity': capacity, 'price': price}});
    }

    getHall(id) {
        return axios.get(API_URL + id);
    }
    
    deleteHall(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createHall(o){
        return axios.post(API_URL, {'number': o.number, 'floor': o.floor, 'capacity': o.capacity, 'description': o.description,'image': o.image, 'price': o.price ,'state': o.state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifyHall(o){
        return axios.put(API_URL, {'id': o.id, 'number': o.number, 'floor': o.floor, 'capacity': o.capacity, 'description': o.description,'image': o.image, 'price': o.price ,'state': o.state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new HallService();