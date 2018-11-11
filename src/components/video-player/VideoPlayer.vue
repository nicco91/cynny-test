<template>
  <div class="video-player animated"
    :class="{ fadeIn: !changingVideo, fadeOut: changingVideo }">
    <div class="video">
      <video ref="videoElement"
        @click="togglePlay"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoaded"
        @waiting="startLoading"
        @playing="stopLoading"
        @ended="onNextVideo"
        playsinline
        autoplay
        :muted="mute">
        <source :src="currentVideo.source">
      </video>
      <Loader :isLoading="isLoading" />
      <div class="trackbar-container" :class="{ show: !isPlaying }">
        <Trackbar @changedTime="onChangeCurrentTime"/>
      </div>
      <VideoPlayerIndicator />
    </div>
    <h3 class="video-title">{{ currentVideo.title }}</h3>
  </div>
</template>

<script>
import Trackbar from './trackbar/Trackbar'
import Loader from '../ui/Loader'
import VideoPlayerIndicator from './VideoPlayerIndicator'
import { mapGetters, mapActions } from 'vuex'
import { eventBus } from '../../event-bus'

export default {
  components: {
    VideoPlayerIndicator,
    Trackbar,
    Loader
  },
  mounted () {
    eventBus.$on('changeVideo', (queueItemId) => {
      this.changingVideo = true
      setTimeout(() => {
        this.changeVideo(queueItemId)
        this.changingVideo = false
      }, 2000)
    })
  },
  data () {
    return {
      changingVideo: false
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'isLoading',
      'currentVideo',
      'currentTime',
      'mute',
      'volume',
      'fullscreen',
      'queueItems'
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
      'changeVideo',
      'toggleFullscreen'
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
    },
    onNextVideo () {
      eventBus.$emit('changeVideo', this.queueItems[0].id)
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
  .video-player {
    animation-duration: 1.5s;
  }

  .video {
    width: 100%;
    margin: auto;
    background-color: transparent;
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
    bottom: 4px;
    left: 0;
    right: 0;

    &.show {
      opacity: 1;
    }
  }
</style>
