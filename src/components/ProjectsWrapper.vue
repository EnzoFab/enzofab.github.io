<template>
  <div class="pl-2">
    <v-scale-transition mode="in-out">
      <v-chip
        v-if="mainTopic"
        label
        :color="mainTopic.color"
        close
        dark
        pill
        large
        @click:close="removeActiveKeyword"
      >
        <v-icon v-if="mainTopic.icon" color="white" left>{{
          mainTopic.icon
        }}</v-icon>
        <span>{{ mainTopic.label }}</span>
      </v-chip>
    </v-scale-transition>
    <v-expand-transition
      v-for="keyword in selectedKeywords"
      :key="keyword"
      mode="in-out"
    >
      <v-chip
        class="ml-2"
        label
        dark
        medium
        color="green"
        close
        @click:close="removeKeyword(keyword)"
        >{{ keyword }}</v-chip
      >
    </v-expand-transition>

    <v-container class="pt-4" fluid>
      <v-row v-if="projects.length > 0" dense>
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
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="projects.length === 0">
        <v-col class="text-center display-1"
          ><div class="pb-2">Sorry I haven't done such a project yet</div>
          <v-icon color="black" size="100">far fa-frown</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Project from "./Project";
import { filterProjects } from "../resources/projects";
import { mapState } from "vuex";
export default {
  name: "ProjectsWrapper",
  components: { Project },
  data() {
    return {
      columns: [0, 1, 2]
    };
  },

  methods: {
    projectsColumn(columnId) {
      return this.projects.filter(
        project => project.index % this.columns.length === columnId
      );
    },
    removeActiveKeyword() {
      this.$store.commit("removeActiveTopic");
    },

    removeKeyword(keyword) {
      this.$store.commit("removeKeyword", keyword);
    },

    selectTopic(topic) {
      this.mainTopic = topic;
    },
    showModal() {}
  },

  computed: {
    ...mapState({
      mainTopic: "activeTopic",
      selectedKeywords: "activeKeywords"
    }),
    projects() {
      return filterProjects(this.mainTopic, this.selectedKeywords).map(
        (project, index) => ({
          ...project,
          index
        })
      );
    }
  }
};
</script>
