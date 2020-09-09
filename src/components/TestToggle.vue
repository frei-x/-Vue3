<template>
  <div class="box" @click="toggle">点我: {{ aaa }}</div>
</template>

<script>
// import { useToggle } from '@/composition-lib/index';
import { useToggle } from 'vue-dust';
console.log(useToggle);
export default {
  components: {},
  props: {},
  setup() {
    const [aaa, toggle] = useToggle(false);
    console.log(aaa);
    return {
      aaa,
      toggle,
    };
  },
  mounted() {
    console.log(this.aaa);
  },
};
</script>

<style scoped lang="scss">
.box {
}
</style>
