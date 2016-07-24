// # hscript
//
// This module exports the `h` function, this function takes the following
// arguments
//
// - tag [String] MUST be html5 element tag name
// - content [Array]
//
//   the array can contain strings or dom element objects
//
//   if content item is a string then it is applied as text in the element
//   if content item is an Object then it is appended to the element
//
// Example:
//
// ``` js
// h('section', [
//   h('header', [
//     h('h2', 'Title')
//   ]),
//   h('div', [
//     'Foo'
//   ])
// ])
// ```
//
module.exports = function (tag, content) {
  const el = document.createElement(tag)
  if (content) {
    content.map(function(c) {
      return typeof c === 'string' ? el.innerText = c : el.appendChild(c)
    })
  }
  return el
}
