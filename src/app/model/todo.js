import m from "mithril"

module.exports = {
  Todo(data) {
    this.description = m.prop(data.description)
    this.done = m.prop(false)
  }
}