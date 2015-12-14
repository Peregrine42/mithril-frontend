import mq from "mithril-query"
import TodoComponent from "../src/components/todo_component.js"

describe("todo module", () => {
  it("allows you to add a new todo", () => {
    let todo_component = new TodoComponent()
    todo_component.view_model.add({ description: "foo" })
    let output = todo_component.view(todo_component.controller())
    $output = mq(output)
    expect($output.has("foo")).toBe(true)
  })
})

// view:       function that outputs the HTML representation
// model:      constructor
// controller: function that defines exposes part of the model