<template>
  <div class="image-loader-container">
    <img v-if="!allDone" class="placeholder" :src="placeholder" />
    <img
      @load="handleLoad"
      :src="src"
      :style="{ opacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      isOriginLoad: false,  // 原图加载完成 => 更改原图的透明度
      allDone: false,   // 原图加载完成duration时间之后，移除占位图
    };
  },
  computed: {
    opacity() {
      return this.isOriginLoad ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.isOriginLoad = true;
      setTimeout(() => {
        this.allDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill;
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>

<!--
  
  <template>
  <div class="image-loader-container">
    <img v-if="!isLoaded" class="placeholder" :src="placeholder" />
    <img @load="handleLoad" :src="src" :style="{ opacity , transition: `${duration}ms`}" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacity: 0,
      isLoaded: false,
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  methods: {
    handleLoad() {
      this.opacity = 1;
      setTimeout(() => {
        this.isLoaded = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
    .self-fill;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style> -->
