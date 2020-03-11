<template>
  <v-card
    height="100%"
    outlined
    class="d-flex flex-column"
  >
    <v-card-text>
      <div>Serial Console</div>
      <pre class="text--primary">{{ consoleText }}</pre>
    </v-card-text>

    <v-spacer></v-spacer>

    <v-card-actions>
      <v-text-field
        :append-icon="'mdi-send'"
        label="Send command"
        @click:append="show3 = !show3"
        filled
        dense
      ></v-text-field>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'Console',
  computed: mapState({
    consoleText: 'consoleText'
  })
})
</script>
