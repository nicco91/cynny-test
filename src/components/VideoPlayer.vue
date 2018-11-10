<template>
  <div class="video">
    <video ref="videoElement" @click="onTogglePlay()">
      <source :src="currentVideo">
    </video>
    <Trackbar />
  </div>
</template>

<script>
import Trackbar from './trackbar/Trackbar'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Trackbar
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentVideo',
      'volume'
    ]),
    videoElement () {
      return this.$refs.videoElement
    }
  },
  methods: {
    ...mapActions([
      'togglePlay'
    ]),
    onTogglePlay () {
      this.togglePlay()
    }
  },
  watch: {
    isPlaying () {
      if (this.isPlaying) {
        this.videoElement.play()
      } else {
        this.videoElement.pause()
      }
    },
    volume () {
      this.videoElement.volume = this.volume / 100
    }
  }
}
</script>

<style lang="scss" scoped>
  .video {
    width: 1280px;
    margin: auto;
    background-color: black;
  }
</style>
