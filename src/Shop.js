class Shop {
  constructor() {}

  checkout(item){
    let itemArray = item.split('')
    let basketTotal = 0
    itemArray.forEach(function(item) {
      if(item === 'A'){ 
        basketTotal += 50
      } else if(item === 'B'){
        basketTotal += 30
      } else if(item === 'C'){
        basketTotal += 20
      } else if(item === 'D') {
        basketTotal += 15
      } else {
        basketTotal = -1
    }
    })
    return basketTotal
  }
}