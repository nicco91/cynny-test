<template>
  <div class="volume">
    <VolumeButton />
    <div class="volume-slider-container d-none d-md-block">
      <VolumeSlider />
    </div>
  </div>
</template>

<script>
import VolumeButton from './VolumeButton'
import VolumeSlider from './VolumeSlider'

export default {
  components: {
    VolumeButton,
    VolumeSlider
  }
}
</script>

<style lang="scss" scoped>
  .volume {
    display: flex;
    align-items: center;
  }
  .volume-slider-container {
    display: inline-block;
    width: 80px;
    padding-bottom: 8px;
  }
</style>
