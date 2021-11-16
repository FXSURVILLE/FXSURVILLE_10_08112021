import axios from 'axios';

axios.defaults.baseURL = 'localhost:3001/api/v1';



class CallAPI {
    static async login(body) {
        return await axios.post(`/user/login`,body);
    }
    static async signup(body) {
        return await axios.post(`/user/signup`,body);
    }
}

export default CallAPI
