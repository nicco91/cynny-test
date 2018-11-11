<template>
  <button class="video-next-button" @click="onClick">
    <i class="material-icons">skip_previous</i>
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
      const last = this.queueItems.length - 1
      eventBus.$emit('changeVideo', this.queueItems[last].id)
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
