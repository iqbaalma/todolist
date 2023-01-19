import List from "../script/list.js"

class InputTitle extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    get value() {
        return document.querySelector('#input_list').value
    }

    set clickEvent(event) {
        this._clickEvent = event
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="card" style="width: 20rem;">
                <div class="card-body">
                    <h4 class="card-title">Add List</h4>
                    <hr>
                    <input
                        id="input_list"
                        class="form-control"
                        placeholder="Title" />
                    <div class="d-flex justify-content-between">
                        <span></span>
                        <button
                            id="input_submit"
                            class="btn btn-primary mt-3 fw-bold">
                                <i class="bi bi-plus-square"></i>
                        </button>
                    </div>
                </div>
            </div>
        `

        this.querySelector('#input_submit').addEventListener('click', this._clickEvent)
    }
}

customElements.define('input-title', InputTitle)