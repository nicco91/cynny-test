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
  },
  changeVideo (state, payload) {
    const queue = [...state.queue]
    const selectedItemIndex = queue.findIndex(item => item.id === payload)
    const skippedItems = queue.splice(0, selectedItemIndex + 1)
    const selectedItem = skippedItems.pop()
    const newQueue = [selectedItem, ...queue, ...skippedItems]
    state.queue = newQueue
    state.playing = false
    state.currentTime = 0
    state.totalTime = 0
  }
}
