//track.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false, rgb2hsl: false, x:false,
         v:false, hl:false, maskArray:false, paintArray:false */

var createPaintArray = function() {
  return pixelDataArray(false);
};

var paint = function() {

  x.drawImage(v, 0, 0, w, h);
  x.restore();

  var pixels = x.getImageData(0, 0, w, h),
      pixCount = pixels.data.length / 4;

  var emptyArray = pixelDataArray(undefined);
  // var map = emptyArray, scores = emptyArray;

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

      switch(colorChoice) {
        case 'red':
        paintArray[ri][ci]=[255,0,0,255]; break;        
        case 'orange':
        paintArray[ri][ci]=[255,165,0,255]; break;        
        case 'yellow':
        paintArray[ri][ci]=[255,255,0,255]; break;   
        case 'green':
        paintArray[ri][ci]=[0,255,0,255]; break; 
        case 'blue':
        paintArray[ri][ci]=[98,138,215,255]; break; 
        case 'purple':
        paintArray[ri][ci]=[128,0,128,255]; break;   
        case 'black':
        paintArray[ri][ci]=[0,0,0,255]; break;  
        case 'white':
        paintArray[ri][ci]=[255,255,255,255]; break;      
      };
      // map[ri][ci] = 1; 

    } else {
      // map[ri][ci] = 0;
    }

    if(paintArray[ri][ci]){

      pixels.data[pi * 4] = paintArray[ri][ci][0];
      pixels.data[pi * 4 + 1] = paintArray[ri][ci][1];
      pixels.data[pi * 4 + 2] = paintArray[ri][ci][2];
    }
  }

  // scoreSum(scores, map);
  // findClosestHighScore(scores);
  
  x.putImageData(pixels, 0, 0);  
  //highlightPlacer(x, pixels);

  // Keep re-rendering unless the current mode is eraser mode
  if(!erasing && painting) {
    setTimeout(paint,50);
  }
};
