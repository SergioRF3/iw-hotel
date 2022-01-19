import axios from 'axios';
import store from '@/store.js'

const API_URL = 'http://localhost:3000/';

class AuthService {
    login(user, password) {
        return axios.post(API_URL + 'login', {
            login: user,
            password: password,
        })
        .then(
            response => {
                if(response.status==200){
                    localStorage.setItem('email', response.data.email)
                    localStorage.setItem('name', response.data.name)
                    localStorage.setItem('type', response.data.type)
                    localStorage.setItem('token', response.data.Bearer)
                }
            }
        )
    }
    logout(){
        store.dispatch('logout')
    }
}

export default new AuthService()