class Shop {
  constructor() {
    this.containsIllegalItem = false,
    this.basketTotal = 0
  }

  checkout(items){
    // if(items contain 'AAA'){
    //   this.basketTotal += 130
    //   items.delete('AAA')
    // }
    // else if ()
    this.basketTotal = 0
    let itemArray = items.split('')

    

    this._calculateTotal(itemArray)

    if(this.containsIllegalItem === false) {
      return this.basketTotal
    } else {
      return -1
    }
  }

  _calculateTotal(array){
    array.forEach(function(item) {
      if(item === 'A'){ 
        this.basketTotal += 50
      } else if(item === 'B'){
        this.basketTotal += 30
      } else if(item === 'C'){
        this.basketTotal += 20
      } else if(item === 'D') {
        this.basketTotal += 15 
      } else { this.containsIllegalItem = true }
    }, this)
  }
}