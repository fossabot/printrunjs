<template>
  <ControlXYZ />
</template>

<script lang="ts">
import Vue from 'vue'
import ControlXYZ from './ControlXYZ.vue'

export default Vue.extend({
  name: 'ControlPanel',

  components: {
    ControlXYZ
  }
})
</script>
