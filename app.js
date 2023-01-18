import StorageAPI from './script/storage_api.js'
import List from './script/list.js';

'use strict';

let lists = [],
  RENDER_APP = 'RENDER_APP',
  DATA_KEY = 'DATA_KEY'

// 

const inputList = document.getElementById('input_list')
const inputSubmit = document.getElementById('input_submit')
const container = document.getElementById('lists')

inputSubmit.addEventListener('click', (e) => {
  e.preventDefault()

  const listValue = inputList.value

  if (listValue === "") {
    window.alert("Input tidak boleh kosong !")
    return
  }

  const id = +new Date()
  const result = List.createListObject(id, listValue)
  List.addToDB(lists, result)

  // container.innerHTML = createList(result)
  container.innerHTML = ''

  if (lists.length !== 0) {
    lists.forEach(list => {

      const lists = List.createList(list)
      container.append(lists)
    })
  }

  console.log(lists)
})
