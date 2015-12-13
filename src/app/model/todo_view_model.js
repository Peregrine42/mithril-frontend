import m from "mithril"
import todo from "./todo.js"


module.exports = {
  init() {
    this.list = new todo.TodoList()
    this.description = m.prop('')
    this.add = () => {
      if (this.description()) {
        let new_todo = new todo.Todo(
          { description: this.description() }
        )
        this.list.push(new_todo)
        this.description("")
      }
    }
  }
}