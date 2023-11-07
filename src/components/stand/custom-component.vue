<template>
    <div class="custom-component">
        <div class="custom-component__image" @click="toggleStar">
            <img :src="imageSrc" alt="Image" />
            <div class="custom-component__star" v-if="isImageClicked">
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_993_142)">
                        <path
                            d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                            fill="#FFA928" />
                    </g>
                    <defs>
                        <filter id="filter0_d_993_142" x="0.186401" y="0.431458" width="35.6272" height="34.3619"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_142" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_142" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div class="custom-component__content">
                <div class="custom-component__links">
                    <h2>{{ title }}</h2>
                    <a v-for="(link, index) in links" :key="index" :href="link.url">{{ link.text }}</a>
                </div>
                <button class="custom-component__button" @click="handleButtonClick">
                    <router-link class="header__top__right__link" to="/project_Details5"><svg width="52" height="53"
                            viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                            <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg></router-link>

                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        imageSrc: String,
        title: String,
        links: Array,
        isImageClicked: Boolean,
    },
    methods: {
        handleButtonClick() {
            // Действия при клике на кнопку (оставьте как есть)
        },
        toggleStar() {
            this.$emit('toggle-star');
        },
    },
};
</script>
  
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

a {
    text-decoration: none;
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.custom-component {
    &__content {
        display: flex;
        justify-content: space-between;
    }

    &__button {
        // Обычные стили кнопки
        background: none;
        border: none;
        cursor: pointer;

        // Стили при нажатии кнопки
        &:active {
            svg {
                circle {
                    fill: #c0c0c0; // Измените цвет fill на желаемый
                }
            }
        }
    }

    &__image {
        position: relative;
        display: inline-block;
    }

    &__star {
        position: absolute;
        top: 5px; // Позиционируем звездочку относительно верхнего края
        right: 5px; // Позиционируем звездочку относительно правого края
        z-index: 1;
        font-size: 24px;

    }


}
</style>
  