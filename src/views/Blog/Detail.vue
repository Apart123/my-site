<template>
  <Layout>
    <div ref="mainContainer"  class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout.vue";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComment from "./components/BlogComment.vue";

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  mixins: [fetchData(null)],
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    handleScroll() {
      // 事件总线：触发事件
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    },
  },
  mounted() {
    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll");
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  },
  updated() {
    // 刷新页面跳转到锚链接位置
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
