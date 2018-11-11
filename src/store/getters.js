export const isPlaying = (state) => state.playing
export const currentVideo = state => state.queue[0]
export const volume = state => state.mute ? 0 : state.volume
export const mute = state => state.mute
export const currentTime = state => state.currentTime
export const totalTime = state => state.totalTime
export const isLoading = state => state.loading
export const buffers = state => [...state.buffers]
export const queueItems = state => state.queue.slice(1)
export const fullscreen = state => state.fullscreen
