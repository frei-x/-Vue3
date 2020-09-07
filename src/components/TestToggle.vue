<template>
  <div class="box" @click="toggle">点我: {{ state }}</div>
</template>

<script>
import { useToggle } from '@/composition-lib/index';
export default {
  components: {},
  props: {},
  setup() {
    const [state, toggle] = useToggle(['start', '1', '2', '3', '4', 'end']);
    return {
      state,
      toggle,
    };
  },
  mounted() {
    console.log(this.state);
  },
};
</script>

<style scoped lang="scss">
.box {
}
</style>
