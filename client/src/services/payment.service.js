import axios from 'axios';

const API_URL = 'https://tpvviw.tk/';

class PaymentService {
    getToken() {
        return axios.post(API_URL + 'api/v1/auth/authtoken', {"apiKey": "84b029fa-8689-49eb-8959-f29e78fa25cc"});
    }
    postPayment(payment, authToken){
        console.log(payment)
        console.log(authToken)
        return axios.post(API_URL + "api/v1/payments/", {}, {headers: {'authorization': 'Bearer ' + authToken}});
    }
}

export default new PaymentService();