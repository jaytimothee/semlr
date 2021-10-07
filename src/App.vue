<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-toolbar-title>Semlr</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <ContentComponent />
    </v-main>
  </v-app>
</template>

<script>
import ContentComponent from "./components/ContentComponent";

export default {
  name: "App",

  components: {
    ContentComponent,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.content {
  position: absolute;
  left: 0;
  top: 10%;
  width: 400px;
}

.transformed-content {
  position: absolute;
  width: 500px;
  left: 35%;
  top: 10%;
}
.info-card {
  position: absolute;
  top: 10%;
  right: 2%;
}

.transform-button {
  position: absolute;
  top: 45%;
  left: 30%;
}
</style>
