import axios from 'axios'
export default class baseApi {

    baseUrl = "";

    get(url, config = {}) {
        return axios.get(this.baseUrl + url, config);
    }

}