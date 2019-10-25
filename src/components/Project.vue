<template>
  <v-card
    hover
    @click.native.prevent="$emit('project::displayMore', projectId)"
  >
    <v-img v-if="image" :src="image"></v-img>

    <v-card-text class="pt-0">
      <h3 class="display-1 text--primary pb-1 text-center">{{ title }}</h3>
      <div v-if="topic" class="pb-2">
        <v-chip
          :color="topic.color"
          dark
          label
          outlined
          @click.stop="$emit('project::selectTopic', topic)"
        >
          <v-icon v-if="topic.icon" left :color="topic.color">{{
            topic.icon
          }}</v-icon>
          <span class="font-weight-bold">{{ topic.label }}</span></v-chip
        >
      </div>

      <div class="text--primary">
        {{ body }}
      </div>
      <div v-if="keyWords.length > 0">
        Keywords:<br />
        <v-chip
          v-for="keywords in keyWords"
          :key="keywords"
          label
          small
          class="mr-1 mt-1"
          color="green"
          text-color="white"
          >{{ keywords }}</v-chip
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
  }
};
</script>
