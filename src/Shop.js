class Shop {
  constructor() {}

  checkout(item){
    if(item === 'A'){ 
    return 50
    } else if(item === 'B'){
      return 30
    } else if(item === 'C'){
      return 20
    } else if(item === 'D') {
      return 15
    } else if(item === 'AA') {
      return 100
    } else {
      return -1
    }
  }
}