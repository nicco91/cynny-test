export const togglePlay = ({ state, commit }) => {
  if (state.playing) {
    commit('pause')
  } else {
    commit('play')
  }
}

export const setVolume = ({ commit }, volume) => {
  commit('setVolume', volume)
}

export const toggleMute = ({ state, commit }) => {
  if (state.mute) {
    commit('setNotMute')
  } else {
    commit('setMute')
  }
}
