<template>
  <div class="trackbar">
    <div class="play-button-container">
      <TrackbarPlayButton />
    </div>
    <div class="volume-container">
      <Volume />
    </div>
    <div class="timer-container">
      <TrackbarTimer />
    </div>
    <div class="progress-container">
      <ProgressBar @changedTime="onChangedTime" />
    </div>
  </div>
</template>

<script>
import TrackbarPlayButton from './TrackbarPlayButton'
import TrackbarTimer from './TrackbarTimer'
import ProgressBar from './progress-bar/ProgressBar'
import Volume from './volume/Volume'

export default {
  components: {
    TrackbarPlayButton,
    TrackbarTimer,
    ProgressBar,
    Volume
  },
  methods: {
    onChangedTime (event) {
      console.log(event)
      this.$emit('changedTime', event)
    }
  }
}
</script>

<style lang="scss" scoped>
  .trackbar {
    width: 100%;
    background-color: black;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: start;

    .volume-container {
      padding-top: 2px;
    }

    .progress-container {
      flex: 1 1 auto;
    }

    .play-button-container,
    .volume-container,
    .timer-container,
    .progress-container {
      margin-right: 16px
    }
  }
</style>
