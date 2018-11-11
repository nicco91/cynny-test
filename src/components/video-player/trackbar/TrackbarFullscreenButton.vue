<template>
  <button class="fullscreen-button" type="button" @click="toggleFullscreen()">
    <i class="material-icons" v-if="fullscreen">fullscreen_exit</i>
    <i class="material-icons" v-else>fullscreen</i>
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'fullscreen'
    ])
  },
  methods: {
    ...mapActions([
      'toggleFullscreen'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/variables';
  @import '../../../styles/mixins';

  .fullscreen-button {
    @include trackbar-button;
  }
</style>
