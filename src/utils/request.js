import axios from "axios";
import {ROAST_CONFIG} from "@/conf/config";

// axios interceptor bear token

const request=axios.create({
    baseURL: ROAST_CONFIG.API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
request.interceptors.request.use(
    config => {
        // const token = localStorage.getItem('token');
        const token = "1|K3MYT1zcUsoFvb5RfEOU28Qzy2E6g8hUFmKCQBi1";
        if (token) {
            config.headers['Authorization'] = 'Bearer '+ token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// axios interceptor error
request.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // redirect to login
                    break;
            }
        }
        return Promise.reject(error.response.data);
    }
);


export default request;
