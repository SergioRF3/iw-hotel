import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class AuthService {
    login(user, password) {
        return axios.post(API_URL + 'login', {
            email: user,
            password: password,
        })
        .then(
            response => {
                if(response.status==200){
                    console.log("funciona")
                    localStorage.setItem('email', response.data.email)
                    localStorage.setItem('name', response.data.name)
                    localStorage.setItem('type', response.data.type)
                    localStorage.setItem('token', response.data.Bearer)
                }
                else{
                    console.log("eso no existe carck")
                }
            }
        )
    }
    
    logout(){
        console.log("deslogeuado")
    }
}

export default new AuthService()