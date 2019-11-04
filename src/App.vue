<template>
  <v-app>
    <nav-bar />

    <v-content class="grey">
      <projects-wrapper />
    </v-content>
  </v-app>
</template>

<script>
const NavBar = () => import("./components/NavBar");
const ProjectsWrapper = () => import("./components/ProjectsWrapper");

export default {
  name: "App",
  components: {
    ProjectsWrapper,
    NavBar
  }
};
</script>
