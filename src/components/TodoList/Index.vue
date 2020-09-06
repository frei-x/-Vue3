<template>
  <section class="todoapp">
    <HeaderInput v-model="inputModel" :add="useCrud.createData" />
    <MainList :list="useCrud.listData" :toggleCheckbox="useCrud.updateData" @click-delete-button="useCrud.deleteData" />
    <FooterFilter :count="count" :filters="useCrud.readData" />
  </section>
</template>

<script>
import { ref, computed, reactive, onMounted, onUnmounted, watchEffect } from 'vue'

import { useCrud } from '@/composition-lib/index'

import HeaderInput from './components/HeaderInput'
import MainList from './components/MainList'
import FooterFilter from './components/FooterFilter'

export default {
  components: {
    FooterFilter,
    MainList,
    HeaderInput,
  },
  props: {},
  setup() {
    let inputModel = ref('')
    let [listData, createData, readData, updateData, deleteData] = useCrud({ list: [] })
    let count = computed(() => listData.length)
    watchEffect(() => {
      console.log(inputModel.value)
    })
    return {
      inputModel,
      count,
      useCrud: {
        listData,
        createData,
        readData,
        updateData,
        deleteData,
      },
    }
  },
}
</script>
