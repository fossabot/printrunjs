<template>
  <v-app>
    <AppBar />

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-row
          class="mb-6 fill-height"
          no-gutters
        >
          <v-col cols="3">
            Test
          </v-col>
          <v-col cols="6">
            Test
          </v-col>
          <v-col cols="3">
            Test
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <StatusBar />
  </v-app>
</template>

<style lang="scss">
/* Reset JS force overflow by default */
html {
  overflow-y: auto !important;
}
</style>

<script lang="ts">
import Vue from 'vue'
import AppBar from './components/AppBar.vue'
import StatusBar from './components/StatusBar.vue'

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    StatusBar
  },

  data: () => ({
    //
  })
})
</script>
