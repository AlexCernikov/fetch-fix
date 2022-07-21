<template>
  <div class="admin-page">
    <admin-nav-bar />
    <!-- <b-button class="btn-admin-page"
    variant="success"
    @click="goToPageUsersList"
    @keypress="bar"
    >show users</b-button>
    <UsersList /> -->
     <div class="main-content__admin">
      <h3>ADMIN PAGE</h3>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import AdminNavBar from '@/components/AdminPageComponents/AdminNavBar.vue';
// import UsersList from './UsersList.vue';

export default defineComponent({
  name: 'adminPage',
  components: {
    // UsersList,
    AdminNavBar,
  },
  methods: {
    goToPageUsersList() {
      this.$router.push('/UsersList');
    },
  },
});
</script>
<style scoped lang="scss">
@import "../../../public/styles.scss";
.btn-admin-page{
  display: block;
  margin: auto;
}
.admin-page{
  display: flex;
}
.main-content__admin{
  background-color: #030303;
  padding: 50px 50px;
  width: 100%;
  text-align: center;
}
h3{
  color: aliceblue;
}
</style>
