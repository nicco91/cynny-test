<template>
  <div
    class="trackbar-progress"
    ref="trackbarElement"
    @mouseover="showTooltip = true"
    @mouseout="showTooltip = false"
    @mousemove="onSetMousePos"
    @click="onSetCurrentTime">
    <ProgressBarBuffer />
    <ProgressBarPlayed />
    <ProgressBarTooltip
      v-if="showTooltip"
      :time="mouseTime"
      :position="mousePosition" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProgressBarPlayed from './ProgressBarPlayed'
import ProgressBarBuffer from './ProgressBarBuffer'
import ProgressBarTooltip from './ProgressBarTooltip'

export default {
  components: {
    ProgressBarBuffer,
    ProgressBarPlayed,
    ProgressBarTooltip
  },
  data () {
    return {
      showTooltip: false,
      mousePosition: null
    }
  },
  computed: {
    ...mapGetters([
      'totalTime'
    ]),
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
  }
</style>
