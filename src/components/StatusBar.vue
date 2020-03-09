<template>
  <v-system-bar color="primary" dark>
    <v-icon>mdi-printer-3d</v-icon>
    <span>Not connected to printer.</span>
    <v-spacer></v-spacer>
  </v-system-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'StatusBar'
})
</script>
