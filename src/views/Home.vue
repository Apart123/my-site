<template>
  <div class="home-container" ref="container">
    首页
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        content: "评论成功",
        type: "success",
        duration: 2000,
        container: this.$refs.container,
        callback: function() {console.log("好了")}
      });
    },
  },
};
</script>

<style scoped lang="less">
.home-container {
  width: 80%;
  height: 300px;
  background: lightblue;
  margin: 20px auto;
}
</style>
