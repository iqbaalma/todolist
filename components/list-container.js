import './list-item.js'

class ListContainer extends HTMLElement {
    constructor() {
        super()
    }

    set id(id) {
        this._id = id
        this.render()
    }

    set className(className) {
        this._className = className
        this.render()
    }

    set items(items) {
        this._items = items
        this.render()
    }

    render() {
        this.innerHTML = ''
        this._items.forEach(item => {
            const id = this._id

            const itemList = document.createElement('list-item')
            itemList.parent = id
            itemList.data = item
            this.append(itemList)
        })
    }
}

customElements.define('list-container', ListContainer)