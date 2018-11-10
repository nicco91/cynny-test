export const toggleVideo = ({ state, commit }) => {
  if (state.playing) {
    commit('play')
  } else {
    commit('pause')
  }
}
