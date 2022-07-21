<template>
  <div class="entities-list">
    <admin-nav-bar />
    <div class="main-content__entities">
        <EntitiesItem v-for="entity in entities"
        :key="entity"
        :entities="entities" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdminNavBar from '@/components/AdminPageComponents/AdminNavBar.vue';
import EntitiesItem from './EntitiesItem.vue';

export default defineComponent({
  name: 'usersList',
  components: {
    EntitiesItem,
    AdminNavBar,
  },
  data() {
    return {
      entities: [],
    };
  },
  async created() {
    const response = await fetch('/reservationEntities');
    const data = await response.json();
    this.entities = data;
    console.log(data);
  },
});
</script>

<style scoped lang="scss">
@import "../../../public/styles.scss";
.entities-list{
    display: flex;
}
.main-content__entities{
    background-color: #030303;
    width: 100%;
}
</style>
