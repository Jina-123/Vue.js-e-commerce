<template>
  <div class="home">
    <h2>Bienvenue sur mon site !</h2>
    <div class="slider">
      <input type="radio" name="slide" id="slide1" checked>
      <input type="radio" name="slide" id="slide2">
      <input type="radio" name="slide" id="slide3">
      <ul id="imgholder" class="imgs">
        <li><img :src="require(`@/assets/book1.jpg`)"></li>
        <li><img :src="require(`@/assets/book2.jpg`)"></li>
        <li><img :src="require(`@/assets/book3.jpg`)"></li>
      </ul>
      <div class="bullets">
        <label for="slide1">&nbsp;</label>
        <label for="slide2">&nbsp;</label>
        <label for="slide3">&nbsp;</label>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped src="./Home.css">

</style>