<template lang="">

<headers/>
<div class="container">
    <div class="header__img">
        <img class="header__img__1" :src="Photolist4" alt="Kitchen">
    
    <div class="header__img__Articles__News">
        <p class="header__img__Articles__News__title"> Our Project</p>
        <div class="header__img__Articles__News__link">
            <a class="header__img__Articles__News__link1" href="#">Home /</a>
            <a class="header__img__Articles__News__link1" href="#">Project </a>
        </div>
    </div>
</div>
    <product4/>
</div>



<footers/>

</template>

<script>

import headers from './stand/headers.vue'
import footers from './stand/footers.vue'
import Photolist4 from '@/assets/img/Photolist4.svg'
import list4 from './stand/list4.vue'
import product4 from './stand/prodject4.vue'
export default {
    data() {
        return {
            Photolist4: Photolist4,
        }
    },

    components: {
        headers,
        footers,
        product4

    }


}
</script>
<style lang="scss" scoped>
@import '@/assets/style/_mixsins';
@import '@/assets/style/_vars';


.header__img {
    position: relative;
    display: inline-block;
    /* Относительное позиционирование для контейнера */
    width: 100%;
    height: 100%;
    display: block;

    &__1 {
        width: 100%;
    }
}

.header__img__Articles__News {

    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 41px 78px px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #FFF;
    padding: 20px;
    border: 1px solid #FFF;
    width: 27%;
    height: 30%;
    margin: 0 auto;
    left: 36%;
    bottom: 0;

    /* Отступ снизу равен 0 */
    &__title {
        margin: 0 auto;
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 2.5em;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
    }

    &__link1 {
        text-decoration: none;
        color: $ColorText;
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;

    }
}
</style>