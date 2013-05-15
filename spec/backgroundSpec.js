describe("background", function() {
  // var binarySearchTree;

  // beforeEach(function() {
  //   binarySearchTree = makeBinarySearchTree();
  // });

  it("should store history", function() {
    expect(lastMode).toEqual('bgimg');
    expect(lastBgArray).toEqual(bgPaintArray);
    expect(lastBgArray.length).toEqual(h);
    expect(lastBgArray[0].length).toEqual(w);
  });

  it("should read video input", function() {
    expect(pixels.length).toEqual(w*h*4);
    expect(pixCount).toEqual(w*h);
  });

});