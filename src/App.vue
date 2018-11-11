<template>
  <div id="app" :class="{ 'night-mode': nightMode }">
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
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    VideoPlayer,
    Queue
  },
  computed: {
    ...mapGetters([
      'nightMode'
    ])
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
  padding-top: 60px;

  @include media-breakpoint-up(lg) {
    padding-left: 60px;
    padding-right: 60px;
  }

  transition: background-color  1s ease-out;
  width: 100%;
  height: 100%;
  position: absolute;

  &.night-mode {
    background-color: rgba(0,0,0,0.9);
    color: rgb(212, 209, 209);
  }
}
</style>
