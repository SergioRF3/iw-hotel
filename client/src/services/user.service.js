import axios from 'axios';

const API_URL = 'http://localhost:3000/users/';

class UserService {
    getUsers() {
        return axios.get(API_URL, {params: {}});
    }

    getUser(id) {
        return axios.get(API_URL + id);
    }
    
    deleteUser(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createUser(email, name, password, dni, phone, type, state){
        return axios.post(API_URL, {'email': email, 'name': name, 'password': password, 'dni': dni,'phone': phone, 'type': type ,'state': state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifyUser(id, email, name, password, dni, phone, type, state){
        return axios.put(API_URL, {'id': id, 'email': email, 'name': name, 'password': password, 'dni': dni,'phone': phone, 'type': type ,'state': state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new UserService();