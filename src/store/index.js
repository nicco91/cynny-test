import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  playing: false,
  volume: 100,
  mute: false,
  currentVideo: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
