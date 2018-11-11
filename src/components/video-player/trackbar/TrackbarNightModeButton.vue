<template>
  <button class="nightmode-button" type="button" @click="toggleNightMode()">
    <span class="button-content" v-if="nightMode">
      <i class="material-icons">brightness_5</i>
      Day mode
    </span>
    <span class="button-content" v-else>
      <i class="material-icons">brightness_3</i>
      Night mode
    </span>
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'nightMode'
    ])
  },
  methods: {
    ...mapActions([
      'toggleNightMode'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/variables';
  @import '../../../styles/mixins';

  .nightmode-button {
    @include trackbar-button;
    padding: 6px 12px;
    border: 1px solid #fafafa;
    border-radius: 4px;
  }

  .button-content {
    display: flex;
    height: 100%;
    align-items: center;

    .material-icons {
      margin-right: .5rem;
    }
  }
</style>
