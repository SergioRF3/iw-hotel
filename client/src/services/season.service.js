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
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    createSeason(name, increment, start, end){
        return axios.post(API_URL, {'name': name, 'increment': increment, 'start': start,'end': end}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    modifySeason(id, name, increment, start, end){
        return axios.put(API_URL, {'id': id, 'name': name, 'increment': increment, 'start': start,'end': end}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }
}

export default new SeasonService();