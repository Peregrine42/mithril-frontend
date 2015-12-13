import m from "mithril"

let todo = {}

todo.Todo = require("./app/model/todo.js").todo
todo.TodoList = require("./app/model/todo_list.js").todo_list

todo.vm = require("./app/model/todo_view_model.js")
todo.controller = () => {
  todo.vm.init()
}

todo.view = function() {
  return m("html", [
    m("body", [
      m("input", {
        onchange: m.withAttr("value", todo.vm.description), 
        value: todo.vm.description()
      }),
      m("button", {
        onclick: todo.vm.add
      }, "Add"),
      m("table", [
        todo.vm.list.map((task, index) => {
          return m("tr", [
            m("td", [
              m("input[type=checkbox]", {
                onclick: m.withAttr("checked", task.done), 
                checked: task.done()
              })
            ]),
            m("td", {
              style: {
                textDecoration: 
                  task.done() ? "line-through" : "none"
              }
            }, task.description()),
          ])
        })
      ])
    ])
  ]);
};

m.mount(
  document, {
    controller: todo.controller, 
    view: todo.view
  }
);