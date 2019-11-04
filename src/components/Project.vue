<template>
  <v-card
    hover
    @click.native.prevent="$emit('project::displayMore', projectId)"
    width="100%"
  >
    <v-card-text class="pt-0" style="width: 100%">
      <h3
        class="display-1 text--primary pb-1 text-center grey--text text--darken-1"
      >
        {{ title }}
      </h3>

      <v-img
        v-if="image"
        :src="require(`../assets/${image}`)"
        aspect-ratio="1.6"
        contain
      ></v-img>
      <div v-else class="pa-3 text-center">
        <v-icon color="grey lighten-4" x-large>fas fa-briefcase</v-icon>
      </div>

      <div v-if="topic" class="pt-1 pb-2">
        <v-chip
          :color="topic.color"
          dark
          label
          outlined
          :disabled="isActive"
          @click.stop="selectTopic(topic)"
        >
          <v-icon v-if="topic.icon" left :color="topic.color">{{
            topic.icon
          }}</v-icon>
          <span class="font-weight-bold">{{ topic.label }}</span></v-chip
        >
      </div>
      <div class="text--primary grey--text text--darken-1">
        {{ teaser }}
      </div>
      <div v-html="teaserHtml"></div>
      <div v-if="keyWords.length > 0" class="pt-2">
        <v-chip
          v-for="keyword in keyWords"
          :key="keyword"
          label
          small
          class="mr-1 mt-1"
          color="green"
          dark
          :disabled="isUsed(keyword)"
          @click.stop="addKeyword(keyword)"
          >{{ keyword }}</v-chip
        >
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Project",
  props: {
    projectId: [String, Number],
    title: String,
    subtitle: String,
    teaser: String,
    teaserHtml: String,
    image: String,
    link: String,
    topic: Object,
    keyWords: { type: Array, default: () => [] }
  },
  methods: {
    /**
     * the keyword is used for filter projects
     * @param {string} keyword
     */
    isUsed(keyword) {
      return this.$store.getters.isKeywordActive(keyword);
    },
    selectTopic(topic) {
      this.$store.commit("selectNewTopic", topic);
    },
    addKeyword(keyword) {
      this.$store.commit("addActiveKeyword", keyword);
    }
  },
  computed: {
    isActive() {
      return this.$store.getters.isTopicActive(this.topic);
    }
  }
};
</script>
