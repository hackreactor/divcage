//eraser.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false */

var eraser = function() {
 // var w = mainVideoWidth,
 //     h = mainVideoHeight;

  x.drawImage(v, 0, 0, w, h);

  var pixels = x.getImageData(0, 0, w, h),
      pixCount = pixels.data.length / 4;

  var emptyArray = pixelDataArray(undefined);
  var map = emptyArray, scores = emptyArray;
  // var map = new Array(w);
  // var scores = new Array(w);
  // var i;
  // for(i = 0; i < w; i++){
  //   map[i] = new Array(h);
  //   scores[i] = new Array(h);
  // }

  var ri, ci, pi;

  for(i = 0; i < pixCount; i++){
    var index = i*4;
    var r = pixels.data[index],
        g = pixels.data[index+1],
        b = pixels.data[index+2];
    var hsl = rgb2hsl(r, g, b),
        ha = hsl[0],
        s = hsl[1],
        l = hsl[2];
    // ri = Math.floor(i / w);
    // ci = i % w;
    // change: left -> ci, top -> ri
    
    var ci = i % w,
        ri = Math.floor(i/w);
        
    if (ha >= 70 && ha <= 180 &&
        s >= 25 && s <= 90 &&
        l >= 20 && l <= 95) {

      // Remove color data from the cells that are touched 
      paintArray[ri][ci] = false;
      map[ci][ri] = 1;

    } else {
      map[ci][ri] = 0;
    }

    // If color data exist, paint the pixel with corresponding color 
    if(paintArray[ri][ci]){
      pixels.data[i * 4] = paintArray[ri][ci][0];
      pixels.data[i * 4 + 1] = paintArray[ri][ci][1];
      pixels.data[i * 4 + 2] = paintArray[ri][ci][2];
    }
  }

  // Sum the score for each pixel
  var j, i, ci, neighborsCount = 10;
  // chad: plz change 10 -> neighborsCount
  for(j = 10; j < h-10; j++){
    for(i = 10; i < w-10; i++){
      scores[i][j] = map[i][j];
      for(ci = 10; ci > 0; ci--) {
        scores[i][j] += map[i-ci][j] + map[i+ci][j] + map[i][j-ci] + map[i][j+ci];
      }
    }
  }

  //Find the pixel closest to the top left that has the highest score. The
  //  pixel with the highest score is where the highlight box will appear.
  var targetx = 0, targety = 0, targetscore = 0;
  var i, j;
  for(i = 10; i < w - 10; i++){
    for(j = 10; j < h - 10; j++){
      if(scores[i][j] > targetscore){
        targetx = i;
        targety = j;
        targetscore = scores[i][j];
      }
    }
  }
  // Same fcn block repeated in paint.js, refactor???

  hl.style.left = '' + targetx + 'px';
  hl.style.top = '' + (($('.button-toolbar').height() * 2) + targety) + 'px';
  x.putImageData(pixels, 0, 0);

  //put conditional to below: when does eraser mode stop?
  //while() {
    setTimeout(eraser,50);
  //}
};