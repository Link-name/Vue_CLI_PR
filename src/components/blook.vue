
<template lang="">


    <header>
        <headers/>
        <div class="container">
            <div class="header__img">
                <img class="header__img1" :src="blook_header" alt="Kitchen">
            </div>
        </div>
    </header>
    <section  class="section centet">
        <stand/>
        
    </section>
    
    <footers/>
</template>
<script>
import blook_header from '@/assets/img/blook_header.svg'
import stand from './stand/stand.vue'
import footers from './stand/footers.vue'
import headers from './stand/headers.vue' 


export default {
    data() {
        return {
            blook_header: blook_header,

        }
    },
    components: {
        headers,
        stand,
        footers

    }


}
</script>
<style lang="scss" scoped>
@import '@/assets/style/_mixsins';
@import '@/assets/style/_vars';
@import '@/assets/style/blook';
@import '@/assets/style/homepage1';
</style>