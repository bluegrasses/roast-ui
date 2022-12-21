import {ROAST_CONFIG} from "@/conf/config";
import axios from "@/utils/request";
export  default {
    /**
     * 获取咖啡列表
     * Get /api/cafes
     */
    getCafes: function () {
        return axios.get(ROAST_CONFIG.API_URL + '/cafes');
    },

    /**
     * 获取咖啡详情
     * Get /api/cafes/{id}
     */
    getCafe: function (id) {
        return axios.get(ROAST_CONFIG.API_URL + '/cafes/' + id);
    },

    /**
     * 添加咖啡
     * Post /api/cafes
     */
    postNewCafe: function (name, locations, website, description, roaster ) {
        console.log('locations', locations);
        return axios.post(ROAST_CONFIG.API_URL + '/cafes', {
            name: name,
            locations: locations,
            website: website,
            description: description,
            roaster: roaster
        });
    }

}