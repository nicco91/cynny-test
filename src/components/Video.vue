<template>
  <div class="video">
    <video ref="videoElement" @click="onTogglePlay()">
      <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      playing: false
    }
  },
  computed: {
    videoElement () {
      return this.$refs.videoElement
    }
  },
  methods: {
    onTogglePlay () {
      if (this.playing) {
        this.videoElement.pause()
        this.playing = false
      } else {
        this.videoElement.play()
        this.playing = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .video {
    position: relative;
  }
</style>
