<template>
  <div class="app">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside.vue";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.app {
  width: 250px;
  height: 100vh;
  background: @bg;
  
}
</style>

<!-- Menu 组件 -->
<!-- <template>
  <div class="app">
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: {
    Menu,
  }
}
</script>

<style scoped lang="less">
 .app {
  width: 300px;
  height: 500px;
  background: #1d6978;
  margin: 80px auto;
 }
</style>  -->

<!-- <template>
  <div class="app">
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";
export default {
  components: {
    Contact,
  }
}
</script>

<style scoped lang="less">
 .app {
  width: 300px;
  height: 500px;
  background: #1d6978;
  margin: 80px auto;
 }
</style> -->

<!-- ImageLoader组件 -->
<!-- <template>
  <div class="app-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="3000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader.vue";

export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("ImageLoader组件图片加载完成")
    }
  }
};
</script>

<style scoped lang="less">
.app-container {
  width: 500px;
  height: 300px;
  margin: 50px auto;
  border: 2px solid #000;
}
</style> -->

<!-- Empty无数据组件 -->
<!-- <template>
  <div class="app">
    <Empty />
  </div>
</template>

<script>
import Empty from "./components/Empty.vue"
export default {
  components: {
    Empty,
  }
}
</script>

<style scoped lang="less">
.app {
  width: 400px;
  height: 300px;
  border: 2px solid #000;
  margin: 20px auto;
  position: relative;
}
</style> -->

<!-- 
  <template>
  <div class="app">
    <h1>App 组件</h1>
    <Avatar url="https://tvax3.sinaimg.cn/crop.0.0.512.512.180/001XZDurly8hf856sjiatj60e80e874x02.jpg?KID=imgbed,tva&Expires=1690101911&ssig=n0ZRhKPhls" />
    <Pager :total="555" :current="current" @changePage="handleChangePage" />
    <Icon type="home" />
    <Empty />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import Pager from "@/components/Pager.vue";
import Icon from "@/components/Icon.vue";
import Empty from "@/components/Empty.vue";
export default {
  name: "App",
  data() {
    return {
      current:1,
    }
  },
  components: {
    Avatar,
    Pager,
    Icon,
    Empty,
  },
  methods: {
    handleChangePage(newPage) {
      this.current = newPage;
    }
  }
}
</script>
 -->
