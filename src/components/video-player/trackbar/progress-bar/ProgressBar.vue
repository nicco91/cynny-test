<template>
  <div
    class="trackbar-progress"
    ref="trackbarElement"
    @mousemove="onSetMousePos"
    @click="onSetCurrentTime">
    <ProgressBarBuffer
      v-for="buffer in buffers"
      :key="buffer.start + '-' + buffer.end"
      :buffer="buffer"
    />
    <div class="progress-bar" :style="{ width: percentage + '%' }"></div>
    <!-- <ProgressBarTooltip :time="mouseTime" :position="mousePosition" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProgressBarBuffer from './ProgressBarBuffer'
// import ProgressBarTooltip from './ProgressBarTooltip'

export default {
  components: {
    ProgressBarBuffer
    // ProgressBarTooltip
  },
  data () {
    return {
      mousePosition: null
    }
  },
  computed: {
    ...mapGetters([
      'currentTime',
      'totalTime',
      'buffers'
    ]),
    percentage () {
      return (this.currentTime / this.totalTime) * 100
    },
    mouseTime () {
      if (this.mousePosition) {
        const trackbarWidth = this.$refs.trackbarElement.offsetWidth
        const percentage = this.mousePosition / trackbarWidth
        const time = this.totalTime * percentage
        return time
      }
      return null
    }
  },
  methods: {
    onSetCurrentTime (event) {
      this.$emit('changedTime', this.mouseTime)
    },
    onSetMousePos (event) {
      this.mousePosition = event.offsetX
    },
    onClearMousePos () {
      this.mousePosition = null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../styles/variables';

  .trackbar-progress {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background-color: rgba($controls-color, .5);
    position: relative;

    .progress-bar {
      background-color: $primary;
      // transition: width .6s ease-out;
      height: 100%;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        right: -6px;
        top: -4px;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background-color: $primary;
      }
    }
  }
</style>
