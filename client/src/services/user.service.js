import axios from 'axios';

const API_URL = 'http://localhost:3000/users/';

class UserService {
    getUsers(email) {
        return axios.get(API_URL, {params: {'email': email}});
    }

    getUser(id) {
        return axios.get(API_URL + id);
    }

    getUserByEmail(email) {
        return axios.post(API_URL + 'email/',{'email': email});
    }
    
    deleteUser(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createUser(o){
        return axios.post(API_URL, {'email': o.email, 'name': o.name, 'password': o.password, 'dni': o.dni,'phone': o.phone, 'type': o.type ,'state': o.state})
    }

    modifyUser(o){
        return axios.put(API_URL, {'id': o.id, 'email': o.email, 'name': o.name, 'password': o.password, 'dni': o.dni,'phone': o.phone, 'type': o.type ,'state': o.state}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new UserService();