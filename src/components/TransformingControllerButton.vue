<template>
  <div class="transform-button">
    <v-btn @click="handleContentTransformation" color="primary"
      >transform</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "transforming-controller-button",

  data() {
    return {
      transformations: null,
    };
  },

  methods: {
    handleContentTransformation() {
      this.transformations = this.$store.state.transformations;

      this.transformations.forEach((transformation) => {
        this.$store.dispatch({
          type: transformation.type,
          params: transformation,
        });
      });
    },
  },
};
</script>
