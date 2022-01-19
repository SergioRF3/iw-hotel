import axios from 'axios';

const API_URL = 'http://localhost:3000/service/';

class ServiceService {
    getServices() {
        return axios.get(API_URL, {params: {}});
    }

    getService(id) {
        return axios.get(API_URL + id);
    }
    
    deleteService(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createService(name, description, type, price, state){
        return axios.post(API_URL, {'name': name, 'description': description, 'type': type, 'price': price, 'state': state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifyService(id, name, description, type, price, state){
        return axios.put(API_URL, {'id': id, 'name': name, 'description': description, 'type': type, 'price': price, 'state': state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new ServiceService();