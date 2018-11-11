<template>
  <transition name="animate">
    <div class="video-player-indicator-container"
      v-if="isAnimating">
      <div
        class="video-player-indicator"
        :class="{ pause: !isPlaying }">
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isAnimating: false
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying'
    ])
  },
  watch: {
    isPlaying () {
      this.isAnimating = true
      setTimeout(() => { this.isAnimating = false }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';

.video-player-indicator-container {
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background-color: rgba(0,0,0,0.5);
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-player-indicator {
  box-sizing: border-box;
  height: 40px;
  border-color: transparent transparent transparent $controls-color;
  will-change: border-width;
  margin-left: 13px;
  // play state
  border-style: solid;
  border-width: 20px 0 20px 30px;
  // animation: fadeInOut .15s ease-out;

  // paused state
  &.pause {
    border-style: double;
    border-width: 0px 0 0px 30px;
    margin: 0;
  }

}
.animate-enter-active {
  animation: fadeInOut .5s ease-out;
}

@keyframes fadeInOut {
  0%   { transform: scale3d(.5, .5, .5); opacity: 0; }
  50%  { opacity: 0.5; }
  100% { transform: scale3d(1, 1, 1); opacity: 0; }
}
</style>
