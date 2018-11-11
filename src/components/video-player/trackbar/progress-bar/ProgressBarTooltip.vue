<template>
  <div class="tooltip" :style="{ left }">
    {{ formattedTime }}
  </div>
</template>

<script>
import { formatTime } from '../../../../helpers/formatter'

export default {
  props: {
    time: { type: Number },
    position: { type: Number }
  },
  computed: {
    formattedTime () {
      return this.time ? formatTime(this.time) : ''
    },
    left () {
      return (this.position ? (this.position - 20) : 0) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../styles/variables';

  .tooltip {
    background-color: rgba(black, .5);
    color: $controls-color;
    font-size: 14px;
    padding: 3px 6px;
    position: absolute;
    top: -24px;
  }
</style>
