<template>
  <v-app-bar
    app
    color="primary"
    dark
    dense
    flat
  >
    <div class="d-flex align-center">
      <v-toolbar-title>PrintRunJS</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-tabs
      centered
      slider-color="black"
    >
      <v-tab>
        Plater
      </v-tab>
      <v-tab>
        Camera
      </v-tab>
    </v-tabs>

    <v-btn
      @click="drawer = true"
      text
    >
      <v-icon>mdi-console-line</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppBar',

  data: () => ({
    //
  })
})
</script>
