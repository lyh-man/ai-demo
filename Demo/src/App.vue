<template>
  <div class="main-app">
    <Header/>
    <div class="container" :class="screenWidth <= 900 ? 'mb-cont' : ''">
      <div class="left" v-if="screenWidth > 900 && pathName != 'chat'">
        <TypeTab/>
      </div>
      <div class="main-router">
        <img class="chatBg" src="/@/assets/images/chatBg.png" alt="">
        <div class="right">
          <div class="router-content">
            <router-view></router-view>
          </div>
          <InputContent v-if="pathName != 'chat'"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped lang="scss">
.main-app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  background: #0A0600;
}

.container {
  height: calc(100% - 1.48rem);
  display: flex;
  padding: .4rem 0 .4rem 0rem;
  background: url(/@/assets/images/maxBg.svg) no-repeat;
  background-size: cover;
  padding-top: .1rem;

  &.mb-cont {
    padding: 0;
    height: 100%;
  }

  .left {
    width: 300px;
    padding-top: .3rem;
    padding-left: 0.4rem;
  }

  .main-router {
    flex: 1;
    padding-top: .1rem;
    position: relative;

    .chatBg {
      width: 100%;
      height: 100%;
    }

    .right {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
    }

    .router-content {
      flex: 1;
      overflow: hidden;
      position: relative;
    }
  }
}
</style>
