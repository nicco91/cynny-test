import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  playing: true,
  loading: false,
  volume: 100,
  mute: true,
  fullscreen: false,
  buffers: [],
  nightMode: false,
  queue: [{
    id: 1,
    title: 'Big Buck Bunny',
    source: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4'
  }, {
    id: 2,
    title: 'Toy Story 3 - Trailer',
    source: 'http://www.html5videoplayer.net/videos/toystory.mp4'
  }, {
    id: 3,
    title: 'Jellyfishes, how are they effectively swimming?',
    source: 'http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4'
  }, {
    id: 4,
    title: 'Unbelievable star trails!',
    source: 'http://mirrors.standaloneinstaller.com/video-sample/star_trails.mp4'
  }],
  currentTime: 0,
  totalTime: 0
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
