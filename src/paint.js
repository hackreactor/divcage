//paint.js: Paint colors on canvas

/*global mainVideoWidth:false, mainVideoHeight:false, rgb2hsl: false, x:false,
         v:false, hl:false, maskArray:false, paintArray:false */

var createPaintArray = function() {
  return pixelDataArray(false);
};

var paint = function() {
  flipCanvas();
  displayElement = 'canvas';
  lastMode = 'video';
  
  var pixels = x.getImageData(0, 0, w, h),
      pixCount = pixels.data.length / 4;

  var emptyArray = pixelDataArray(undefined);

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
    
    //If green change, pixel data to paint color value    
    if (isGreen(ha,s,l)){
      paintArray[ri][ci] = colorValue;
    } 

    //If pixel has history, keep history
    if(paintArray[ri][ci]){
      pixels.data[index] = paintArray[ri][ci][0];
      pixels.data[index + 1] = paintArray[ri][ci][1];
      pixels.data[index + 2] = paintArray[ri][ci][2];
    }
  }
  
  //Draw Image with modified pixels
  x.putImageData(pixels, 0, 0);  
 
  // Keep re-rendering unless the current mode is eraser mode
  if(!erasing && painting) {
    setTimeout(paint,24/1000);
  }
};
