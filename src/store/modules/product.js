import productApi from '../../apis/productApi'
var productService = new productApi();
export default {
    state: {
        products: {},
        currentProducts: [],
        pageSize: 10,
        startIndex: 0,
        loaded: false,
        authorized: false,
    },
    mutations: {
        setProducts(state, payload) {
            // eslint-disable-next-line
            console.log(963000, payload);
            state.products[state.startIndex] = payload;
            state.currentProducts = payload;
        },
        setLoaded(state, payload) {
            state.loaded = payload;
        },
        setAutho(state, payload) {
            state.authorized = payload;
        }
    },
    getters: {
        getProducts: (state) => {
            return state.currentProducts || [];
        },
        getLoaded: (state) => {
            return state.loaded
        },
        isAuthorized: (state) => {
            return state.authorized
        },
        getUserInfo(){
            return {Name:"sara" }
        }
    },
    actions: {
        LoginUser({ commit }) {
            commit("setAutho", true);
        },
        getProductData({ commit }) {
            commit("setLoaded", false);
            productService.getProducts()
                .then(response => {
                    commit("setProducts", response);
                    commit("setLoaded", true);
                }).catch(error => {
                    commit("setLoaded", true);
                    // eslint-disable-next-line
                    console.log(error);
                });
        }
    }
}