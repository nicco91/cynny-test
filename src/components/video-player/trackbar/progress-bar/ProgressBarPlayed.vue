<template>
  <div class="progress-bar-played" :style="{ width: progressPercentage + '%' }"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'currentTime',
      'totalTime'
    ]),
    progressPercentage () {
      return (this.currentTime / this.totalTime) * 100
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../styles/variables';

  .progress-bar-played {
    background-color: $primary;
    height: 100%;
    position: absolute;

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
</style>
