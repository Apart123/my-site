<template>
  <div class="pager-container">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页码数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if(min < 1) min = 1;
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if(max > this.pageNumber) max = this.pageNumber;
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("changePage", newPage);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.pager-container {
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 0 5px;
    cursor: pointer;
    color: @primary;
    &.disabled {
      cursor: not-allowed;
      color: @gray;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
