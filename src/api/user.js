import {ROAST_CONFIG} from "@/conf/config";
import axios from "@/utils/request";

export  function  login(data) {
        return axios.post(ROAST_CONFIG.API_URL + '/login', data);
}

export  function  getUserInfo() {
        return axios.get(ROAST_CONFIG.API_URL + '/user');
}