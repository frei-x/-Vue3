import { ref } from 'vue'
/**
 * @description 切换值，布尔类型对调，数组(长度为2)值对调
 * @author 衣沾不足惜 javascript.h@qq.com
 * @date 2020-09-06
 * @export
 * @param {Boolean | Array | String} value 布尔 ,数组 . 如果是字符串必须写入第二个值
 * @param {String} negationValue? value取反
 */
export function useToggle (value, negationValue) {
  let state
  let toggle
  let count = 0
  // 双参数
  if (negationValue !== undefined) {
    state = ref(value)
    toggle = () => {
      if (state.value === value) {
        state.value = negationValue
      } else {
        state.value = value
      }
    }
  } else {
    // 数组
    if (Array.isArray(value)) {
      state = ref(value[0])
      toggle = () => {
        count++
        state = value[count % 2]
      }
    } else {
      state = ref(value)
      toggle = () => {
        state = !state
      }
      // 布尔
    }
  }

  return [state, toggle]
}
