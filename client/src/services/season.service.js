import axios from 'axios';

const API_URL = 'http://localhost:3000/seasons/';

class SeasonService {
    getSeasons() {
        return axios.get(API_URL, {params: {}});
    }

    getSeason(id) {
        return axios.get(API_URL + id);
    }
    
    deleteSeason(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    createSeason(o){
        return axios.post(API_URL, {'name': o.name, 'increment': o.increment, 'start': o.start,'end': o.end}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }

    modifySeason(o){
        return axios.put(API_URL, {'id': o.id, 'name': o.name, 'increment': o.increment, 'start': o.start,'end': o.end}, {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
    }
}

export default new SeasonService();