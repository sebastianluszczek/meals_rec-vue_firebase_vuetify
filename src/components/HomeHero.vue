<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">HEALTHY MEALS</div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div>
      <div
        class="display-1 font-weight-bold white--text text-xs-center"
      >Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
      <v-btn fab class="mt-5 yellow darken-4">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero'
};
</script>

<style>
.home-hero {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  position: relative;
  background-color: transparent;
  z-index: 1;
}

.home-hero::before {
  content: '';
  background: url('http://source.unsplash.com/3yiaqDO8kIE');
  filter: brightness(0.7);
  background-size: cover;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
