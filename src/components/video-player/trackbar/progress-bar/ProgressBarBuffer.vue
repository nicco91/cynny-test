<template>
  <div class="progress-bar-buffer" :style="style"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [
    'buffer'
  ],
  computed: {
    ...mapGetters([
      'totalTime'
    ]),
    style () {
      const width = (((this.buffer.end - this.buffer.start) / this.totalTime) * 100) + '%'
      const left = ((this.buffer.start / this.totalTime) * 100) + '%'
      return { width, left }
    }
  }
}
</script>

<style lang="scss" scoped>
  .progress-bar-buffer {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.75);
  }
</style>
