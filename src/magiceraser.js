var c2 = document.querySelector('#main-canvas2');
var x2 = c2.getContext('2d');

// Returns pixel data of a image being displayed on canvas
var pictureLayerArray = function() {

  imgLoaded = false;
  img = document.createElement('img');
  //x.globalCompositeOperation = 'lighter';
  x.drawImage(v, 0, 0, w, h);

  var onImgLoad = function() {
    imgLoaded = true;
    //x2.drawImage(img, 0, 0, w, h);
    x2.drawImage(img, 0, 0, 640, 480);
    // x.globalCompositeOperation = 'lighter';
    magiceraser();
  }

  // var img = new Image();
  img.src = 'src/rg.jpg';
  img.onload = onImgLoad;
}

var magiceraser = function() {
  x.drawImage(v, 0, 0, w, h);

 var pixelsv = x.getImageData(0, 0, w, h),
     pixCountv = pixelsv.data.length / 4;

 var pixelsm = x2.getImageData(0, 0, w, h),
     pixCountm = pixelsm.data.length / 4;
  
  magicEraserArray = pixelDataArray(undefined);

  var rgba, pi = 0;
  for (var ri = 0; ri < h; ri++) {
    for (var ci = 0; ci < w; ci++) {
      rgba = [];
      for (var i = 0; i < 4; i++) {
        rgba.push(pixelsm.data[pi]);
        pi++;
      }
      magicEraserArray[ri][ci] = rgba;
    }
  };

  var index, r, g, b, hsl, ha, s, l;

  for(var pi = 0; pi < pixCountv; pi++){
    index = pi*4;
    r = pixelsv.data[index];
    g = pixelsv.data[index+1];
    b = pixelsv.data[index+2];
    hsl = rgb2hsl(r, g, b);
    ha = hsl[0];
    s = hsl[1];
    l = hsl[2];

    var ri = Math.floor(pi/w),
        ci = pi % w;
    
    if (ha >= 70 && ha <= 180 &&
        s >= 25 && s <= 90 &&
        l >= 20 && l <= 95) {

        // if touched
        magicEraserArray[ri][ci]=0;
        pixelsm.data[pi * 4 + 3] = magicEraserArray[ri][ci];
    } 
    // untouched cells remain opacity of 255
  }

  x.putImageData(pixelsv, 0, 0);
  x2.putImageData(pixelsm, 0, 0);

  setTimeout(magiceraser,50);
};
