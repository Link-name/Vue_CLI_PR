<template>

<router-view/>

</template>

<script>
import homepage from './components/homepage.vue'
import first_page from './components/first_page.vue'
import Blook from './components/blook.vue'
import productDetails from './components/productDetails.vue'
import ProductList4 from './components/productList4.vue';
import project_Details5 from './components/project_Details5.vue'
import error404 from './components/Error404.vue'





export default {
  name: 'App',
  components: {

    homepage,
    first_page,
    Blook,
    productDetails,
    ProductList4,
    project_Details5,
    error404
    
  }

}
</script>

<style lang="scss"></style>
