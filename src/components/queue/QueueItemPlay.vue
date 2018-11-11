<template>
  <div class="queue-item-play" :class="{ 'show': show }">
    <i class="material-icons">play_arrow</i>
  </div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean }
  }
}
</script>

<style lang="scss" scoped>
  .queue-item-play {
    position: absolute;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(black, .5);
    border-radius: 100%;
    top: calc(50% - 32px);
    left: calc(50% - 32px);
    opacity: 0;
    transition: opacity .3s ease-out;

    i {
      font-size: 60px;
      color: rgba(white, .75)
    }

    &.show {
      opacity: 1;
    }
  }
</style>
