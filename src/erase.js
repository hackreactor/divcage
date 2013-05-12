//track.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false, rgb2hsl: false, x:false,
         v:false, hl:false, maskArray:false */

var createMaskArray = function() {
  return pixelDataArray(255);
};

var erase = function() {

  // x.drawImage(v, 0, 0, w, h);
  x.save();
  x.translate(w, 0);
  x.scale(-1,1);
  x.drawImage(v, 0, 0, w, h);
  x.restore();

  var pixels = x.getImageData(0, 0, w, h),
      pixCount = pixels.data.length / 4;

  var emptyArray = pixelDataArray(undefined);
  var map = emptyArray, scores = emptyArray;

  var index, r, g, b, hsl, ha, s, l;

  for(var pi = 0; pi < pixCount; pi++){
    index = pi*4;
    r = pixels.data[index];
    g = pixels.data[index+1];
    b = pixels.data[index+2];
    hsl = rgb2hsl(r, g, b);
    ha = hsl[0];
    s = hsl[1];
    l = hsl[2];

    var ri = Math.floor(pi/w),
        ci = pi % w;
    
    if (ha >= 70 && ha <= 180 &&
        s >= 25 && s <= 90 &&
        l >= 20 && l <= 95) {

        maskArray[ri][ci]=0;
        map[ri][ci] = 1;
    } else {
        map[ri][ci] = 0;
    }
    pixels.data[pi * 4 + 3] = maskArray[ri][ci];
  }

  scoreSum(scores, map);
  findClosestHighScore(scores);
  highlightPlacer(x, pixels);

  // Keep re-rendering until the current mode changes
  // while() {
    setTimeout(erase,50);
  // }
};

