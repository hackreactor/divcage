//background.js: Allows paint on snapshots

var createBgPaintArray = function() {
  return pixelDataArray(0);
};

var background = function() {
  lastMode = 'bgimg';
  lastBgArray = bgPaintArray;
  
  x.drawImage(v, 0, 0, w, h);
  x.restore();

  var pixels = x.getImageData(0, 0, w, h),
      pixCount = pixels.data.length / 4;

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
    
    //If green, change pixel data to paint color value        
    if (isGreen(ha,s,l)) {
      bgPaintArray[ri][ci] = colorValue;
    }

    //Makes all non-controller pixels transparent, to show snapshot
    if (bgPaintArray[ri][ci] === 0){
      pixels.data[index + 3] = 0;
    }
    else {
      pixels.data[index] = bgPaintArray[ri][ci][0];
      pixels.data[index + 1] = bgPaintArray[ri][ci][1];
      pixels.data[index + 2] = bgPaintArray[ri][ci][2];
    } 
  }
  
  //Draw Image with modified pixels
  x.putImageData(pixels, 0, 0);  

  // Keep re-rendering unless the current mode is eraser mode
  if(!erasing && painting) {
    setTimeout(background,24/1000);
  }
};