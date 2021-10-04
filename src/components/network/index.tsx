import {BaseUrl} from "./baseUrl";
import axios from "axios";

export const netWorkCall=()=>{
    return axios.get(BaseUrl + '/users')
}
