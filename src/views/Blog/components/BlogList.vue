<template>
  <div class="blog-list-container" ref="mainContainer" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <!-- 文章缩略图 -->
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <!-- 文章信息 -->
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @changePage="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
export default {
  // blog 数据格式是一个对象
  mixins: [fetchData({})], // 获取远程数据
  components: {
    Pager,
  },
  computed: {
    // 获取路由信息
    routeInfo() {
      // 分类
      const categoryId = +this.$route.params.categoryId || -1;
      // 第几页
      const page = +this.$route.query.page || 1;
      // 页容量
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
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
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    // 处理页码变化
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (this.routeInfo.categoryId === -1) {
        // 当前没有分类
        // /article?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },

    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    },
  },
  watch: {
    // 页面变化重新获取数据
    // $route变化 => 调用
    async $route() {
      this.isLoading = true;
      // 滚动高度为0 => loading效果在容器居中
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth; // 滚动效果
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
