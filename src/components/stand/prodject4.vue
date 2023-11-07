<template>
    <div class="page-with-photos center">
        <div class="aside__buttons">
            <button class="aside__buttons__1" @click="showArticle(0)"
                :class="{ active: currentCategory === 0 }">Kitchen</button>
            <button class="aside__buttons__1" @click="showArticle(1)"
                :class="{ active: currentCategory === 1 }">Bedroom</button>
            <button class="aside__buttons__1" @click="showArticle(2)"
                :class="{ active: currentCategory === 2 }">Building</button>
            <button class="aside__buttons__1" @click="showArticle(3)"
                :class="{ active: currentCategory === 3 }">Architecture</button>
        </div>
        <div class="photo-container">
            <custom-component v-for="(photo, index) in currentPhotos" :key="index" :imageSrc="photo.imgSrc"
                :title="photo.title" :links="product.links" :isImageClicked="photo.selected"
                @toggle-star="toggleStar(index)" class="photo-item" />
        </div>
    </div>
</template>
  
<script>
import CustomComponent from './custom-component.vue';

import Photo1 from '@/assets/img_list4/Photo(1).svg';
import Photo2 from '@/assets/img_list4/Photo(2).svg';
import Photo3 from '@/assets/img_list4/Photo(3).svg';
import Photo4 from '@/assets/img_list4/Photo(4).svg';
import Photo5 from '@/assets/img_list4/Photo(5).svg';
import Photo6 from '@/assets/img_list4/Photo(6).svg';
import Photo7 from '@/assets/img_list4/Photo(7).svg';
import Photo8 from '@/assets/img_list4/Photo(8).svg';

export default {
    components: {
        CustomComponent,
    },
    data() {
        return {

            photos1: [
                { imgSrc: Photo1, title: 'Minimal Bedroom', selected: false },
                { imgSrc: Photo2, title: 'Minimal Bedroom', selected: false },
                { imgSrc: Photo3, title: 'Classic Minimal Bedroom', selected: false },
                { imgSrc: Photo4, title: 'Modern Bedroom', selected: false },
                { imgSrc: Photo5, title: 'Minimal Bedroom table', selected: false },
                { imgSrc: Photo6, title: 'System Table', selected: false },
                { imgSrc: Photo7, title: 'Modern Medroom', selected: false },
                { imgSrc: Photo8, title: 'Modern Bedroom', selected: false },
            ],
            photos2: [
                { imgSrc: Photo1, title: 'Minimal Bedroom', selected: false },
                { imgSrc: Photo2, title: 'Minimal Bedroom', selected: false },
                { imgSrc: Photo3, title: 'Classic Minimal Bedroom', selected: false },
                { imgSrc: Photo4, title: 'Modern Bedroom', selected: false },
                { imgSrc: Photo5, title: 'Minimal Bedroom table', selected: false },
                { imgSrc: Photo6, title: 'System Table', selected: false },
                { imgSrc: Photo7, title: 'Modern Medroom', selected: false },
                { imgSrc: Photo8, title: 'Modern Bedroom', selected: false },
            ],
            photos3: [
                { imgSrc: Photo1, title: 'Minimal Bedroom', selected: false },
                { imgSrc: Photo2, title: 'Minimal Bedroom', selected: false },
                { imgSrc: Photo6, title: 'Classic Minimal Bedroom', selected: false },
                { imgSrc: Photo4, title: 'Modern Bedroom', selected: false },
                { imgSrc: Photo5, title: 'Minimal Bedroom table', selected: false },
                { imgSrc: Photo6, title: 'System Table', selected: false },
                { imgSrc: Photo6, title: 'Modern Medroom', selected: false },
                { imgSrc: Photo8, title: 'Modern Bedroom', selected: false },
            ],
            photos4: [
                { imgSrc: Photo8, title: 'Minimal Bedroom', selected: false },
                { imgSrc: Photo2, title: 'Minimal Bedroom', selected: false },
                { imgSrc: Photo8, title: 'Classic Minimal Bedroom', selected: false },
                { imgSrc: Photo4, title: 'Modern Bedroom', selected: false },
                { imgSrc: Photo2, title: 'Minimal Bedroom table', selected: false },
                { imgSrc: Photo6, title: 'System Table', selected: false },
                { imgSrc: Photo7, title: 'Modern Medroom', selected: false },
                { imgSrc: Photo8, title: 'Modern Bedroom', selected: false },
            ],
            product: {
                links: [
                    { text: 'Decor/', url: '#' },
                    { text: 'Architecture', url: '#' },
                    // Другие ссылки
                ],
            },
            currentPhotos: [],
            currentCategory: 0,
        };
    },

    methods: {
        toggleStar(index) {
            this.currentPhotos[index].selected = !this.currentPhotos[index].selected;
        },
        showArticle(index) {
            this.currentCategory = index;
            // Изменяем текущий выбранный массив на основе индекса кнопки
            if (index === 0) {
                this.currentPhotos = this.photos1;/*  */
            } else if (index === 1) {
                this.currentPhotos = this.photos2;
            } else if (index === 2) {
                this.currentPhotos = this.photos3;
            } else if (index === 3) {
                this.currentPhotos = this.photos4;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.center {
    padding-left: calc(50% - 620px);
    padding-right: calc(50% - 620px);
}

.aside__buttons {
    display: flex;
    border: 1px solid #CDA274;
    max-width: 529px;
    border-radius: 12px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 20px;


    &__1 {
        display: block;

        border: none;
        /* border: 0; */
        border-radius: 10px;
        background: #ffffff;
        display: flex;
        padding: 9px 30px;
        justify-content: center;
        align-items: center;
        color: #000;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.36px;
    }
}

.active {
    background: #CDA274; 
    /* Цвет активной кнопки */
    color: #ffffff;
    /* Цвет текста активной кнопки */
}

.photo-container {
    margin: 0;
    column-count: 2;
    flex-wrap: wrap;
    gap: 15px;
}
</style> 