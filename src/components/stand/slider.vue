<template>
    <swiper :style="{
        '--swiper-navigation-color': '#c0c0c0',
        '--swiper-pagination-color': '#c0c0c0',
    }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img src="@/assets/img/slider_img.svg" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img src="@/assets/img/slider_img.svg" />
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-zoom-container">
                <img src="@/assets/img/slider_img.svg" />
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Photo1 from '@/assets/img/slider_img.svg';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
};
</script>
<style lang="scss" scoped>
@import '@/assets/style/style_Deteil5';
</style>
  