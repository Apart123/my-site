<template>
  <div class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{name: item.name}"
      active-class="selected"
      exact-active-class=""
    >
      <Icon :type="item.icon" />
      <div class="text">{{ item.title }}</div>
    </RouterLink>
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
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true
        },
      ],
    };
  },
  methods: {
    // isSelected(item) {
    //   const url = location.pathname.toLocaleLowerCase();
    //   const path = item.path;
    //   if (item.startWith) {
    //     return url.startsWith(item.path);
    //   } else {
    //     return url === path;
    //   }
    // },
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
    padding: 5px 30px;
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
