<template>
  <footer class="footer">
    <span class="todo-count"
      >累计 <strong>{{ count || 0 }}</strong>
    </span>
    <ul class="filters">
      <li>
        <a :class="{ selected: currentSelected == 'all' }" @click="clickFilters('all')" href="#">全部</a>
      </li>
      <li>
        <a :class="{ selected: currentSelected == 'active' }" href="#" @click="clickFilters('active')">进行中</a>
      </li>
      <li>
        <a :class="{ selected: currentSelected == 'completed' }" href="#" @click="clickFilters('completed')">已完成</a>
      </li>
    </ul>
    <!-- <button class="clear-completed">Clear completed</button> -->
  </footer>
</template>

<script>
import { ref } from 'vue'
export default {
  components: {},
  props: {
    count: [Number, String],
    filters: Function,
  },
  setup(props) {
    let currentSelected = ref('all')
    const clickFilters = (type) => {
      currentSelected.value = type
      const params = {
        ...(type == 'all'
          ? { key: 'all' }
          : type == 'active'
          ? { key: 'checked', value: false }
          : { key: 'checked', value: true }),
      }
      props.filters(params)
      console.log(params)
    }
    return {
      currentSelected,
      clickFilters,
    }
  },
}
</script>

<style lang="scss" scoped>
.strong {
  font-weight: bold;
}
</style>
