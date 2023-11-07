<template lang="">
   <article  class="article">
        <div class="article-container">
          <div v-if="selectedArticle !== null" class="article">
            <div class="article__content1">
              <h2 class="article__content1__header">{{ articles[selectedArticle].title }}</h2>
              <img class="img__whidth__max" :src="articles[selectedArticle].image" alt="Foto">
              <div class="article__content1__data-menu">
                <p class="article__content1__data-menu__data">{{ articles[selectedArticle].date }}</p>
                <p class="article__data-menu__menu">
                  <a v-for="(link, index) in articles[selectedArticle].links" :key="index" class="article__content1__data-menu__menu__link" :href="link.url">{{ link.text }}</a>
                </p>
              </div>
              <p class="article__content1__text">{{ articles[selectedArticle].text }}</p>
              <img :src="articles[selectedArticle].image2" alt="foto">
            </div>
            <div class="article__content2">
              <h3 class="article__content2__header">{{ articles[selectedArticle].subtitle }}</h3>
              <p class="article__content2__text">{{ articles[selectedArticle].text2 }}</p>
              <ol class="article__content2__list">
                <li v-for="(item, index) in articles[selectedArticle].list" :key="index" class="article__content2__list__style">{{ item.text }}</li>
              </ol>
              <img class="article__content2__img" :src="articles[selectedArticle].image3" alt="foto">
              <p class="article__content2__text">{{ articles[selectedArticle].text3 }}</p>
            </div>
          </div>
        </div>
    </article>
    <aside class="aside">
        <h2 class="aside__header">Tags</h2>
        <div class="aside__buttons">
            <button class="aside__buttons__1" @click="showArticle(0)" :class="{ 'active': selectedArticle === 0 }">Kitchen</button>
            <button class="aside__buttons__1" @click="showArticle(1)" :class="{ 'active': selectedArticle === 1 }">Bedroom</button>
            <button class="aside__buttons__1" @click="showArticle(2)" :class="{ 'active': selectedArticle === 2 }">Building</button>
            <button class="aside__buttons__1" @click="showArticle(3)" :class="{ 'active': selectedArticle === 3 }">Architecture</button>
            <button class="aside__buttons__1" @click="showArticle(4)" :class="{ 'active': selectedArticle === 4 }">Kitchen Planning</button>
            <button class="aside__buttons__1" @click="showArticle(5)" :class="{ 'active': selectedArticle === 5 }">Bedroom</button>
        </div>
    </aside>
</template>
<script>

import blook_2 from '@/assets/img/blook_2.svg'
import blook_3 from '@/assets/img/blook_3.svg'
import blook_4 from '@/assets/img/blook_4.svg'
import kyh1 from '@/assets/img/kyh1.jpg'
import kyh2 from '@/assets/img/kyh2.jpg'
import kyh3 from '@/assets/img/kyh3.jpeg'
import kyh4 from '@/assets/img/kyh4.jpg'
import kyh5 from '@/assets/img/kyh5.jpg'
import kyh6 from '@/assets/img/kyh6.jpg'
export default {
        data() {
        return {
            blook_2:blook_2,
            blook_3:blook_3,
            blook_4:blook_4,
            articles: [
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '26 December, 2022',
                    links: [
                        { text: 'Interior/', url: '#' },
                        { text: 'Home/', url: '#' },
                        { text: 'Decore', url: '#' }
                    ],
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid neque similique magnam cumque, culpa alias autem fuga. Ab pariatur asperiores inventore sint tempora atque saepe sapiente exercitationem hic praesentium.',
                    image: kyh1,
                    image2: blook_3,
                    subtitle: 'Design sprints are great',
                    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus aliquam quam, neque temporibus expedita at fugit autem ipsa, sint sit non in cum harum, officia facere natus blanditiis unde.',
                    list: [
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' }
                    ],
                    image3: blook_4,
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae perferendis perspiciatis consequatur ipsa? Eveniet ab qui itaque numquam, nam reprehenderit doloribus, voluptates magni earum obcaecati architecto, eum minus commodi pariatur.'
                },
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '26 December, 2022',
                    links: [
                        { text: 'Interior/', url: '#' },
                        { text: 'Home/', url: '#' },
                        { text: 'Decore', url: '#' }
                    ],
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid neque similique magnam cumque, culpa alias autem fuga. Ab pariatur asperiores inventore sint tempora atque saepe sapiente exercitationem hic praesentium.',
                    image: kyh2,
                    image2: blook_3,
                    subtitle: 'Design sprints are great',
                    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus aliquam quam, neque temporibus expedita at fugit autem ipsa, sint sit non in cum harum, officia facere natus blanditiis unde.',
                    list: [
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' }
                    ],
                    image3: blook_4,
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae perferendis perspiciatis consequatur ipsa? Eveniet ab qui itaque numquam, nam reprehenderit doloribus, voluptates magni earum obcaecati architecto, eum minus commodi pariatur.'
                },
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '26 December, 2022',
                    links: [
                        { text: 'Interior/', url: '#' },
                        { text: 'Home/', url: '#' },
                        { text: 'Decore', url: '#' }
                    ],
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid neque similique magnam cumque, culpa alias autem fuga. Ab pariatur asperiores inventore sint tempora atque saepe sapiente exercitationem hic praesentium.',
                    image: kyh3.jpg,
                    image2: blook_3.svg,
                    subtitle: 'Design sprints are great',
                    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus aliquam quam, neque temporibus expedita at fugit autem ipsa, sint sit non in cum harum, officia facere natus blanditiis unde.',
                    list: [
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' }
                    ],
                    image3: blook_4,
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae perferendis perspiciatis consequatur ipsa? Eveniet ab qui itaque numquam, nam reprehenderit doloribus, voluptates magni earum obcaecati architecto, eum minus commodi pariatur.'
                },
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '26 December, 2022',
                    links: [
                        { text: 'Interior/', url: '#' },
                        { text: 'Home/', url: '#' },
                        { text: 'Decore', url: '#' }
                    ],
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid neque similique magnam cumque, culpa alias autem fuga. Ab pariatur asperiores inventore sint tempora atque saepe sapiente exercitationem hic praesentium.',
                    image: kyh4,
                    image2: blook_3,
                    subtitle: 'Design sprints are great',
                    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus aliquam quam, neque temporibus expedita at fugit autem ipsa, sint sit non in cum harum, officia facere natus blanditiis unde.',
                    list: [
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' }
                    ],
                    image3: blook_4,
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae perferendis perspiciatis consequatur ipsa? Eveniet ab qui itaque numquam, nam reprehenderit doloribus, voluptates magni earum obcaecati architecto, eum minus commodi pariatur.'
                },
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '26 December, 2022',
                    links: [
                        { text: 'Interior/', url: '#' },
                        { text: 'Home/', url: '#' },
                        { text: 'Decore', url: '#' }
                    ],
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid neque similique magnam cumque, culpa alias autem fuga. Ab pariatur asperiores inventore sint tempora atque saepe sapiente exercitationem hic praesentium.',
                    image: kyh5,
                    image2: blook_3,
                    subtitle: 'Design sprints are great',
                    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus aliquam quam, neque temporibus expedita at fugit autem ipsa, sint sit non in cum harum, officia facere natus blanditiis unde.',
                    list: [
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' }
                    ],
                    image3: blook_4,
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae perferendis perspiciatis consequatur ipsa? Eveniet ab qui itaque numquam, nam reprehenderit doloribus, voluptates magni earum obcaecati architecto, eum minus commodi pariatur.'
                },
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    date: '26 December, 2022',
                    links: [
                        { text: 'Interior/', url: '#' },
                        { text: 'Home/', url: '#' },
                        { text: 'Decore', url: '#' }
                    ],
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid neque similique magnam cumque, culpa alias autem fuga. Ab pariatur asperiores inventore sint tempora atque saepe sapiente exercitationem hic praesentium.',
                    image: kyh6,
                    image2: blook_3,
                    subtitle: 'Design sprints are great',
                    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus aliquam quam, neque temporibus expedita at fugit autem ipsa, sint sit non in cum harum, officia facere natus blanditiis unde.',
                    list: [
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
                        { text: 'Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' }
                    ],
                    image3: blook_4,
                    text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae perferendis perspiciatis consequatur ipsa? Eveniet ab qui itaque numquam, nam reprehenderit doloribus, voluptates magni earum obcaecati architecto, eum minus commodi pariatur.'
                },
               
                // Здесь вы можете добавить остальные статьи, аналогично первой
            ],
            selectedArticle: 0
        };
    },
    methods: {
        showArticle(index) {
            this.selectedArticle = index;
        },
        handleButtonClick(index) {
            this.showArticle(index);
        }

    },
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/_mixsins';
@import '@/assets/style/_vars';
@import '@/assets/style/blook'; 
@import '@/assets/style/homepage1'; 
    
</style>