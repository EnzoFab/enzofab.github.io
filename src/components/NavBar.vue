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

      <v-btn
        v-for="topic in topics"
        :key="topic.label"
        depressed
        :color="isActive(topic) ? topic.color : 'transparent'"
        @click="setActiveTopic(topic)"
        >{{ topic.label }}</v-btn
      >

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <div class="hidden-md-and-up">
      <v-app-bar
        v-if="!showDrawer"
        clipped-left
        fixed
        dark
        collapse
        max-width="80"
        :color="color"
      >
        <v-app-bar-nav-icon @click="showDrawer = true"> </v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer
        height="400"
        v-model="showDrawer"
        class="deep-purple accent-4 text-center pt-2"
        dark
        :color="color"
        fixed
        width="100%"
        floating
        mini-variant
        mini-variant-width="200"
      >
        <v-btn
          v-for="topic in topics"
          :key="topic.label"
          depressed
          :color="isActive(topic) ? topic.color : 'transparent'"
          @click="setActiveTopic(topic)"
          >{{ topic.label }}</v-btn
        >
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import { allTopics } from "../resources/projects";

export default {
  name: "NavBar",
  data() {
    return {
      color: "blue-grey darken-2",
      topics: allTopics,
      showDrawer: false
    };
  },
  methods: {
    setActiveTopic(topic) {
      this.$store.commit("selectNewTopic", topic);
    },
    isActive(topic) {
      return this.$store.getters.isTopicActive(topic);
    }
  }
};
</script>
