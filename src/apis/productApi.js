import baseApi from './baseApi'
export default class productApi extends baseApi {

    getProducts() {
        return new Promise((resolve, reject) => {
            this.get("/data.json")
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }
}