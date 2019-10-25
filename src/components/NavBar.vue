<template>
  <div>
    <v-app-bar
      app
      fixed
      :color="color"
      dark
      fade-img-on-scroll
      :src="require('../assets/banner.jpg')"
      class="hidden-sm-and-down"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title>Enzo Fabre</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-app-bar
      app
      clipped-left
      fixed
      dark
      collapse
      class="hidden-md-and-up"
      max-width="80"
      :color="color"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      color: "blue-grey darken-2"
    };
  }
};
</script>
