class StorageAPI {
    static checkAvailability() {
      if (typeof (Storage) === undefined) {
          window.alert('Your web browser does not support Web Storage API')
          return false
      }
      return true
    }
    
    static save(identifier, DB) {
      if (this.checkAvailability()) {
          const _DB = JSON.stringify(DB)
          localStorage.setItem(identifier, _DB)
      }
    }
    
    static load(identifier, DB) {
      const _DB = localStorage.getItem(identifier)
      let data = JSON.parse(_DB)
    
      if (data !== null) {
          for (const list of data) {
              DB.push(list)
          }
      }

      return DB
    }
}


export default StorageAPI