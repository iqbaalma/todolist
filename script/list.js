class List {
    static createListObject(id, name) {
      return {
        id,
        name
      }
    }
    
    static addToDB(DB, data) {
      DB.push(data);
    }
    
    static createList(data) {
      const id = data.id,
        name = data.name
    
      const element = document.createElement('li')
      element.innerHTML = ''
    
      element.setAttribute('id', `${id}`)
      element.innerHTML = name
    
      return element
    }
}


export default List