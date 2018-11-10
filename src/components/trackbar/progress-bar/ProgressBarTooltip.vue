<template>
  <div class="tooltip" :style="{ left }">
    {{ formattedTime }}
  </div>
</template>

<script>
import { formatTime } from '../../../helpers/formatter'

export default {
  props: {
    time: { type: Number },
    position: {}
  },
  computed: {
    formattedTime () {
      return this.time ? formatTime(this.time) : ''
    },
    left () {
      console.log(this.position)
      return (this.position ? this.position : '0') + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/variables';

  .tooltip {
    background-color: rgba(gray, .2);
    color: $controls-color;
    font-size: 14px;
    padding: 6px 12px;
    position: absolute;
    top: -20px;
  }
</style>
