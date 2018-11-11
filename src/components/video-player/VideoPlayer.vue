<template>
  <div class="video-player">
    <div class="video">
      <video ref="videoElement"
        @click="togglePlay"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoaded"
        @waiting="startLoading"
        @playing="stopLoading"
        @ended="nextVideo"
        autoplay
        :muted="mute">
        <source :src="currentVideo.source">
      </video>
      <Loader :isLoading="isLoading" />
      <div class="trackbar-container" :class="{ show: !isPlaying }">
        <Trackbar @changedTime="onChangeCurrentTime"/>
      </div>
    </div>
    <h2 class="video-title">{{ currentVideo.title }}</h2>
  </div>
</template>

<script>
import Trackbar from './trackbar/Trackbar'
import Loader from '../ui/Loader'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Trackbar,
    Loader
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'isLoading',
      'currentVideo',
      'currentTime',
      'mute',
      'volume'
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
      'stopLoading',
      'nextVideo'
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
    currentVideo () {
      this.videoElement.load()
      this.togglePlay()
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

  .video-title {
    text-align: left;
    font-weight: normal;
  }

  .trackbar-container {
    opacity: 0;
    transition: opacity .3s ease-out;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    &.show {
      opacity: 1;
    }
  }
</style>
