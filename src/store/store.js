import Vue from "vue";
import Vuex from "vuex";

import isEqual from "lodash.isequal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTopic: null,
    activeKeywords: []
  },
  getters: {
    isKeywordActive: state => keyword => state.activeKeywords.includes(keyword),
    isTopicActive: state => topic => isEqual(state.activeTopic, topic)
  },
  mutations: {
    selectNewTopic: (state, topic) => (state.activeTopic = topic),
    removeActiveTopic: state => (state.activeTopic = null),
    addActiveKeyword: (state, keyword) => {
      state.activeKeywords = [...state.activeKeywords, keyword];
    },
    removeKeyword: (state, keyword) => {
      state.activeKeywords = state.activeKeywords.filter(kw => kw !== keyword);
    }
  }
});
