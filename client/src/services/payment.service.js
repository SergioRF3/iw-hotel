import axios from 'axios';

const API_URL = 'https://tpvviw.tk/';

class PaymentService {
    getToken() {
        return axios.post(API_URL + 'api/v1/auth/authtoken', {"apiKey": "84b029fa-8689-49eb-8959-f29e78fa25cc"});
    }
    postPayment(payment, authToken){
        return axios.post(API_URL + "api/v1/payments/", {"amount": payment.amount, "concept": payment.concept, "reference": payment.concept, creditCard: {"owner": payment.creditCard.owner, "number": payment.creditCard.number, "ccv": payment.creditCard.ccv, "expiry": payment.creditCard.expiry}}, {headers: {'authorization': 'Bearer ' + authToken}});
    }
}

export default new PaymentService();