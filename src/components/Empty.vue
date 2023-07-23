<template>
  <div class="empty-container">
    <div class="icon">
      <Icon type="empty" />
    </div>
    <div class="txt" >{{ text }}</div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  color: @gray;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  .self-center;
  .icon {
    font-size: 72px;
  }
  .txt {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
