import StorageAPI from "./storage_api.js";

class List {
    constructor() {
      const _container = document.getElementById('list-item')
      _container.innerHTML = ''
      
      const containerId = _container.getAttribute('id')
    }

    static createListObject(id, title) {
      return {
        id,
        title,
        data: []
      }
    }
    
    static addToDB(DB, data) {
      DB.push(data);
    }
    
    static createList(data, accordionParent) {
      const id = data.id,
        title = data.title
    
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
      content.setAttribute('data-bs-parent', `#collapse-${accordionParent}`)

      const contentBody = document.createElement('div')
      contentBody.setAttribute('class', 'accordion-body')
      contentBody.innerHTML = ''
      contentBody.innerHTML = title

      content.append(contentBody)
      elementTitle.append(button)
      element.append(elementTitle, content)
    
      element.setAttribute('id', `${id}`)

      return element
    }

    static createListData(id, data) {
      const container = document.createElement('ul')
    }

    static add(DB, value, identifier) {
      const listTitle = value
    
      const id = +new Date()
      const result = List.createListObject(id, listTitle)

      const containerId = this.containerId
    
      DB.forEach(list => {
        const item = List.createList(list, containerId)
        this._container.append(item)
      })

      List.addToDB(DB, result)
      StorageAPI.save(identifier, DB)
    
      // console.log(DB)
      // window.location.href = './'
    }
}

export default List