<template>
  <div class="queue-item"
    @mouseover="showPlay = true"
    @mouseout="showPlay = false"
    @click="changeVideo(queueItem.id)">
    <video preload="metadata" @loadedmetadata="setDuration" @loadeddata="isLoading = false">
      <source :src="queueItem.source + '#t0.1'">
    </video>
    <div class="duration">{{ formattedDuration }}</div>
    <QueueItemPlay :show="showPlay && !isLoading" />
    <Loader :isLoading="isLoading" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { formatTime } from '../../helpers/formatter'
import QueueItemPlay from './QueueItemPlay'
import Loader from '../ui/Loader'

export default {
  components: {
    QueueItemPlay,
    Loader
  },
  props: {
    queueItem: { type: Object, required: true }
  },
  data () {
    return {
      duration: 0,
      showPlay: false,
      isLoading: true
    }
  },
  computed: {
    formattedDuration () {
      return formatTime(this.duration)
    }
  },
  methods: {
    ...mapActions([
      'changeVideo'
    ]),
    setDuration (event) {
      this.duration = event.target.duration
    }
  }
}
</script>

<style lang="scss" scoped>
  .queue-item {
    max-width: 256px;
    max-height: 144px;
    margin-bottom: 16px;
    position: relative;
    cursor: pointer;
    display: flex;
    background-color: black;

    video {
      width: 100%;
    }

    .duration {
      position: absolute;
      bottom: 6px;
      right: 6px;
      background-color: rgba(black, .75);
      color: white;
      padding: 3px 6px;
      font-size: 14px;
    }
  }
</style>
