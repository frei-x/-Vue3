import { ref, reactive, toRaw, toRefs, computed, readonly, onMounted, onUnmounted, watchEffect } from 'vue'

export function useCrud (propsData) {
  let oData = reactive(propsData)
  const createData = singleData => {
    oData.list.unshift(singleData)
  }
  const deleteData = (index, { key, value } = {}) => {
    if (index || index == 0) {
      oData.list.splice(index, 1)
      return
    }
    const fIndex = oData.list.findIndex(item => item[key] == value)
    oData.list.splice(fIndex, 1)
    return fIndex > -1
  }
  const readData = ({ key, value } = {}) => {
    oData.list[0] = toRefs(oData.list[0])
    console.log(oData)
    return
    // console.log(oData.list)
    // let copyData = toRaw(oData.list)
    // console.log(copyData)
    // if (key == 'all') {
    //   oData.list = copyData
    // }
    // oData.list = copyData.filter(item => {
    //   return item[key] == value
    // })
    // console.log(oData.list, copyData)
  }
  let filterList = computed(() => {
    return oData.list.filter(item => {
      return item.checked == false
    })
  })
  const updateData = (index, { key, value }) => {
    if (index < 0) return
    oData.list[index][key] = value
  }
  return [oData.list, createData, readData, updateData, deleteData]
}
