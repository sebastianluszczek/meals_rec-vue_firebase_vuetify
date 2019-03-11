<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="yellow darken-3" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="yellow darken-3" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      </router-link>
      <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated">
        <v-btn flat class="hidden-sm-and-down" to="/sign-in">SIGN IN</v-btn>
        <v-btn color="yellow darken-4" class="hidden-sm-and-down" to="/join">JOIN</v-btn>
      </div>
      <div v-else>
        <v-btn flat to="/about">PROFILE</v-btn>
        <v-btn color="yellow darken-4" @click="logout">Logout</v-btn>
      </div>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      drawer: false,
      appTitle: 'Meal Prep',
      items: [{ title: 'Menu' }, { title: 'Sign In' }, { title: 'Join' }]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('userSignOut');
    }
  }
};
</script>

<style>
</style>
