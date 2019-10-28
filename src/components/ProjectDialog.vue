<template>
  <v-dialog v-model="showDialog" max-width="800">
    <v-card flat color="white" max-width="800">
      <v-carousel v-if="project.carousel" cycle vertical height="300">
        <v-carousel-item
          v-for="image in project.carousel"
          :key="image"
          :src="image"
        ></v-carousel-item>
      </v-carousel>
      <v-img v-else-if="project.image" :src="project.image"></v-img>

      <v-card-text class="pt-0" style="width: 100%">
        <h3
          class="display-1 text--primary pb-2 text-center grey--text text--darken-1"
        >
          {{ project.title }}
        </h3>
        <div v-if="project.topic" class="pb-2 text-center">
          <v-chip :color="project.topic.color" dark label outlined large>
            <v-icon
              v-if="project.topic.icon"
              left
              :color="project.topic.color"
              >{{ project.topic.icon }}</v-icon
            >
            <span class="font-weight-bold">{{
              project.topic.label
            }}</span></v-chip
          >
        </div>

        <div
          v-if="project.keywords && project.keywords.length > 0"
          class="pt-1 pb-3 text-center"
        >
          <v-chip
            v-for="keyword in project.keywords"
            :key="keyword"
            label
            class="mr-1 mt-1"
            color="green"
            dark
            :disabled="isUsed(keyword)"
            >{{ keyword }}</v-chip
          >
        </div>

        <div class="text--primary grey--text text--darken-1">
          {{ project.fullText }}
        </div>
        <div
          v-if="project.html"
          class="text-center"
          v-html="project.html"
        ></div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ProjectDialog",
  props: { value: Boolean, project: Object },
  computed: {
    showDialog: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  },
  methods: {
    isUsed(keyword) {
      return this.$store.getters.isKeywordActive(keyword);
    }
  }
};
</script>
