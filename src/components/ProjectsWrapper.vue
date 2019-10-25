<template>
  <v-container class="pt-4" fluid>
    <v-chip
      v-if="mainTopic"
      label
      :color="mainTopic.color"
      close
      dark
      pill
      @click:close="mainTopic = null"
    >
      <v-icon v-if="mainTopic.icon" color="white" left>{{
        mainTopic.icon
      }}</v-icon>
      <span>{{ mainTopic.label }}</span>
    </v-chip>
    <v-row dense>
      <v-col
        v-for="col in columns"
        :md="12 / columns.length"
        :sm="12"
        :key="`cols${col}`"
      >
        <v-row class="mt-0 pt-0 flex-column" dense>
          <v-col v-for="project in projectsColumn(col)" :key="project.id">
            <project
              :title="project.title"
              :subtitle="project.subtitle"
              :body="project.body"
              :key-words="project.keywords"
              :image="project.image"
              :topic="project.topic"
              @project::displayMore="showModal"
              @project::selectTopic="selectTopic"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Project from "./Project";
import filterProjects from "../resources/projects";
export default {
  name: "ProjectsWrapper",
  components: { Project },
  data() {
    return {
      columns: [0, 1, 2],
      mainTopic: null
    };
  },

  methods: {
    projectsColumn(columnId) {
      return this.projects.filter(
        project => project.index % this.columns.length === columnId
      );
    },
    selectTopic(topic) {
      this.mainTopic = topic;
    },
    showModal() {}
  },

  computed: {
    projects() {
      return filterProjects(this.mainTopic).map((project, index) => ({
        ...project,
        index
      }));
    }
  }
};
</script>
