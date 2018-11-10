<template>
  <div class="video">
    <video ref="videoElement"
      @click="togglePlay"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoaded"
      @waiting="startLoading"
      @playing="stopLoading">
      <source :src="currentVideo">
    </video>
    <Loader />
    <div class="trackbar-container">
      <Trackbar @changedTime="onChangeCurrentTime"/>
    </div>
  </div>
</template>

<script>
import Trackbar from './trackbar/Trackbar'
import Loader from './Loader'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Trackbar,
    Loader
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentVideo',
      'volume',
      'currentTime'
    ]),
    videoElement () {
      return this.$refs.videoElement
    }
  },
  methods: {
    ...mapActions([
      'togglePlay',
      'setCurrentTime',
      'setTotalTime',
      'setBuffers',
      'startLoading',
      'stopLoading'
    ]),
    onTimeUpdate (event) {
      this.setBuffers(event.target.buffered)
      this.setCurrentTime(event.target.currentTime)
    },
    onChangeCurrentTime (currentTime) {
      this.videoElement.currentTime = currentTime
      this.setCurrentTime(currentTime)
    },
    onLoaded (event) {
      this.setTotalTime(event.target.duration)
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
    width: 100%;
    max-width: 1280px;
    margin: auto;
    background-color: black;
    position: relative;

    video {
      width:100%;
    }

    &:hover {
      .trackbar-container {
        opacity: 1;
      }
    }
  }

  .trackbar-container {
    opacity: 0;
    transition: opacity .15s ease-out;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
