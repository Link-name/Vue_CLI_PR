<template lang="">

<header>
    <headers/>
        
        <div class="container center">
            <div class="header__img">
                <img class="header__img1" :src="Homepage_header" alt="foto">
            </div>
            <div class="header__content__img">
                <h1 class="header__content__img__header">Let Your Home
                    Be Unique</h1>
                    <p class="header__content__img__text">There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.</p>
                    <button class="header__content__img__button"><router-link class="header__top__right__link" to="/productList4"><span class="header__content__img__button__text">Get
                            Started</span> <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg></router-link></button>
            </div>

        </div>
    </header>
    <section>

            <h4 class="section__header">Follow Our Projects</h4>
            <p class="section__text">It is a long established fact that a reader will be distracted by the of readable
                content of page lookings at its layouts points.</p>
            <div id="app" class="section__product__Architecture center">
                <div class="section__product__Architecture__cart" v-for="product in products" :key="product.id">
                    <div class="section__product__Architecture__cart__img">
                        <img class="section__product__cart__Architecture__img__radiuse" :src="product.imgSrc"
                            alt="foto">
                    </div>

                    <div class="section__product__Architecture__cart__dataInButton">
                        <div>
                            <h3 class="section__product__Architecture__cart__header">{{ product.title }}</h3>
                            <p class="section__product__Architecture__cart__data">{{ product.path }}</p>
                        </div>
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                            <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                                
                        </svg>
                    </div>
                </div>
            </div>

        <article>
            <img class="scoreboard" :src="Counter"  alt="">
        </article>
        <article>
            <h1 class="section__product__head">Articles & News</h1>
            <p class="section__product__text">It is a long established fact that a reader will be distracted by the of
                readable content of a page when lookings at its layouts the points of using.</p>
            <div id="app1" class="section__product__wrapper center">
                <div class="section__product__cart" v-for="product in products2" :key="product.id">
                    <div class="section__product__cart__img">
                        <img class="section__product__cart__img__radiuse" :src="product.imgSrc" alt="foto">
                        <div class="section__product__cart__nameImg">
                            <p class="section__product__cart__nameImg__text">{{ product.category }}</p>
                        </div>
                    </div>
                    <h3 class="section__product__cart__header">{{ product.title }}</h3>
                    <div class="section__product__cart__dataInButton">
                        <time class="section__product__cart__data">{{ product.date }}</time>
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                            <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                                
                        </svg>
                    </div>
                </div>
            </div>
        </article>

    </section>

    <footers/>

</template>
<script>
import Homepage_header from '@/assets/img/Homepage_header.svg'
import Photo10 from '@/assets/img/Photo(10).svg'
import Photo8 from '@/assets/img/Photo(8).svg'
import Photo9 from '@/assets/img/Photo(9).svg'
import Photo11 from '@/assets/img/Photo(11).svg'
import product_1 from '@/assets/img_product/product_1.svg'
import product_2 from '@/assets/img_product/product_2.svg'
import product_3 from '@/assets/img_product/product_3.svg'
import Counter from '@/assets/img/Counter.svg'

import footers from './stand/footers.vue'
import headers from './stand/headers.vue' 


export default {

    data() {
        return {
            Homepage_header: Homepage_header,
            Photo8:Photo8,
            Photo9:Photo9,
            Photo10:Photo10,
            Photo11:Photo11,
            product_1:product_1,
            product_2:product_2,
            product_2:product_2,
            Counter:Counter,
            products: [
                {
                    id: 1,
                    imgSrc: Photo10,
                    title: 'Modern Kitchan',
                    path: 'Decor / Artchitecture',
                },
                {
                    id: 2,
                    imgSrc: Photo8,
                    title: 'Modern Kitchan.',
                    path: 'Decor / Artchitecture',
                },
                {
                    id: 3,
                    imgSrc: Photo9,
                    title: 'Modern Kitchan',
                    path: 'Decor / Artchitecture',
                },
                {
                    id: 4,
                    imgSrc: Photo11,
                    title: 'Modern Kitchan',
                    path: 'Decor / Artchitecture',
                },
                // Добавьте другие статьи, при необходимости
            ],
            products2: [
                {
                    id: 1,
                    imgSrc: product_1,
                    category: 'Kitchen Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022',
                },
                {
                    id: 2,
                    imgSrc: product_2,
                    category: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December, 2022',
                },
                {
                    id: 3,
                    imgSrc: product_3,
                    category: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December, 2022',
                },
                // Добавьте другие статьи, при необходимости
            ]
        };
    },
    components: {
        headers,
        footers

    }

}


</script>
<style lang="scss" scoped>
@import '@/assets/style/_mixsins';
@import '@/assets/style/_vars';

@import '@/assets/style/home_page';
@import '@/assets/style/homepage1'; 


</style>