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
    
        
    }
}

customElements.define('list-item', ListItem)