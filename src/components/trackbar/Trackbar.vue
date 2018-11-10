<template>
  <div class="trackbar">
    <div class="play-button-container">
      <PlayButton />
    </div>
    <div class="volume-container">
      <Volume />
    </div>
  </div>
</template>

<script>
import PlayButton from './PlayButton'
import Volume from './volume/Volume'

export default {
  components: {
    PlayButton,
    Volume
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

    .play-button-container,
    .volume-container {
      margin-right: 16px
    }
  }
</style>
