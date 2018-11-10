export default {
  play (state) {
    state.playing = true
  },
  pause (state) {
    state.playing = false
  },
  setVolume (state, payload) {
    state.volume = payload
    state.mute = false
  },
  setMute (state) {
    state.mute = true
  },
  setNotMute (state) {
    state.mute = false
  },
  setCurrentTime (state, payload) {
    state.currentTime = payload
  },
  setTotalTime (state, payload) {
    state.totalTime = payload
  },
  startLoading (state) {
    state.loading = true
  },
  stopLoading (state) {
    state.loading = false
  },
  setBuffers (state, payload) {
    state.buffers = payload
  }
}
