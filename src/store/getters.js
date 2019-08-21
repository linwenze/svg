export default {
    doneTodos: state => {
        return state.list.filter(todo => todo.age>7)
      }
}