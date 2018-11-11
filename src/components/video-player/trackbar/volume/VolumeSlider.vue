<template>
  <input
    type="range"
    min="0" max="100"
    :value="volume"
    :style="{ background: background }"
    class="volume-slider"
    @change="onChange"
    @input="onChange">
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'volume'
    ]),
    background () {
      const style = 'linear-gradient(to right, ' +
        `rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${this.volume}%, ` +
        `rgba(255,255,255,.45) ${this.volume}%, rgba(255,255,255,.45) 100%` +
      ')'
      console.log(style)
      return style
    }
  },
  methods: {
    ...mapActions([
      'setVolume'
    ]),
    onChange (event) {
      this.setVolume(event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../styles/variables';

  @mixin volume-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: $controls-color;
    border-radius: 100%;
    cursor: pointer;
  }

  .volume-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background: $controls-color;
    outline: none;
    opacity: 0.75;
    -webkit-transition: .3s;
    transition: all .3s;
    cursor: pointer;
  }
  .volume-slider::-webkit-slider-thumb {
    @include volume-slider-thumb();
  }
  .volume-slider::-moz-range-thumb {
    @include volume-slider-thumb();
  }

  .volume-slider:hover {
    opacity: 1;
  }
</style>
