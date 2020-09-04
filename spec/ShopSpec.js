describe("Shop", function() {
  var shop;

  beforeEach(function() {
    shop = new Shop()
  });

  // it("returns -1 when given an illegal input", function() {
  //   expect(shop.checkout('aBc')).toEqual(-1)
  // })

  it("returns 50 for item A", function() {
    expect(shop.checkout('A')).toEqual(50)
  })
})