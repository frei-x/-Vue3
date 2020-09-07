<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.checked }" v-for="(item, index) of list.value" :key="item.time">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.checked" />
          <label @click="clickCheckbox(item, index)">{{ item.text }}</label>
          <button @click="clickDeleteButton(index)" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<script>
import MainListItem from './MainListItem';
import { computed, watchEffect } from 'vue';
export default {
  components: {
    MainListItem
  },
  props: {
    list: Array,
    toggleCheckbox: Function
  },
  setup(props, { emit }) {
    const clickCheckbox = (item, index) => {
      props.toggleCheckbox(index, { key: 'checked', value: !item.checked });
    };
    const clickDeleteButton = index => {
      emit('click-delete-button', index);
    };
    watchEffect(() => {
      console.log(props.list.value);
    });

    return {
      clickCheckbox,
      clickDeleteButton
    };
  }
};
</script>
