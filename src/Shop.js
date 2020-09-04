class Shop {
  constructor() {
    this.containsIllegalItem = false
  }

  checkout(item){
    let itemArray = item.split('')
    let basketTotal = 0
    // if(itemArray.includes(!'A', !'B', !'C', !'D')){
    //   basketTotal = -1 }
    //   else {
    itemArray.forEach(function(item) {
        if(item === 'A'){ 
          basketTotal += 50
        } else if(item === 'B'){
          basketTotal += 30
        } else if(item === 'C'){
          basketTotal += 20
        } else if(item === 'D') {
          basketTotal += 15 
        } else { this.containsIllegalItem = true }
      }, this)

    if(this.containsIllegalItem === false) {
      return basketTotal
    } else {
      return -1
    }
  }
}