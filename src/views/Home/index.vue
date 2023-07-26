<template>
  <div class="home-container" ref="container" v-if="bannerList.length > 0">
    <ul>
      <li v-for="item in bannerList" :key="item.id">
        <img :src="item.midImg" alt="" />
        <img :src="item.bigImg" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import request from "@/api/request";
export default {
  data() {
    return {
      bannerList: [],
    };
  },
  async created() {
    this.bannerList = await request.get("/api/banner");
  },
};
</script>
