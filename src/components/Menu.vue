<template>
  <div class="menu-container">
    <a
      :class="{ selected: isSelected(item) }"
      v-for="item in items"
      :key="item.path"
      :href="item.path"
    >
      <Icon :type="item.icon" />
      <div class="text">{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          path: "/",
          title: "首页",
          icon: "home",
        },
        {
          path: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true,
        },
        {
          path: "/about",
          title: "关于我",
          icon: "about",
        },
        {
          path: "/project",
          title: "项目&效果",
          icon: "code",
        },
        {
          path: "/message",
          title: "留言板",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      const url = location.pathname.toLocaleLowerCase();
      const path = item.path;
      if (item.startWith) {
        return url.startsWith(item.path);
      } else {
        return url === path;
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  width: 100%;
  padding-top: 10px;
  a {
    display: flex;
    background: transparent;
    color: lighten(@lightWords, 20%);
    padding: 10px 30px;
    height: 30px;
    align-items: center;
    &.selected {
      background: darken(@bg, 5%);
      color: #fff;
    }
    &:hover {
      color: #fff;
    }
    .icon-container {
      margin-right: 10px;
      font-size: 16px;
    }
    .text {
      font-size: 14px;
    }
  }
}
</style>
