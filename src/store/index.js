import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doglist: [],
    dogimage: null,
  },
  getters: {
    getDogList(state) {
      return state.doglist;
    },
    getDogImage(state) {
      return state.dogimage;
    },
  },
  mutations: {
    DOGLIST_SETTER(state, payload) {
      state.doglist = payload;
    },
    DOGIMAGE_SETTER(state, payload) {
      state.dogimage = payload;
    },
  },
  actions: {
    async dogFetchAction(context) {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await res.json();
        context.commit("DOGLIST_SETTER", Object.keys(data.message));
      } catch (err) {
        console.log(err);
      }
    },
    async dogImageFetch(context, payload) {
      try {
        const res = await fetch(
          `https://dog.ceo/api/breed/${payload}/images/random`
        );
        const data = await res.json();
        context.commit("DOGIMAGE_SETTER", data.message);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
