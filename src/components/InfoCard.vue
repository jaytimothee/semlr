<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Info</div>
        <v-list-item-title class="text-h5 mb-1"
          >Moves {{ info.moves }}
        </v-list-item-title>
        <v-list-item-title class="text-h5 mb-1"
          >Removes {{ info.remove }}</v-list-item-title
        >
        <v-list-item-title class="text-h5 mb-1"
          >Renames {{ info.renames }}
        </v-list-item-title>
        <v-list-item-subtitle
          >Failied Transformations
          {{
            info.totalTransformations -
            (info.remove + info.renames + info.moves)
          }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <v-list-item-subtitle>change </v-list-item-subtitle>
        {{ info.totalTransformations }}</v-list-item-avatar
      >
    </v-list-item>
    <v-card-actions>
      <v-btn outlined rounded text @click="handleDataReset"> Reset </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  computed: {
    info() {
      return {
        moves: this.$store.state.move.length,
        renames: this.$store.state.rename.length,
        remove: this.$store.state.remove.length,
        totalTransformations: this.$store.state.transformations.length,
      };
    },
  },

  methods: {
    handleDataReset() {
      this.$store.dispatch("reset");
    },
  },
};
</script>

<style>
</style>