<template>
  <div>
    <v-container fluid>
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
    </v-container>

    <v-container class="pt-4" fluid>
      <v-row v-if="projects.length > 0" dense>
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-col
            v-for="col in columns"
            :md="12 / columns.length"
            :key="`cols${col}`"
          >
            <v-row
              :class="{
                'mt-0 pt-0': true,
                'flex-column': $vuetify.breakpoint.mdAndUp
              }"
              dense
            >
              <v-col
                v-for="project in projectsColumn(col)"
                xs="12"
                :key="project.id"
              >
                <v-lazy
                  :options="{
                    threshold: 0.5
                  }"
                  transition="fade-transition"
                >
                  <project
                    :project-id="project.index"
                    :title="project.title"
                    :subtitle="project.subtitle"
                    :teaser="project.teaser"
                    :key-words="project.keywords"
                    :image="project.image"
                    :topic="project.topic"
                    :teaser-html="project.teaserHtml"
                    @project::displayMore="showModal"
                  />
                </v-lazy>
              </v-col>
            </v-row>
          </v-col>
        </template>
        <template v-else>
          <v-col xs12 v-for="project in projects" :key="project.index">
            <v-lazy
              :options="{
                threshold: 0.5
              }"
              transition="fade-transition"
            >
              <project
                :project-id="project.index"
                :title="project.title"
                :subtitle="project.subtitle"
                :teaser="project.teaser"
                :key-words="project.keywords"
                :image="project.image"
                :topic="project.topic"
                :teaser-html="project.teaserHtml"
                @project::displayMore="showModal"
              />
            </v-lazy>
          </v-col>
        </template>
      </v-row>
      <v-row v-if="projects.length === 0">
        <v-col class="text-center display-1"
          ><div class="pb-2">Sorry I haven't done such a project yet</div>
          <v-icon color="black" size="100">far fa-frown</v-icon>
        </v-col>
      </v-row>
    </v-container>

    <project-dialog
      v-model="showDialog"
      v-if="projectForModal"
      :project="projectForModal"
    ></project-dialog>
  </div>
</template>

<script>
const Project = () => import("./Project");
const ProjectDialog = () => import("./ProjectDialog");
import { filterProjects } from "../resources/projectAccessor";
import { mapState } from "vuex";
export default {
  name: "ProjectsWrapper",
  components: { Project, ProjectDialog },
  data() {
    return {
      columns: [0, 1, 2],
      showDialog: false,
      projectForModal: null
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
    showModal(projectId) {
      const project = this.projects.find(e => e.index === projectId);

      if (!project) {
        return;
      }

      this.projectForModal = project;
      this.showDialog = true;
    }
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
      //  .sort(() => 0.5 - Math.random());
    }
  }
};
</script>
