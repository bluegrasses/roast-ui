import {ROAST_CONFIG} from "@/conf/config";
import axios from "@/utils/request";

export function getBrewMethods() {
    return axios({
        url: ROAST_CONFIG.API_URL + "/brew-methods",
        method: "get"
    });
}