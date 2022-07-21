<template>
  <div class="test-view">
    <b-button variant="success">CLICK ME</b-button>
    <div v-for="test in tests" :key="test">
    {{test.email}}
      {{tests}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'testView',
  data() {
    return {
      tests: [],
    };
  },
  async created() {
    const response = await fetch('/user');
    const data = await response.json();
    this.tests = data;
    console.log(data);
  },
});
</script>

<style scoped lang="scss">
@import "../../../public/styles.scss";
.btn {
  width: 40px;
  height: 40px;
}
</style>
