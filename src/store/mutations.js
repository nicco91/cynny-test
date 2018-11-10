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
  }
}
