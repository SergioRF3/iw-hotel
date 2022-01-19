import axios from 'axios';

const API_URL = 'http://localhost:3000/facilitys/';

class FacilityService {
    getFacilitys() {
        return axios.get(API_URL, {params: {}});
    }

    getFacility(id) {
        return axios.get(API_URL + id);
    }
    
    deleteFacility(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createFacility(number, increment, start, end){
        return axios.post(API_URL, {'number': number, 'increment': increment, 'start': start, 'ene': end}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifyFacility(id, number, increment, start, end){
        return axios.put(API_URL, {'id': id, 'number': number, 'increment': increment, 'start': start, 'ene': end}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new FacilityService();