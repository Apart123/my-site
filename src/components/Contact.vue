<template>
  <div class="contact-container">
    <a :href="data.github" target="_blank">
      <Icon type="github" />
      <div class="text">{{ data.githubName }}</div>
    </a>
    <a :href="`mailto:${data.mail}`">
      <Icon type="mail" />
      <div class="text">{{ data.mail }}</div>
    </a>
    <a
      class="qq"
      :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
    >
      <Icon type="qq" />
      <div class="text">{{ data.qq }}</div>
      <div class="img"><img :src="data.qqQrCode" alt="" /></div>
    </a>
    <a class="weixin">
      <Icon type="weixin" />
      <div class="text">{{ data.weixin }}</div>
      <div class="img"><img :src="data.weixinQrCode" alt="" /></div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  width: 100%;
  background: transparent;
  color: lighten(@lightWords, 20%);
  padding: 10px 0;
  a {
    display: flex;
    margin: 10px 0;
    height: 30px;
    align-items: center;
    position: relative;
    .icon-container {
      font-size: 24px;
      margin: 0 10px;
    }
    .text {
      font-size: 13px;
    }
    &:last-child .icon-container {
      font-size: 28px;
      margin-left: 8px;
    }
  }
  .qq .img, .weixin .img {
    position: absolute;
    width: 150px;
    height: 150px;
    top: -160px;
    left: 10px;
    padding: 5px 10px;
    background: #fff;
    border-radius: 5px;
    transition: .3s;
    transform-origin: center bottom;
    display: none;
    img {
      width: 100%;
      height: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 8px;
      height: 8px;
      bottom: -4px;
      left: 85px;
      background: #fff;
      transform: rotate(45deg);
    }
  }
  .qq:hover .img {
    display: block;
  }
  .weixin:hover .img {
    display: block;
  }
}
</style>
