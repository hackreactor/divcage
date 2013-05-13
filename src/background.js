var createBgPaintArray = function() {
  return pixelDataArray(0);
};

var background = function() {

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
        
    if (ha >= 75 && ha <= 165 &&
        s >= 25 && s <= 90 &&
        l >= 20 && l <= 95) {

      switch(colorChoice) {
        case 'red':
        bgPaintArray[ri][ci]=[255,0,0,255]; break;        
        case 'orange':
        bgPaintArray[ri][ci]=[255,165,0,255]; break;        
        case 'yellow':
        bgPaintArray[ri][ci]=[255,255,0,255]; break;   
        case 'green':
        bgPaintArray[ri][ci]=[0,255,0,255]; break; 
        case 'blue':
        bgPaintArray[ri][ci]=[98,138,215,255]; break; 
        case 'purple':
        bgPaintArray[ri][ci]=[128,0,128,255]; break;   
        case 'black':
        bgPaintArray[ri][ci]=[0,0,0,255]; break;  
        case 'white':
        bgPaintArray[ri][ci]=[255,255,255,255]; break;
        default:
        bgPaintArray[ri][ci]=[0,0,0,255]; break;   
      };
    }
    if (bgPaintArray[ri][ci] === 0){
      pixels.data[pi * 4 + 3] = 0;
    } else {
      pixels.data[pi * 4] = bgPaintArray[ri][ci][0];
      pixels.data[pi * 4 + 1] = bgPaintArray[ri][ci][1];
      pixels.data[pi * 4 + 2] = bgPaintArray[ri][ci][2];
    } 
  }

  // scoreSum(scores, map);
  // findClosestHighScore(scores);
  
  x.putImageData(pixels, 0, 0);  
  //highlightPlacer(x, pixels);

  // Keep re-rendering unless the current mode is eraser mode
  if(!erasing && painting) {
    setTimeout(background,24/1000);
  }
};