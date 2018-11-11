<template>
  <div class="progress-bar-buffer" :style="{ width: bufferPercentage }"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'totalTime',
      'currentTime',
      'buffers'
    ]),
    bufferPercentage () {
      if (this.buffers.length) {
        const filteredBuffers = this.buffers.filter(b => b.start <= this.currentTime)
        const bufferEnd = filteredBuffers[filteredBuffers.length - 1].end
        return ((bufferEnd / this.totalTime) * 100) + '%'
      }
      return '0%'
    }
  }
}
</script>

<style lang="scss" scoped>
  .progress-bar-buffer {
    height: 100%;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.75);
  }
</style>
