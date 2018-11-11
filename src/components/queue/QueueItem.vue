<template>
  <div class="queue-item">
    <div class="row">
      <div class="col-5">
        <div class="video-container"
          @mouseover="showPlay = true"
          @mouseout="showPlay = false"
          @click="onChangeVideo()">
          <video
            preload="metadata"
            @loadedmetadata="setDuration"
            @loadeddata="isLoading = false">
            <source :src="queueItem.source + '#t0.1'">
          </video>
          <div class="duration">{{ formattedDuration }}</div>
          <QueueItemPlay :show="showPlay && !isLoading" />
          <Loader :isLoading="isLoading" />
        </div>
      </div>
      <div class="col-7 pl-0">
        <h5 class="item-title text-truncate my-3"
          @mouseover="showPlay = true"
          @mouseout="showPlay = false"
          @click="onChangeVideo()">
          {{ queueItem.title }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../event-bus'
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
    setDuration (event) {
      this.duration = event.target.duration
    },
    onChangeVideo () {
      eventBus.$emit('changeVideo', this.queueItem.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .queue-item {
    margin-bottom: 16px;

    .video-container {
      position: relative;
      cursor: pointer;
      background-color: transparent;

      video {
        width: 100%;
      }
    }

    .item-title {
      text-align: left;
      cursor: pointer;
    }

    .duration {
      position: absolute;
      bottom: 10px;
      right: 6px;
      background-color: rgba(black, .75);
      color: white;
      padding: 3px 6px;
      font-size: 14px;
    }
  }
</style>
