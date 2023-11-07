<template lang="">
<div class="aside__buttons">
    <button class="aside__buttons__1" @click="showArticle(0)"
        :class="{ 'active': selectedArticle === 0 }">Kitchen</button>
    <button class="aside__buttons__1" @click="showArticle(1)"
        :class="{ 'active': selectedArticle === 1 }">Bedroom</button>
    <button class="aside__buttons__1" @click="showArticle(2)"
        :class="{ 'active': selectedArticle === 2 }">Building</button>
    <button class="aside__buttons__1" @click="showArticle(3)"
        :class="{ 'active': selectedArticle === 3 }">Architecture</button>
</div>
 </template>
<script>

import blook_2 from '@/assets/img/blook_2.svg'

export default {
    data() {
        return {

    
                // Добавьте другие статьи, при необходимости
        
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