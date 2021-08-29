<template>
  <div id="app" class="app">
    <div id="nav">
      <a href="/"><img class="logo-img" :src="require(`@/assets/logo.png`)"></a><router-link to="/" class="menu-box">Accueil</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/nosproduits" class="menu-box">Nos produits</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/recrutement" class="menu-box">Le Recrutement</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/cart" class="float-right"><i class="fas fa-shopping-cart"></i>Cart ( {{ numberArticleInCart }} )</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  computed: {
    numberArticleInCart() {
      return this.$store.getters.getNumberArticlesInCart;
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
.menu-box {
  border: 1px solid black;
  margin: 5px;
  padding: 15px;
  background-color: #f1c40f;
  box-shadow: 2px 2px 5px #999;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
}
.logo-img {
  width: 110px;
  margin-right: 40px;
}
</style>
