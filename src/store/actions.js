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

export const toggleFullscreen = ({ state, commit }) => {
  if (state.fullscreen) {
    commit('exitFullscreen')
  } else {
    commit('setFullscreen')
  }
}

export const setTotalTime = ({ commit }, totalTime) => {
  commit('setTotalTime', totalTime)
}

export const startLoading = ({ commit }) => commit('startLoading')
export const stopLoading = ({ commit }) => commit('stopLoading')

export const setBuffers = ({ commit }, timeRanges) => {
  const buffers = []
  for (let i = 0; i < timeRanges.length; i++) {
    buffers.push({ start: timeRanges.start(i), end: timeRanges.end(i) })
  }
  commit('setBuffers', buffers)
}

export const changeVideo = ({ state, commit }, selectedItemId) => {
  commit('changeVideo', selectedItemId)
}

export const toggleNightMode = ({ state, commit }) => {
  if (state.nightMode) {
    commit('exitNightMode')
  } else {
    commit('setNightMode')
  }
}
