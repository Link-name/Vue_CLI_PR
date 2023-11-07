
<template lang="">


    <header>
        <headers/>
        <div class="container">
            <div class="header__img">
                <img class="header__img1" :src="project_Details5_img_1" alt="Kitchen">
            </div>
        </div>
    </header>
    <section  class="info__contentDetails5">
        <h2 class="info__contentDetails5__header">{{header}}</h2>
        <p class="info__contentDetails5__text">{{text1}}</p>
        <p class="info__contentDetails5__text">{{text2}}</p>
    </section>
    <slider class="swiper"/>   
    
    <footers/>
</template>
<script>
import footers from './stand/footers.vue'
import headers from './stand/headers.vue'
import project_Details5_img_1 from '../assets/img/project_Details5_img_1.svg'
import { mapState } from 'vuex'
import slider from './stand/slider.vue'


export default {
    data() {
        return {
            project_Details5_img_1: project_Details5_img_1

        }
    },
    components: {
        headers,
        footers,
        slider

    },
    computed: {
        ...mapState(['header', 'text1', 'text2'])
    }



}
</script>
<style lang="scss" scoped>
@import '@/assets/style/_mixsins';
@import '@/assets/style/_vars';
@import '@/assets/style/blook';
@import '@/assets/style/homepage1';

.info__contentDetails5 {
    padding-top: 100px;
    padding-bottom: 20px;

    max-width: 700px;
    margin: 0 auto;


    &__header {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
    }

    &__text {
    margin-top: 20px;
    padding-bottom: 30px;
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }

}
.swiper{
    padding-top: 50px;
}

.info__content__text {
    color: #0e447a;
}
</style>