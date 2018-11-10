export const togglePlay = ({ state, commit }) => {
  if (state.playing) {
    commit('pause')
  } else {
    commit('play')
  }
}
export const setVolume = ({ commit }, volume) => commit('setVolume', volume)
export const setCurrentTime = ({ commit }, currentTime) => commit('setCurrentTime', currentTime)

export const toggleMute = ({ state, commit }) => {
  if (state.mute) {
    commit('setNotMute')
  } else {
    commit('setMute')
  }
}

export const setTotalTime = ({ commit }, totalTime) => {
  commit('setTotalTime', totalTime)
}

export const startLoading = ({ commit }) => commit('startLoading')
export const stopLoading = ({ commit }) => commit('stopLoading')
