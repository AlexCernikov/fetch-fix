<template>
  <div class="entities-item">
    <!-- <b-button variant="success">User Item</b-button> -->
    <hr><br>
    <div v-for="entity in entities" :key="entity">
    <div>
        <h6><strong>Entities name</strong></h6>
        <p>
            {{entity.name}}
        </p>
    </div>
    <hr><br>
    <div>
        <h6><strong>Object</strong></h6>
        <p>
            {{entities}}
        </p>
    </div>
    <hr><br>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'entitiesItem',
  props: {
    entities: {
      type: Array,
    },

  },
});
</script>

<style scoped lang="scss">
@import "../../../public/styles.scss";
.entities-item{
    padding: 50px 50px;
    color: aliceblue;
}
h6{
    color: aliceblue;
}
p{
    color: aliceblue;
}
</style>
