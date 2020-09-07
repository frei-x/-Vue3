<template>
  <section class="todoapp">
    <HeaderInput v-model="refInputModel" :add="useCrud.createData" />
    <MainList
      :list="computedListData(refCurrentSelected)"
      :toggleCheckbox="useCrud.updateData"
      @click-delete-button="useCrud.deleteData"
    />
    <FooterFilter :count="count" :filters="useCrud.readData" />
  </section>
</template>

<script>
import { ref, computed, provide, reactive, onMounted, onUnmounted, watchEffect } from 'vue';

import { useCrud } from '@/composition-lib/index';

import HeaderInput from './components/HeaderInput';
import MainList from './components/MainList';
import FooterFilter from './components/FooterFilter';

import { storage } from '@/utils/localStorage';

export default {
  components: {
    FooterFilter,
    MainList,
    HeaderInput
  },
  props: {},
  setup() {
    let refInputModel = ref('');
    let refCurrentSelected = ref('all');
    let [listData, createData, readData, updateData, deleteData] = useCrud(storage.get() || []);
    watchEffect(() => {
      storage.save(listData.value);
    });
    provide('shareStore', { refCurrentSelected });

    let computedListData = type => {
      if (type === 'all') {
        return readData();
      } else if (type === 'active') {
        return readData(item => {
          return !item.checked;
        });
      } else {
        return readData(item => {
          return item.checked;
        });
      }
    };

    let count = computed(() => listData.value.length);
    watchEffect(() => {
      console.log(refInputModel.value);
      console.log(listData);
    });

    return {
      refInputModel,
      computedListData,
      count,
      refCurrentSelected,
      useCrud: {
        listData,
        createData,
        readData,
        updateData,
        deleteData
      }
    };
  }
};
</script>
