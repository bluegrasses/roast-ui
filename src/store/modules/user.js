import {login,getUserInfo} from '@/api/user'
import {getToken, setToken} from '@/utils/token'

const state = {
    token: getToken(),
    user: {},
    userLoadStatus: 0,
    userUpdateStatus: 0
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    /*
 Sets the user load status
 */
    setUserLoadStatus(state, status) {
        state.userLoadStatus = status;
    },
    /*
 Sets the user update status
 */
    setUserUpdateStatus(state, status) {
        state.userUpdateStatus = status;
    },
    /*
  Sets the user
  */
    SET_USER(state, user) {
        state.user = user;
    },
}

const getters = {
    /*
 Returns the user load status.
 */
    getUserLoadStatus(state) {
            return state.userLoadStatus;
    },

    /*
     Returns the user.
     */
    getUser(state) {
        return state.user;
    },

}

const actions = {
    // user login
    login({commit}, userInfo) {
        const {email, password} = userInfo
        return new Promise((resolve, reject) => {
            login({email: email.trim(), password: password}).then(response => {
                const {data} = response
                const result = data.data
                commit('SET_TOKEN', result.token)
                setToken(result.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    //getUser info
    loadUser({commit}) {
        commit('setUserLoadStatus', 1);
        getUserInfo().then(response => {
            const {data} = response
            commit('SET_USER', data)
            commit('setUserLoadStatus', 2);
        }).catch(() => {
            commit('setUserLoadStatus', 3);
        });
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}