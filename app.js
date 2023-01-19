import StorageAPI from './script/storage_api.js'
import List from './script/list.js'

import './components/input-title.js' // <input-title>

'use strict'

const RENDER_APP = 'RENDER_APP'
const DATA_KEY = 'DATA_KEY'
let lists = []

const main = () => {
  const input_ = document.querySelector('input-title')
  const container_ = document.querySelector('list-container')

  container_.className = 'accordion accordion-flush'
  container_.id = 'list-container'

  const containerId = document.querySelector('list-container').getAttribute('id')

  // if (lists.length !== 0) container_.items = lists
  
  const validateEmpty = (input) => {
    const _input = input

    if (_input === "") {
      Swal.fire(
        'Empty',
        `Can't proceed if empty`,
        'warning',
      )
      return
    }
  }

  const process_ = () => {
    validateEmpty(input_.value)

    const id = +new Date()
    const title = input_.value
    const item_ = List.createListObject(id, title)
    lists.push(item_)

    console.log(lists)

    const element = document.createElement('div')
    element.innerHTML = ''
    element.setAttribute('class', 'accordion-item')

    const elementTitle = document.createElement('h2')
    elementTitle.setAttribute('class', 'accordion-header')
    elementTitle.setAttribute('id', `heading-${id}`)

    const button = document.createElement('button')
    button.setAttribute('class', 'accordion-button')
    button.setAttribute('type', 'button')
    button.setAttribute('data-bs-toggle', 'collapse')
    button.setAttribute('data-bs-target', `#collapse-${id}`)
    button.setAttribute('aria-expanded', 'true')
    button.setAttribute('aria-controls', `collapse-${id}`)
    button.innerHTML = title

    const content = document.createElement('div')
    content.setAttribute('class', `accordion-collapse collapse`)
    content.setAttribute('id', `collapse-${id}`)
    content.setAttribute('aria-labelledby', `heading-${id}`)
    content.setAttribute('data-bs-parent', `#collapse-${containerId}`)

    const contentBody = document.createElement('div')
    contentBody.setAttribute('class', 'accordion-body')
    contentBody.innerHTML = ''
    contentBody.innerHTML = title

    content.append(contentBody)
    elementTitle.append(button)
    element.append(elementTitle, content)

    element.setAttribute('id', `${id}`)

    container_.append(element)
  }

  input_.clickEvent = process_
}

main()