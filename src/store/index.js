import {createStore} from 'vuex'
import axios from "axios";
import {API_KEY} from "../../keys";

export default createStore({
    state: {
        rates: {},
    },
    mutations: {
        SET_RATES(state, payload) {
            state.rates = payload;
        }
    },
    actions: {
        GET_CURRENCY_RATES({commit}) {
            axios.get(`http://data.fixer.io/api/latest?access_key=${API_KEY}`).then(res => {
                commit('SET_RATES', res.data.rates)
            }).catch(err => {
                console.log(err);
            })
        }
    },
    getters: {
        get_rates: state => state.rates,
    }
})
