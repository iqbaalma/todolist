class ListItem extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    set data(data) {
        this._data = data
        this.render()
    }

    set parent(parent) {
        this._parent = parent
        this.render()
    }

    render() {
        const id = this._data.id
        const title = this._data.title
        const parent = this._parent

        // this.innerHTML = `
        //     <div class="accordion-item">
        //         <h2 class="accordion-header" id="flush-${id}">
        //         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${id}" aria-expanded="false" aria-controls="flush-${id}">
        //             Accordion Item #1
        //         </button>
        //         </h2>
        //             <div id="flush-${id}" class="accordion-collapse collapse" aria-labelledby="flush-${id}" data-bs-parent="#${parent}">
        //             <div class="accordion-body">
        //                 ${title}
        //             </div>
        //         </div>
        //     </div>
        // `

        // const id = data.id,
        // title = data.title
    
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
        content.setAttribute('data-bs-parent', `#collapse-${parent}`)

        const contentBody = document.createElement('div')
        contentBody.setAttribute('class', 'accordion-body')
        contentBody.innerHTML = ''
        contentBody.innerHTML = title

        content.append(contentBody)
        elementTitle.append(button)
        element.append(elementTitle, content)

        element.setAttribute('id', `${id}`)

        this.innerHTML = `${element}`
    }
}

customElements.define('list-item', ListItem)