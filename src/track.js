//track.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false, rgb2hsl: false, x:false,
         v:false, hl:false */

var draw = function() {

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

  var pi, index, r, g, b, hsl, ha, s, l;

  for(pi = 0; pi < pixCount; pi++){
    index = pi*4;
    r = pixels.data[index];
    g = pixels.data[index+1];
    b = pixels.data[index+2];
    hsl = rgb2hsl(r, g, b);
    ha = hsl[0];
    s = hsl[1];
    l = hsl[2];
    
    var top = Math.floor(pi/w),
        left = pi % w;
        
    if (ha >= 70 && ha <= 180 &&
        s >= 25 && s <= 90 &&
        l >= 20 && l <= 95) {
        
        // Change the opacity to 0
        pixels.data[i * 4 + 3] = 0;
        map[left][top] = 1;
    } else {
        map[left][top] = 0;
    }
  }

  // Sum the score for each pixel
  var j, i, ci, neighborsCount = 10;
  // chad: plz change 10 -> neighborsCount
  var j, i, ci;
  for(j = 10; j < h - 10; j++){
    for(i = 10; i < w - 10; i++){
      scores[i][j] = map[i][j];
      for(ci = 10; ci > 0; ci--) {
        scores[i][j] += map[i - ci][j] + map[i + ci][j] 
                      + map[i][j-ci] + map[i][j+ci];
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

  hl.style.left = '' + targetx + 'px';
  hl.style.top = '' + (($('.button-toolbar').height() * 2) + targety) + 'px';
  x.putImageData(pixels, 0, 0);

  setTimeout(draw,24/1000);
};
