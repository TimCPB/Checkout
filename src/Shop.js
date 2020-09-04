class Shop {
  constructor() {
    this.containsIllegalItem = false,
    this.basketTotal = 0,
    this.basket = ''
    this.offer1 = {
      items: 'AAA',
      price: 130
    }
  }

  checkout(items){
    this.basket = items
    this.basketTotal = 0
    if(this.basket.includes(this.offer1.items)) {
      this.basket = this.basket.replace(this.offer1.items, "")
      this.basketTotal += 130
      console.log(this.basket)
    }

    let itemArray = this.basket.split('')

    

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