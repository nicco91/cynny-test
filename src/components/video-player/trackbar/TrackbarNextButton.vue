<template>
  <button class="video-next-button" @click="onClick">
    <i class="material-icons">skip_next</i>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '../../../event-bus'
export default {
  computed: {
    ...mapGetters([
      'queueItems'
    ])
  },
  methods: {
    onClick () {
      eventBus.$emit('changeVideo', this.queueItems[0].id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/variables';
  @import '../../../styles/mixins';

  .video-next-button {
    @include trackbar-button;
  }
</style>
