<template>
  <div
    class="play-button"
    :class="{ 'pause': isPlaying }"
    @click="togglePlay()">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isPlaying'
    ])
  },
  methods: {
    ...mapActions([
      'togglePlay'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';

  .play-button {
    cursor: pointer;
    opacity: .75;

    &:hover {
      opacity: 1;
    }

    box-sizing: border-box;
    height: 20px;
    border-color: transparent transparent transparent $controls-color;
    transition: 300ms all ease;
    will-change: border-width;
    cursor: pointer;
    margin-left: 13px;
    // play state
    border-style: solid;
    border-width: 10px 0 10px 17px;

    // paused state
    &.pause {
      border-style: double;
      border-width: 0px 0 0px 17px;
    }
  }
</style>
