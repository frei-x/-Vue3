<template>
  <footer class="footer">
    <span class="todo-count"
      >累计 <strong>{{ count || 0 }}</strong>
    </span>
    <ul class="filters">
      <li>
        <a :class="{ selected: refCurrentSelected == 'all' }" @click="clickFilters('all')">全部</a>
      </li>
      <li>
        <a :class="{ selected: refCurrentSelected == 'active' }" @click="clickFilters('active')">进行中</a>
      </li>
      <li>
        <a :class="{ selected: refCurrentSelected == 'completed' }" @click="clickFilters('completed')">已完成</a>
      </li>
    </ul>
    <!-- <button class="clear-completed">Clear completed</button> -->
  </footer>
</template>

<script>
import { inject } from 'vue';
export default {
  components: {},
  props: {
    count: [Number, String]
  },
  setup() {
    const { refCurrentSelected } = inject('shareStore');
    const clickFilters = type => {
      refCurrentSelected.value = type;
    };
    return { clickFilters, refCurrentSelected };
  }
};
</script>

<style lang="scss" scoped>
.strong {
  font-weight: bold;
}
</style>
