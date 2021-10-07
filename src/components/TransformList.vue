<template>
  <v-card v-if="content" class="mx-auto" max-width="300">
    <v-card-title class="white--text teal darken-4">
      Transform Content
      <v-text-field
        v-model="searchQuery"
        value=""
        label="search"
        solo
      ></v-text-field>
    </v-card-title>
    <v-divider></v-divider>
    <v-virtual-scroll :items="content" :item-height="50" height="400">
      <template v-slot:default="{ item }">
        <v-list-item>
          <span class="mx-4">
            pos:
            {{ position(item.id) }}
          </span>
          <v-list-item-content>
            <v-list-item-title>{{ item.id }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null,
    };
  },
  computed: {
    content() {
      if (this.searchQuery) {
        return this.$store.state.transformedContent.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.id.toLowerCase().includes(v));
        });
      } else {
        return this.$store.state.transformedContent;
      }
    },
  },

  methods: {
    position(id) {
      const index = this.$store.state.transformedContent.findIndex(
        (item) => item.id === id
      );
      return index;
    },
  },
};
</script>
