<template>
  <div class="trackbar-timer">
    {{ formattedCurrentTime }} / {{ formattedTotalTime }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatTime } from '../../../helpers/formatter'

export default {
  computed: {
    ...mapGetters([
      'currentTime',
      'totalTime'
    ]),
    formattedCurrentTime () {
      return formatTime(this.currentTime)
    },
    formattedTotalTime () {
      return formatTime(this.totalTime)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/variables';

  .trackbar-timer {
    color: darken($controls-color, 20);
    font-size: 14px;
  }
</style>
