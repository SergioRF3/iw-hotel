import axios from 'axios';

const API_URL = 'http://localhost:3000/facilities/';

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

    createFacility(o){
        return axios.post(API_URL, {'name': o.name, 'description': o.description, 'image': o.image}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifyFacility(o){
        return axios.put(API_URL, {'id': o.id, 'name': o.name, 'description': o.description, 'image': o.image}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new FacilityService();