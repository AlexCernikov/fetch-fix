<template>
  <div class="dialog" v-if="show" @click.stop='hideDialog' @keypress="bar" >
  <div class="dialog__content" @click.stop>
    <div class="user-item__container">
      <p>AAAAAAAAAAAAAAAAAAA</p>
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'modalView',
  props: {
    user: {
      type: Array,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
      console.log('DDDDDDDD');
    },
  },
});
</script>

<style scoped lang="scss">
@import "../../../public/styles.scss";
.dialog{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: .5);
    position: fixed;
    display: flex;
}
.dialog__content{
    margin: auto;
    background: rgb(192, 125, 125);
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 50px 50px;
    border: 1px solid;
}
</style>
