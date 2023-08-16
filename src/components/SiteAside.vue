<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" :size="150" />
      <h3>{{ data.siteTitle }}</h3>
    </template>
    
    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import Menu from "@/components/Menu.vue";
import Contact from "@/components/Contact.vue";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
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
.footer {
  text-align: center;
  font-size: 12px;
  color: @gray;
}
</style>
