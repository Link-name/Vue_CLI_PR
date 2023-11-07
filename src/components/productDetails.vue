<template>
    <div>
      <h2>{{ product.name }}</h2>
      <p>Price: {{ formattedPrice }}</p>
      <p>Status: {{ product.available ? "Available" : "Out of stock" }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: "Sample Product",
          price: 99.99,
          available: true,
        },
      };
    },
    computed: {
      formattedPrice() {
        // Форматируем цену с знаком валюты "$"
        return "$" + this.product.price.toFixed(2); // Округляем до двух знаков после запятой
      },
    },
  };
  </script>
  <style lang="scss" scoped>

  </style>
  