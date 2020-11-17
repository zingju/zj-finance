<template>
  <div :class="cname">
    <swiper :options="options">
      <swiper-slider v-for="item in items" :key="item.href">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="" />
        </router-link>
      </swiper-slider>
      <div class="swiper-pagination" v-if="options.pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
          },
        };
      },
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="scss">
@import "swiper/css/swiper.css";
</style>