<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<style scoped lang="less">
.avatar-container {
  display: block;
  border-radius: 50%;
  object-fit: cover;
}
</style>
