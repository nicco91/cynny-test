<template>
  <div class="trackbar">
    <div class="prev-button-container">
      <TrackbarPrevButton />
    </div>
    <div class="play-button-container">
      <TrackbarPlayButton />
    </div>
    <div class="next-button-container">
      <TrackbarNextButton />
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
    <div class="nightmode-container d-none d-md-block">
      <TrackbarNightModeButton />
    </div>
  </div>
</template>

<script>
import TrackbarPlayButton from './TrackbarPlayButton'
import TrackbarNextButton from './TrackbarNextButton'
import TrackbarPrevButton from './TrackbarPrevButton'
import TrackbarNightModeButton from './TrackbarNightModeButton'
import TrackbarTimer from './TrackbarTimer'
import ProgressBar from './progress-bar/ProgressBar'
import Volume from './volume/Volume'

export default {
  components: {
    TrackbarNextButton,
    TrackbarPrevButton,
    TrackbarNightModeButton,
    TrackbarPlayButton,
    TrackbarTimer,
    ProgressBar,
    Volume
  },
  methods: {
    onChangedTime (event) {
      this.$emit('changedTime', event)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/index';

  .trackbar {
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(black, 0) 0%,
      rgba(black, 0.25) 50%,
      rgba(black, 0.75) 100%
    );
    padding: 60px 20px 15px 10px;
    display: flex;
    align-items: center;
    justify-content: start;

    .volume-container {
      padding-top: 2px;
    }

    .progress-container {
      flex: 1 1 auto;
    }

    .prev-button-container {
      margin-right: 8px;
    }
    .next-button-container,
    .play-button-container,
    .volume-container,
    .timer-container,
    .progress-container {
      margin-right: 16px;
    }

    @include media-breakpoint-down(sm) {
      .progress-container {
        margin: 0;
      }
    }
  }
</style>
