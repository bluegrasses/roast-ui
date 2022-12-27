/*
 |-------------------------------------------------------------------------------
 | VUEX modules/cafes.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the cafes
 */

import CafeAPI from "@/api/cafe.js";

export const cafes = {
    namespaced: true,
    /**
     * Defines the state being monitored for the module.
     */
    state: {
        cafes: [],
        cafesLoadStatus: 0,

        cafe: {},
        cafeLoadStatus: 0,

        cafeAddStatus: 0,

        cafeLikeActionStatus: 0,
        cafeUnlikeActionStatus: 0,
        cafeLiked:false
    },
    /**
     * Defines the actions used to retrieve the data.
     */
    actions: {
        loadCafes({commit}) {
            commit('setCafesLoadStatus', 1);

            CafeAPI.getCafes()
                .then(function (response) {
                    const result = response.data.data;
                    commit('setCafes', result);
                    commit('setCafesLoadStatus', 2);
                })
                .catch(function () {
                    commit('setCafes', []);
                    commit('setCafesLoadStatus', 3);
                });
        },

        loadCafe({commit}, data) {
            commit('setCafeLoadStatus', 1);
            commit('setCafeLikedStatus',false);
            console.log('data',data);
            CafeAPI.getCafe(data.id)
                .then(function (response) {
                    const result = response.data.data;
                    console.log("result",result);
                    commit('setCafe', result);
                    if (result.user_like.length > 0) {
                        commit('setCafeLikedStatus', true);
                    }
                    commit('setCafeLoadStatus', 2);
                })
                .catch(function (e) {
                    console.log('error',e);
                    commit('setCafe', {});
                    commit('setCafeLoadStatus', 3);
                });

        },
        //添加咖啡
        addCafe({commit, dispatch}, data) {
            // 状态1表示开始添加
            commit( 'setCafeAddStatus', 1 );

            CafeAPI.postNewCafe( data.name, data.locations, data.website, data.description, data.roaster )
                .then( function(){
                    // 状态2表示添加成功
                    commit( 'setCafeAddStatus', 2 );
                    dispatch( 'loadCafes' );
                })
                .catch( function(){
                    // 状态3表示添加失败
                    commit( 'setCafeAddStatus', 3 );
                });
        },
        // 喜欢咖啡
        likeCafe({commit, dispatch}, data) {
            commit( 'setCafeLikeActionStatus', 1 );

            CafeAPI.postLikeCafe( data.id )
                .then( function(){
                    commit( 'setCafeLikeActionStatus', 2 );
                    commit('setCafeLikedStatus', true);
                })
                .catch( function(){
                    commit( 'setCafeLikeActionStatus', 3 );
                });
        },
        // 取消喜欢咖啡
        unlikeCafe({commit, dispatch}, data) {
            commit( 'setCafeUnlikeActionStatus', 1 );

            CafeAPI.deleteLikeCafe( data.id )
                .then( function(){
                    commit( 'setCafeUnlikeActionStatus', 2 );
                    commit('setCafeLikedStatus', false);
                })
                .catch( function(){
                    commit( 'setCafeUnlikeActionStatus', 3 );
                });
        }

    },
    /**
     * Defines the mutations used
     */
    mutations: {
        setCafesLoadStatus(state, status) {
            state.cafesLoadStatus = status;
        },

        setCafes(state, cafes) {
            state.cafes = cafes;
        },

        setCafeLoadStatus(state, status) {
            state.cafeLoadStatus = status;
        },

        setCafe(state, cafe) {
            state.cafe = cafe;
        },
        setCafeAddStatus(state, status) {
            state.cafeAddStatus = status;
        },

        setCafeLikeActionStatus(state, status) {
            state.cafeLikeActionStatus = status;
        },
        setCafeUnlikeActionStatus(state, status) {
            state.cafeUnlikeActionStatus = status;
        },
        setCafeLikedStatus(state, status) {
            state.cafeLiked = status;
        }

    },
    /**
     * Defines the getters used by the module
     */
    getters: {
        getCafesLoadStatus(state) {
            return state.cafesLoadStatus;
        },

        getCafes(state) {
            return state.cafes;
        },

        getCafeLoadStatus(state) {
            return state.cafeLoadStatus;
        },

        getCafe(state) {
            return state.cafe;
        },
        getCafeAddStatus(state) {
            return state.cafeAddStatus;
        },


        getCafeLikeActionStatus(state) {
            return state.cafeLikeActionStatus;
        },
        getCafeUnlikeActionStatus(state) {
            return state.cafeUnlikeActionStatus;
        },
        getCafeLikedStatus(state) {
            return state.cafeLiked;
        }
    }
};