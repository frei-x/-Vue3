const storage = {
  get () {
    return JSON.parse(localStorage.getItem('todoList')) || []
  },
  save (item) {
    localStorage.setItem('todoList', JSON.stringify(item))
  }
}
export { storage }
