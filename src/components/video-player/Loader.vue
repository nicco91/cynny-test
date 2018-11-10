<template>
  <div class="loader-wrapper" v-if="isLoading">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>

<style lang="scss" scoped>
.loader-wrapper {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(black, .5);
}
.loader {
  margin: auto;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.loader div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.loader div:nth-child(1) {
  left: 6px;
  animation: loader1 0.6s infinite;
}
.loader div:nth-child(2) {
  left: 6px;
  animation: loader2 0.6s infinite;
}
.loader div:nth-child(3) {
  left: 26px;
  animation: loader2 0.6s infinite;
}
.loader div:nth-child(4) {
  left: 45px;
  animation: loader3 0.6s infinite;
}
@keyframes loader1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
