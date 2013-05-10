//track.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false, rgb2hsl: false, x:false,
         v:false, hl:false */
var w = mainVideoWidth, h = mainVideoHeight;

var pixels, pixCount;

var draw = function() {

  x.save();                       ////////////////////////////////
  x.translate(mainVideoWidth, 0); ////////////////////////////////
  x.scale(-1,1);                  ////////////////////////////////
  x.drawImage(v, 0, 0, w, h);
  x.restore();                    ////////////////////////////////

  pixels = x.getImageData(0, 0, w, h);
  pixCount = pixels.data.length / 4;

  var map = new Array(w);
  var scores = new Array(w);
  var i;
  for(i = 0; i < w; i++){
    map[i] = new Array(h);
    scores[i] = new Array(h);
  }

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
    
    var left = pi%w;
    var top = Math.floor(pi/w);
        
    if (ha >= 70 && ha <= 180 &&
        s >= 25 && s <= 90 &&
        l >= 20 && l <= 95) {
            
        pixels.data[i * 4 + 3] = 0;
        map[left][top] = 1;
    } else {
        map[left][top] = 0;
    }
  }

  //sum the score for each pixel
  var j, i, ci;
  for(j = 10; j < h-10; j++){
    for(i = 10; i < w-10; i++){
      scores[i][j] = map[i][j];
      for(ci = 10; ci > 0; ci--) {
        scores[i][j] += map[i-ci][j] + map[i+ci][j] +
          map[i][j-ci] + map[i][j+ci];
      }
    }
  };

  //Find the pixel closest to the top left that has the highest score. The
  //  pixel with the highest score is where the highlight box will appear.
  var targetx = 0,
      targety = 0,
      targetscore = 0,
      ci, ri;
  for(ci = 10; ci < w - 10; ci++){
    for(ri = 10; ri < h - 10; ri++){
      if(scores[ci][ri] > targetscore){
        targetx = ci,
        targety = ri;
        targetscore = scores[ci][ri];
      }
    }
  }
  // hl.style.left = '' + (v.width - targetx) + 'px'; ////////////////////////////////
  h1.style.left = '' + targetx + 'px';  ////////////////////////////////
  hl.style.top = '' + (($('.button-toolbar').height() * 2) + targety) + 'px';
  x.putImageData(pixels, 0, 0);

  setTimeout(draw,50);          ////////////////////////////////
  //requestAnimationFrame(draw);     ////////////////////////////////
};

