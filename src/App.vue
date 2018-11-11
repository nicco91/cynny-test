<template>
  <div id="app" :class="{ 'night-mode': nightMode }">
    <HeaderBar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-xl-9">
          <VideoPlayer />
        </div>
        <div class="col-lg-4 col-xl-3">
          <hr class="d-lg-none">
          <Queue />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/ui/HeaderBar'
import VideoPlayer from './components/video-player/VideoPlayer'
import Queue from './components/queue/Queue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    HeaderBar,
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
  transition: background-color  1s ease-out;
  width: 100%;
  min-height: 100%;
  position: absolute;

  &.night-mode {
    background-color: rgba(0,0,0,0.9);
    color: rgb(212, 209, 209);

    hr {
      border-color: rgba(white, .1)
    }
  }

  .container-fluid {
    padding-top: 30px;
    padding-bottom: 30px;
    @include media-breakpoint-up(xl) {
      padding: 60px 120px;
    }
  }
}
</style>
