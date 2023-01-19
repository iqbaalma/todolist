import StorageAPI from './script/storage_api.js'
import List from './script/list.js'

import './components/input-title.js' // <input-title>

'use strict'

const RENDER_APP = 'RENDER_APP'
const DATA_KEY = 'DATA_KEY'
let lists = [
  {
    id: '1',
    title: 'Tes #1',
    data: [],
  },
  {
    id: '2',
    title: 'Tes #2',
    data: [],
  },
  {
    id: '3',
    title: 'Tes #3',
    data: [],
  }
]

console.log(lists)

const main = () => {
  const input_ = document.querySelector('input-title')
  const container_ = document.querySelector('list-container')

  container_.className = 'accordion accordion-flush'
  container_.id = 'list-container'

  const containerId = document.querySelector('list-container').getAttribute('id')

  const render = (dataObject, parentId) => {
    const element = document.createElement('div')
    element.innerHTML = ''
    element.setAttribute('class', 'accordion-item')

    const elementTitle = document.createElement('h2')
    elementTitle.setAttribute('class', 'accordion-header')
    elementTitle.setAttribute('id', `heading-${dataObject.id}`)

    const button = document.createElement('button')
    button.setAttribute('class', 'accordion-button')
    button.setAttribute('type', 'button')
    button.setAttribute('data-bs-toggle', 'collapse')
    button.setAttribute('data-bs-target', `#collapse-${dataObject.id}`)
    button.setAttribute('aria-expanded', 'true')
    button.setAttribute('aria-controls', `collapse-${dataObject.id}`)
    button.innerHTML = dataObject.title

    const content = document.createElement('div')
    content.setAttribute('class', `accordion-collapse collapse`)
    content.setAttribute('id', `collapse-${dataObject.id}`)
    content.setAttribute('aria-labelledby', `heading-${dataObject.id}`)
    content.setAttribute('data-bs-parent', `#collapse-${parentId}`)

    const contentBody = document.createElement('div')
    contentBody.setAttribute('class', 'accordion-body')
    contentBody.innerHTML = ''
    contentBody.innerHTML = `
      <span class="d-flex justify-content-between mb-3">
        ${dataObject.title}
        <div class="d-flex gap-2">
          <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
          <button class="btn btn-primary btn-sm"><i class="bi bi-plus"></i></button>
        </div>
      </span>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between">
          <span>An item</span>
          <div class="d-flex gap-2">
            <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
            <button class="btn btn-primary btn-sm"><i class="bi bi-plus"></i></button>
          </div>
        </li>
        <li class="list-group-item">A second item</li>
      </ul>
    `

    content.append(contentBody)
    elementTitle.append(button)
    element.append(elementTitle, content)

    element.setAttribute('list', `${dataObject.id}`)

    container_.append(element)
  }
  
  const validateEmpty = (input) => {
    const _input = input

    if (_input === "") {
      Swal.fire(
        'Empty',
        `Can't proceed if empty`,
        'warning',
      )
      return true
    }
    return false
  }

  if (lists.length !== 0) {
    container_.innerHTML = ''
    lists.forEach(list => {
      render(list, containerId)
    })
  }

  const process_ = () => {
    if (validateEmpty(input_.value) === true) {
      return
    } else {
      const id = +new Date()
      const title = input_.value
      const item_ = List.createListObject(id, title)
      lists.push(item_)
  
      console.log(lists)

      if (lists.length !== 0) {
        container_.innerHTML = ''
        lists.forEach(list => {
          render(list, containerId)
        })
      }
    }
  }

  input_.clickEvent = process_
}

main()