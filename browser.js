// # app
const StorageDB = require('./utils/sdb')
const value = require('./utils/value')
const prepend = require('./utils/prepend')
const h = require('./utils/hscript')

// create database
const db = StorageDB('journal2')

// listen for changes
db
  .changes({ include_docs: true, live: true })
  .on('change', onChange)

// listen for form submit
document
  .querySelector('form')
  .addEventListener('submit', onSubmit)

// ### onSubmit
//
// add new article to database
function onSubmit (event) {
  event.preventDefault()
  db.post({
    title: value('title'),
    body: value('body')
  })
  event.target.reset()
}

// ### onChange
//
// Add article to article list
function onChange (chg) {
  prepend('articles', h('article', [
    h('header', [
      h('h4', [chg.doc.title])
    ]),
    h('div', [chg.doc.body]),
    h('hr')
  ]))
}
