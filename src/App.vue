<template>
  <div id="app">
    <div class="container">
      <div class="video-player-container">
        <VideoPlayer />
      </div>
      <div class="queue-container">
        <Queue />
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from './components/video-player/VideoPlayer'
import Queue from './components/queue/Queue'

export default {
  name: 'app',
  components: {
    VideoPlayer,
    Queue
  },
  methods: {}
}
</script>

<style lang="scss">
@import './styles/index';

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1440px;
  display: flex;
  margin: auto;
  padding: 0 16px;
}

.video-player-container {
  flex: 1 1 auto;
  padding-right: 32px;
}

.queue-container {
  flex: 0 0 auto;
}
</style>
