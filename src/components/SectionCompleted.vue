<template>
  <div class="row">
    <div class="form-check form-check-inline">
      <div class="form-check-label">
        <input class="form-check-input" type="checkbox" v-model="checked" @click="sectionCompleted" /> Mark section as completed
      </div>
    </div>
  </div>
</template>
<script>
import { EventBus } from '../main';

export default {
  data: function() {
    return {
      checked: ""
    }
  },
  methods: {
    sectionCompleted: function() {
      EventBus.$emit('mark-as-completed', this.checked)
    }
  }
}
</script>

<style>
  
</style>