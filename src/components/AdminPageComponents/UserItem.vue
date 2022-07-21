<template>
  <div class="user-item">
    <!-- <b-button variant="success">User Item</b-button> -->
    <div class="user-item__container">
        <p>
            <strong>User name: </strong>{{user.firstname}}
        </p>
        <p>
            <strong>User last name: </strong>{{user.lastname}}
        </p>
        <p>
            <strong>User email: </strong>{{user.email}}
        </p>
    </div>
    <b-button variant="success" @click="$emit('showUserItem', this.user)">Edit User</b-button>
    <!-- <b-button variant="success"
    @click="showModal"
    >
    Edit User
    </b-button> -->
    <!-- <ModalView
    v-model:show="dialogVisible"
    /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'userItem',
  props: {
    user: {
      type: Array,
    },
  },
  methods: {
    param() {
      this.$emit('update:dialogVisible', true);
    },
  },
  // data() {
  //   return {
  //     dialogVisible: false,
  //   };
  // },
  // methods: {
  //   showModal() {
  //     console.log('AAAAAAAAAAA', this.dialogVisible);
  //     this.dialogVisible = true;
  //   },
  // },
});

</script>

<style scoped lang="scss">
@import "../../../public/styles.scss";
.user-item{
    padding: 50px 50px;
    color: aliceblue;
    display: flex;
    justify-content: space-between;
    align-items: end;
}
p{
    color: rgb(7, 89, 160);
    font-size: 1.5rem;
}
</style>
<style lang="scss">
@import "../../../public/styles.scss";
.btn{
    height: 50px;
}
.btn-success{
    background-color: $orange;
    border: none;
}
</style>
