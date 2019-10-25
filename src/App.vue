<template>
  <v-app>
    <nav-bar />

    <v-content class="grey">
      <projects-wrapper />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import ProjectsWrapper from "./components/ProjectsWrapper";

export default {
  name: "App",
  components: {
    ProjectsWrapper,
    NavBar
  },
  data: () => ({
    //
  })
};
</script>
