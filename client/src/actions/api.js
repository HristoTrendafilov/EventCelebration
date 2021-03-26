import axios from "axios";

const baseUrl = "http://localhost:5000/api/";

export default {
    event(url = baseUrl + "events/"){
        return {
            fetchAll: () => axios.get(url),
            fetchById : id => axios.get(url+id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url+id, updateRecord),
            delete: id => axios.delete(url+id)
        }
    },
    user(url = baseUrl + "user"){
        return {
            register: userRecord => axios.post(url + '/register/', userRecord)
        }
    }
}
