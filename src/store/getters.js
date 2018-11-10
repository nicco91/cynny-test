export const isPlaying = (state) => state.playing
export const currentVideo = state => state.currentVideo
export const volume = state => state.mute ? 0 : state.volume
