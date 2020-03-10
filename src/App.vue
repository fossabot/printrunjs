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
            <router-view></router-view>
          </v-col>
          <transition name="slide-x-reverse-transition">
            <v-col
              cols="3"
              v-show="showConsole"
            >
              <Console />
            </v-col>
          </transition>
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
import Console from './components/Console.vue'
import { mapState } from 'vuex'
import SerialPort from 'serialport'

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    StatusBar,
    Console
  },

  computed: mapState([
    'showConsole'
  ]),

  data: () => ({
    serialPorts: SerialPort.list()
  })
})
</script>
