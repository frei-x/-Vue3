<template>
  <header class="header">
    <h1>todos</h1>
    <input
      :value="modelValue"
      v-on:input="updataModel($event)"
      class="new-todo"
      @keyup.enter="addTodo({ time: new Date(), text: $event.target.value, checked: false })"
      placeholder="按回车添加"
      autofocus
    />
  </header>
</template>

<script>
export default {
  components: {},
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    },
    add: Function
  },
  setup(props, { emit }) {
    const addTodo = item => {
      if (!props.modelValue) return;
      props.add(item);
      updataModel('');
    };
    const updataModel = e => {
      emit('update:modelValue', e ? e.target.value.trim() : '');
    };
    return {
      addTodo,
      updataModel
    };
  }
};
</script>
