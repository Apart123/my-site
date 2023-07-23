<template>
  <div class="site-aside-container">
    <Avatar
      url="https://tvax3.sinaimg.cn/crop.0.0.512.512.180/001XZDurly8hf856sjiatj60e80e874x02.jpg?KID=imgbed,tva&Expires=1690101911&ssig=n0ZRhKPhls"
      :size="150"
    />
    <h3>勤奋的天才天天拼命</h3>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import Menu from "@/components/Menu.vue";
import Contact from "@/components/Contact.vue";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
.site-aside-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 0;
  box-sizing: border-box;
  h3 {
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
  }
  .avatar-container {
    margin: 0 auto;
  }
}
</style>
