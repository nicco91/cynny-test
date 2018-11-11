<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8">
          <VideoPlayer />
        </div>
        <div class="col-lg-4">
          <hr class="d-lg-none">
          <Queue />
        </div>
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
</style>
