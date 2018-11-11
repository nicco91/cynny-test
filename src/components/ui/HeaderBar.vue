<template>
  <header class="sticky-top">
    <div class="container-fluid d-flex align-items-center">
      <div class="logo">
        <img src="../../assets/logo.svg" class="logo-img">
        <span class="tube">TUBE</span>
      </div>
      <div class="me row">
        <div class="col-auto p-0">
          <div class="img-container">
            <img src="../../assets/me.jpg" width="50">
          </div>
        </div>
        <div class="col-auto text-left designed-by">
          <div class="mt-1 mb-2"><strong>Designed by</strong></div>
          <div>Niccolò Taddei</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '../../styles/index';

  header {
    background-color: lighten(black, 5);
    box-shadow: 10px 0 20px black;
    color: white;
  }
  .designed-by {
    font-size: 14px;
  }
  .img-container {
    width: 50px;
    height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
  }
  .logo {
    text-align: left;
    img {
      display: inline-block;
      padding-right: 6px;
      width: 100px;

      @include media-breakpoint-down(xs) {
        width: 70px
      }
    }
    .tube {
      float: right;
      font-size: 34px;
      font-weight: bold;
      font-style: italic;

      @include media-breakpoint-down(xs) {
        font-size: 23px
      }
    }
  }
  .container-fluid {
    height: 70px;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .me {
    margin-left: auto;
  }
</style>
