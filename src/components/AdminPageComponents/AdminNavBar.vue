<template>
<!-- eslint-disable max-len -->
<div class="wrapper">
    <div class="sidebar">
        <ul>
            <li><b-button variant="succes"
            @click="goToPageUsersList(name.active)"
            @keypress="bar"
            >Users</b-button></li>
            <li><b-button variant="succes">Bookings</b-button></li>
            <li><b-button variant="succes"
            @click="goToPageEntitiesList"
            @keypress="bar"
            >Entities</b-button></li>
            <li><b-button variant="succes"
            @click="goToPageAdminPage"
            @keypress="bar">Other</b-button></li>
        </ul>
    </div>
    <!-- <div class="main-content">
        <div class="header">Welcome!!</div>
    </div> -->
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'adminNavBar',
  data() {
    return {
      name: {
        active: true,
      },
    };
  },
  methods: {
    goToPageUsersList(value:any) {
      this.$router.push('/UsersList');
      console.log(value);
    },
    goToPageAdminPage() {
      this.$router.push('/adminPage');
    },
    goToPageEntitiesList() {
      this.$router.push('/entitiesList');
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../public/styles.scss";
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
}
.wrapper{
    display: flex;
}
.wrapper .sidebar{
    width: 200px;
    height: 100%;
    background-color: #222831 ;
}
li{
    margin-top: 15px;
    padding-left: 20px;
}
.btn{
    border-color: none;
    color: aliceblue;
    font-size: 40px;
}
.main-content{
    background-color: #030303;
}
.header{
    text-align: center;
    font-size: 40px;
}
</style>
