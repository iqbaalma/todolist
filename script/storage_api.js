class StorageAPI {
    static checkStorageAPI() {
      if (typeof (Storage) === undefined) {
          window.alert('Your web browser does not support Web Storage API')
          return false
      }
      return true
    }
    
    static saveToLocalStorage() {
      if (checkStorageAPI()) {
          const data_ = JSON.stringify(books);
          localStorage.setItem(DATA_KEY, data_);
          document.dispatchEvent(new Event(RENDER_PROG))
      }
    }
    
    static loadFromLocalStorage() {
      const data_ = localStorage.getItem(DATA_KEY);
      let data = JSON.parse(data_);
    
      if (data !== null) {
          for (const book of data) {
              books.push(book);
          }
      }
    
      document.dispatchEvent(new Event(RENDER_PROG));
    }
}


export default StorageAPI