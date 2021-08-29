<template>
  <div class="main">
    <h1 class="main1">Votre panier</h1>
    <div v-if="cart">
      <div class="product" v-for="product in cart.products" :key="product.title">
        <select onmousedown="this.focus()">
          <option @click="decrementQuantity(product)">0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> 
        {{ product.title }} - {{ product.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getCartFromStorage");
  },
  methods: {
    decrementQuantity(product) {
      this.$store.dispatch("removeOneFromCart", product);
    }
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    }
  }
};
</script>

<style scoped>
.main1 {
  border-bottom: 1px solid #ccc
}
.main {
  width: 5 00px;
  height: 500px;
  margin: 50px auto;
  border: 2px solid black;
  padding: 30px;
}
.quantity {
  border: 1px solid black;
  padding: 3px;
  margin: 3px;
  font-size: 17px;
  font-weight: bold;
}
.product {
  height: 89px;
  width: 80%;
  margin: 25px;
  border-bottom: 1px solid #ccc;
}
</style>