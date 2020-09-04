describe("Shop", function() {
  var shop;

  beforeEach(function() {
    shop = new Shop()
  });

  it("returns 50 for item A", function() {
    expect(shop.checkout('A')).toEqual(50)
  })

  it ("returns 30 for item B", function(){
    expect(shop.checkout('B')).toEqual(30)
  })

  it ("returns 20 for item C", function(){
    expect(shop.checkout('C')).toEqual(20)
  })

  it ("returns 15 for item D", function(){
    expect(shop.checkout('D')).toEqual(15)
  })

  it("returns -1 when given an illegal input", function() {
    expect(shop.checkout('aBc')).toEqual(-1)
    expect(shop.checkout('aaB')).toEqual(-1)
  })

  it("calculates the total for multiple items", function(){
    expect(shop.checkout('AA')).toEqual(100)
    expect(shop.checkout('ABCD')).toEqual(115)
  })

})