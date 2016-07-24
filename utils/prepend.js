// # prepend
//
// prepend is a simple function that will insert the element in front of
// the element list, it will look for a header element and insert after the
// header otherise it will insert at the top
//
// Example:
//
// ```
// prepend('articles', h('h1', ['Foo']))
// ```
//
module.exports = function (id, el) {
  const parent = document.getElementById(id)
  parent.insertBefore(el, parent.querySelector('header').nextSibling)
}
