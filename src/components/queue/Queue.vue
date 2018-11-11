<template>
  <div class="queue">
    <h4 class="queue-title mb-3 mt-4 mt-md-0">Next videos</h4>
    <QueueItem
      v-for="queueItem in queueItems"
      :key="queueItem.id"
      :queueItem="queueItem"
    />
  </div>
</template>

<script>
import QueueItem from './QueueItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    QueueItem
  },
  computed: {
    ...mapGetters([
      'queueItems'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .queue-title {
    margin-top: 0;
    text-align: left;
  }
</style>
