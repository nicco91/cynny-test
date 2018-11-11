<template>
  <button class="volume-button" type="button" @click="toggleMute()">
    <i class="material-icons" v-if="volume >= 50">volume_up</i>
    <i class="material-icons" v-else-if="volume < 50 && volume > 0">volume_down</i>
    <i class="material-icons" v-else>volume_off</i>
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'volume'
    ])
  },
  methods: {
    ...mapActions([
      'toggleMute'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../styles/variables';
  @import '../../../../styles/mixins';

  .volume-button {
    @include trackbar-button;
  }
</style>
