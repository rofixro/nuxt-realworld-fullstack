<template>
  <div class="http404">
    <div class="http404__container">
      <error-svg />
      <p>你所访问的页面不存在</p>
      <van-button type="primary" size="small">回到首页</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import errorSvg from "@/assets/images/error/404.svg";
</script>

<style lang="scss" scoped>
.http404 {
  display: grid;
  height: 100vh;
  place-content: center;

  &__container {
    text-align: center;

    svg {
      width: 250px;
    }
  }
}
</style>
