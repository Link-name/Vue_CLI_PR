<template lang="">
    <headers/>
   <div class="contener">
    <div class="error">
        <h1 class="error__header">404</h1>
        <p class="error__text">We are sorry, but the page
        you requested was not found</p>
        <button class="error__batton"> <p class="error__batton__text" >Back To Home</p> <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg></button>
    </div>
    <div class="error__img"> <img src="@/assets/img/error_img.svg" alt="">
    </div>
   </div>
</template>
<script>
import headers from "./stand/headers.vue"
import error_img from "@/assets/img/error_img.svg"

export default {
    data() {
        return {

        }
    },
    components: {
        headers

    }
}
</script>
<style lang="scss" scoped>
.contener {
    display: flex;
    width: 1563px;
    align-items: center;
    gap: 81px;
    margin: auto;
    padding-left: 10%;
}

.error__header {
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 312.5px */
}

.error__text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 52.5px */
    letter-spacing: 0.35px;

}

.error__batton {
    display: flex;
    padding: 26px 54px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);

    &__text {
        color: #FFF;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        /* 22.5px */
        letter-spacing: 0.36px;

    }
}

img {
    border-bottom-left-radius: 300px;
}
</style>