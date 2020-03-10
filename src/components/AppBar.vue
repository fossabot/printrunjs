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

    <v-tabs centered>
      <v-tab to="/">
        Plater
      </v-tab>
      <v-tab to="/camera">
        Camera
      </v-tab>
    </v-tabs>

    <v-btn
      @click.stop="toggleConsole"
      text
    >
      <v-icon>mdi-console-line</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'AppBar',

  methods: mapMutations([
    'toggleConsole'
  ])
})
</script>
