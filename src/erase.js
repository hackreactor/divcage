//track.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false, rgb2hsl: false, x:false,
         v:false, hl:false, maskArray:false */

var createMaskArray = function() {
  var rowArr;
  var arr = [];
  var ri, ci;

  for (ri = 0; ri < mainVideoHeight; ri++) {
    rowArr = [];
    for (ci = 0; ci < mainVideoWidth; ci++) {
      rowArr.push(255);
    }
    arr.push(rowArr);
  }
  return arr;
};

var erase = function() {
  var w = mainVideoWidth,
      h = mainVideoHeight;

  x.drawImage(v, 0, 0, w, h);

  var pixels = x.getImageData(0, 0, w, h);
  var pixCount = pixels.data.length / 4;

  var map = new Array(w);
  var scores = new Array(w);
  var i;
  for(i = 0; i < w; i++){
    map[i] = new Array(h);
    scores[i] = new Array(h);
  }

  var ri, ci;

  for(var i = 0; i < pixCount; i++){
    var index = i*4;
    var r = pixels.data[index],
        g = pixels.data[index+1],
        b = pixels.data[index+2];
    var hsl = rgb2hsl(r, g, b),
        ha = hsl[0],
        s = hsl[1],
        l = hsl[2];
    ri = Math.floor(i / w);
    ci = i % w;
    
    var left = Math.floor(i%w);
    var top = Math.floor(i/w);
        
    if (ha >= 70 && ha <= 180 &&
        s >= 25 && s <= 90 &&
        l >= 20 && l <= 95) {

        maskArray[ri][ci]=0;
        map[left][top] = 1;
    }else{
        map[left][top] = 0;
    }
    pixels.data[i * 4 + 3] = maskArray[ri][ci];
  }

  // Sum the score for each pixel
  var j, i, ci;
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
  var targetx = 0;
  var targety = 0;
  var targetscore = 0;
  var i, j;
  for(i = 10; i < w-10; i++){
    for(j = 10; j < h-10; j++){
      if(scores[i][j] > targetscore){
        targetx = i,
        targety = j;
        targetscore = scores[i][j];
      }
    }
  }

  hl.style.left = '' + targetx + 'px';
  hl.style.top = '' + (($('.button-toolbar').height() * 2) + targety) + 'px';
  x.putImageData(pixels, 0, 0);

  setTimeout(erase,50);
};
