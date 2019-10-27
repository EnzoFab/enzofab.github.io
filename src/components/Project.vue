<template>
  <v-card
    hover
    @click.native.prevent="$emit('project::displayMore', projectId)"
  >
    <v-img v-if="image" :src="image"></v-img>

    <v-card-text class="pt-0">
      <h3
        class="display-1 text--primary pb-1 text-center grey--text text--darken-1"
      >
        {{ title }}
      </h3>
      <div v-if="topic" class="pb-2">
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
        {{ body }}
      </div>
      <div v-if="keyWords.length > 0" class="pt-2">
        Keywords:<br />
        <v-chip
          v-for="keyword in keyWords"
          :key="keyword"
          label
          small
          class="mr-1 mt-1"
          color="green"
          dark
          :disabled="isUsed(keyword)"
          @click="addKeyword(keyword)"
          >{{ keyword }}</v-chip
        >
      </div>
    </v-card-text>
    <v-card-text> </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Project",
  props: {
    projectId: [String, Number],
    title: String,
    subtitle: String,
    body: String,
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
