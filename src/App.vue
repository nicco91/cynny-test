<template>
  <div id="app">
    <VideoPlayer />
  </div>
</template>

<script>
import VideoPlayer from './components/VideoPlayer'

export default {
  name: 'app',
  components: {
    VideoPlayer
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
