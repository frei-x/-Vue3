<template>
  <div class="wrapper">
    <div class="title">{{ x }}</div>
    <div class="title">{{ y }}</div>
  </div>
  <section class="todoapp">
    <!-- This section should be hidden by default and shown when there are todos -->

    <!-- This footer should hidden by default and shown when there are todos -->
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <!-- Remove the below line ↓ -->
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Created by <a href="http://todomvc.com">you</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return {
    x,
    y,
  }
}
export default {
  name: 'Test1',
  props: {
    msg: String,
  },
  mounted() {
    console.log(2)
  },
  setup(props, { attrs, slots, emit }) {
    const { x, y } = useMousePosition()
    watchEffect(() => {
      console.log(x.value)
      console.log(props, attrs, slots, emit)
    })
    return {
      x,
      y,
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  color: red;

  .title {
    color: black;
  }
}
</style>
