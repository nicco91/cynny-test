<template>
  <div id="app">
    <Video></Video>
  </div>
</template>

<script>
import Video from './components/Video'

export default {
  name: 'app',
  components: {
    Video
  },
  methods: {}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
