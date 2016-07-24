// # value
//
// the value function is a simple function that will return the value of an
// element based on id, if the element does not have a value it will return
// an empty string
//
module.exports = function (id) {
  const el = document.getElementById(id)
  return (el && el.value) ? el.value : ''
}
