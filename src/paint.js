//track.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false, rgb2hsl: false, x:false,
         v:false, hl:false, maskArray:false, paintArray:false */

var createPaintArray = function() {
  return pixelDataArray(false);
};

// var paint = function() {
//   // x.drawImage(v, 0, 0, w, h);
//   x.save();
//   x.translate(w, 0);
//   x.scale(-1,1);

//   var rowArr;
//   var arr = [];
//   var ri, ci;
//   for (ri = 0; ri < h; ri++) {
//     rowArr = [];
//     for (ci = 0; ci < w; ci++) {
//       rowArr.push(false);
//     }
//     arr.push(rowArr);
//   }
//   return arr;
// };

// Sum the score for each pixel
// var scoreSum = function(scores, map){
//   var j, i, ci;
//   for(j = 10; j < h-10; j++){
//     for(i = 10; i < w-10; i++){
//       scores[i][j] = map[i][j];
//       for(ci = 10; ci > 0; ci--) {
//         scores[i][j] += map[i-ci][j] + map[i+ci][j] +
//           map[i][j-ci] + map[i][j+ci];
//       }
//     }
//   } 
// };

//Find the pixel closest to the top left that has the highest score.
// var findClosestHighScore = function(scores){
//   targetx = 0;
//   targety = 0;
//   targetscore = 0;
//   var i, j;
//   for(i = 10; i < w-10; i++){
//     for(j = 10; j < h-10; j++){
//       if(scores[i][j] > targetscore){
//         targetx = i,
//         targety = j;
//         targetscore = scores[i][j];
//       }
//     }
//   }
// };

// var highlightPlacer = function(){
//     hl.style.left = '' + targetx + 'px';
//     hl.style.top = '' + (($('.button-toolbar').height() * 2) + targety) + 'px';
//     x.putImageData(pixels, 0, 0);
// };

var paint = function() {

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
        paintArray[ri][ci]=[0,0,255,255]; break; 
        case 'purple':
        paintArray[ri][ci]=[128,0,128,255]; break;   
        case 'black':
        paintArray[ri][ci]=[0,0,0,255]; break;  
        case 'white':
        paintArray[ri][ci]=[255,255,255,255]; break;      
      };
      map[ri][ci] = 1; 

    } else {
      map[ri][ci] = 0;
    }

    if(paintArray[ri][ci]){

      pixels.data[pi * 4] = paintArray[ri][ci][0];
      pixels.data[pi * 4 + 1] = paintArray[ri][ci][1];
      pixels.data[pi * 4 + 2] = paintArray[ri][ci][2];
    }
  }

  scoreSum(scores, map);
  findClosestHighScore(scores);
  highlightPlacer(x, pixels);

  // Keep re-rendering unless the current mode is eraser mode
  if(!erasing) {
    setTimeout(paint,50);
  }
};
