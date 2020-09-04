class Shop {
  constructor() {
    this.containsIllegalItem = false,
    this.basketTotal = 0,
    this.basket = ''
    this.offer1 = {
      items: 'AAA',
      price: 130
    },
    this.offer2 = {
      items: "BB",
      price: 45
    }
  }

  checkout(items){
    this.basket = items
    this.basketTotal = 0
    this._applySpecialOffers()

    let itemArray = this.basket.split('')

    

    this._calculateBasketTotal(itemArray)

    this._checkForIllegalItems()

    return this.basketTotal

  }

  _calculateBasketTotal(array){
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

  _checkForIllegalItems(){
    if(this.containsIllegalItem === true) {
      this.basketTotal = -1
    }
  }

  _applySpecialOffers(){
    if(this.basket.includes(this.offer1.items)) {
      this.basket = this.basket.replace(this.offer1.items, "")
      this.basketTotal += this.offer1.price
    } else if(this.basket.includes(this.offer2.items)) {
      this.basket = this.basket.replace(this.offer2.items, "")
      this.basketTotal += this.offer2.price
    }
  }

  
}