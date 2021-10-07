<template>
  <div class="mt-3">
    <div class="content">
      <ContentList />
    </div>
    <TransformingControllerButton />
    <div class="transformed-content">
      <TransformList />
    </div>
    <div class="info-card">
      <InfoCard v-if="show" />
    </div>
  </div>
</template>

<script>
import ContentList from "./ContentList";
import InfoCard from "./InfoCard";
import TransformList from "./TransformList";
import TransformingControllerButton from "./TransformingControllerButton";

export default {
  name: "content-component",
  components: {
    ContentList,
    TransformList,
    InfoCard,
    TransformingControllerButton,
  },

  data: () => ({}),

  computed: {
    show() {
      return this.$store.state.stats;
    },
  },

  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

