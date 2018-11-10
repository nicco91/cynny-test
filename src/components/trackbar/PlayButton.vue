<template>
  <div
    class="play-button"
    :class="{ 'pause': playing }"
    @click="onPlay()">
  </div>
</template>

<script>
export default {
  props: {
    playing: { type: Boolean, required: true }
  },
  methods: {
    onPlay () {
      this.$emit('play')
    }
  }
}
</script>

<style lang="scss" scoped>
  .play-button {
    cursor: pointer;
    opacity: .75;

    &:hover {
      opacity: 1;
    }

    box-sizing: border-box;
    height: 74px;
    border-color: transparent transparent transparent #202020;
    transition: 100ms all ease;
    will-change: border-width;
    cursor: pointer;
    margin-left: 13px;
    // play state
    border-style: solid;
    border-width: 37px 0 37px 60px;

    // paused state
    &.pause {
      border-style: double;
      border-width: 0px 0 0px 60px;
    }
  }
</style>
