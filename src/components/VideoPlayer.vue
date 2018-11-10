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
    <Trackbar @changedTime="onChangeCurrentTime"/>
    <Loader />
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
      'startLoading',
      'stopLoading'
    ]),
    onTimeUpdate (event) {
      this.setCurrentTime(event.target.currentTime)
    },
    onChangeCurrentTime (event) {
      this.videoElement.currentTime = event
    },
    onLoaded (event) {
      this.setTotalTime(event.target.duration)
    }
  },
  mounted () {
    console.log(this.videoElement.played)
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
  }
</style>
