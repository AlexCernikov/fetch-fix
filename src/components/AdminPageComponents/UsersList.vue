<template>
  <div class="users-list">
    <admin-nav-bar />
    <div class="main-content__users-list">
        <!-- <b-button variant="success" @click="login">User Item</b-button> -->
        <UserItem
         v-for="user in users "
        :key="user.id"
        :user="user"
        @showUserItem="showUserItem"
        >
        </UserItem>
        <ModalView
        v-model:show="dialogVisible"
        ><p>{{users}}</p>
        <li v-for="user in users" :key="user">
        {{ user.email }}
        </li>
        <div v-for="user in users"
        :key="user.id">
        <UserItem v-if="user.id ===1"
        :user="user">
        </UserItem>
        </div>
        <!-- <div v-for="user in users"
        :key="user.id">
        <UserItem v-if="user.id === 2"
        :user="this.user">
        </UserItem>
        </div> -->
        </ModalView>
    </div>
    <b-button variant="success" @click="showModal">Edit User</b-button>
    <div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AdminNavBar from '@/components/AdminPageComponents/AdminNavBar.vue';
import UserItem from './UserItem.vue';
import ModalView from './ModalView.vue';

export default defineComponent({
  name: 'usersList',
  components: {
    UserItem,
    AdminNavBar,
    ModalView,
  },
  data() {
    return {
      users: [],
      token: String,
      dialogVisible: false,
    };
  },
  mounted() {
    this.login();
  },
  methods: {
    showUserItem(user) {
      console.log('UserAAAAAAAAAAAAAAAAAAAAAAAAAAAA', user.id);
      console.log('UserAAAAAAAAAAAAAAAAAAAAAAAAAAAA', user.length);
      if (user.id) {
        this.showModal();
      }
    },
    showModal() {
      console.log('AAAAAAAAAAA', this.dialogVisible);
      this.dialogVisible = true;
    },
    async login() {
      const response = await fetch('/user/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          email: 'dca@isd.com',
          password: 'test',
        }),
      });
      const data = await response.json();
      this.token = data.token;
      console.log('DATA', data, 'TOKEN', this.token);
      this.getUsers();
    },
    async  getUsers() {
      const response = await fetch('/user', {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const data = await response.json();
      this.users = data;
      console.log('GET DATA', data);
    },
  },
});
</script>

<style scoped lang="scss">
@import "../../../public/styles.scss";
.users-list{
    display: flex;
}
.main-content__users-list{
    background-color: #030303;
    width: 100%;
}
</style>
