class Shop {
  constructor() {}

  checkout(item){
    if(item === 'A'){ 
    return 50
    } else if(item === 'B'){
      return 30
    } else {
      return 20
    }
  }
}