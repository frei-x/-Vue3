import { ref, reactive, toRaw, toRefs, computed, readonly, onMounted, onUnmounted, watchEffect } from 'vue'

export function useCrud (propsData) {
  let oData = ref(propsData)
  const createData = (singleData) => {
    oData.value.unshift(singleData)
  }
  const deleteData = (index, { key, value } = {}) => {
    if (index || index == 0) {
      oData.value.splice(index, 1)
      return
    }
    const fIndex = oData.value.findIndex((item) => item[key] == value)
    oData.value.splice(fIndex, 1)
    return fIndex > -1
  }
  const readData = ({ key, value } = {}) => {
    oData.value = [{ text: 'h哈哈' }]
    console.log(oData)
    return
    // console.log(oData.value)
    // let copyData = toRaw(oData.value)
    // console.log(copyData)
    // if (key == 'all') {
    //   oData.value = copyData
    // }
    // oData.value = copyData.filter(item => {
    //   return item[key] == value
    // })
    // console.log(oData.value, copyData)
  }
  let filterList = computed(() => {
    return oData.value.filter((item) => {
      return item.checked == false
    })
  })
  const updateData = (index, { key, value }) => {
    if (index < 0) return
    oData.value[index][key] = value
  }
  return [oData, createData, readData, updateData, deleteData]
}
