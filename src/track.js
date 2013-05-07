//track.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false, x:false,
         v:false, hl:false */

var draw = function() {
  var w = mainVideoWidth,
      h = mainVideoHeight;

  x.drawImage(v, 0, 0, w, h);

  var pixels = x.getImageData(0, 0, w, h);
  var pixCount = pixels.data.length / 4;

  var map = new Array(w);
  var scores = new Array(w);
  for(var i = 0; i < w; i++){
    map[i] = new Array(h);
    scores[i] = new Array(h);
  }

  for(var i = 0; i < pixCount; i++){
    var index = i*4;
    var r = pixels.data[index],
        g = pixels.data[index+1],
        b = pixels.data[index+2];
    var hsl = rgb2hsl(r, g, b),
        ha = hsl[0],
        s = hsl[1],
        l = hsl[2];
    
    var left = Math.floor(i%w);
    var top = Math.floor(i/w);
        
    if (ha >= 70 && ha <= 180 &&
        s >= 25 && s <= 90 &&
        l >= 20 && l <= 95) {
            
            pixels.data[i * 4 + 3] = 0;
        map[left][top] = 1;
    }else{
        map[left][top] = 0;
    }
  }
  //sum the score for each pixel
  for(var j = 10; j < h-10; j++){
    for(var i = 10; i < w-10; i++){
      var l10 = map[i-10][j],
        l9 = map[i-9][j],
        l8 = map[i-8][j],
        l7 = map[i-7][j],
        l6 = map[i-6][j],
        l5 = map[i-5][j],
        l4 = map[i-4][j],
        l3 = map[i-3][j],
        l2 = map[i-2][j],
        l1 = map[i-1][j],
        r1 = map[i+1][j],
        r2 = map[i+2][j],
        r3 = map[i+3][j],
        r4 = map[i+4][j],
        r5 = map[i+5][j],
        r6 = map[i+6][j],
        r7 = map[i+7][j],
        r8 = map[i+8][j],
        r9 = map[i+9][j],
        r10 = map[i+10][j],
        u10 = map[i][j-10],
        u9 = map[i][j-9],
        u8 = map[i][j-8],
        u7 = map[i][j-7],
        u6 = map[i][j-6],
        u5 = map[i][j-5],
        u4 = map[i][j-4],
        u3 = map[i][j-3],
        u2 = map[i][j-2],
        u1 = map[i][j-1],
        d1 = map[i][j+1],
        d2 = map[i][j+1],
        d3 = map[i][j+1],
        d4 = map[i][j+1],
        d5 = map[i][j+1],
        d6 = map[i][j+1],
        d7 = map[i][j+1],
        d8 = map[i][j+1],
        d9 = map[i][j+1],
        d10 = map[i][j+1],
        self = map[i][j];
      //console.log(i,j);
      scores[i][j] = l10+l9+l8+l7+l6+l5+l4+l3+l2+l1+r1+r2+r3+r4+r5+r6+r7+r8+r9+r10+u10+u9+u8+u7+u6+u5+u4+u3+u2+u1+d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+self;
    }
  }
  //Find the pixel closest to the top left that has the highest score. The
  //  pixel with the highest score is where the highlight box will appear.
  var targetx = 0;
  var targety = 0;
  var targetscore = 0;
  for(var i = 10; i < w-10; i++){
    for(var j = 10; j < h-10; j++){
      if(scores[i][j] > targetscore){
        targetx = i,
        targety = j;
        targetscore = scores[i][j];
      }
    }
  }
  hl.style.left = ''+Math.floor(document.width*(targetx/v.width/2))+'px';
  hl.style.top = ''+Math.floor(document.height*(targety/v.height/2))+'px';
  x.putImageData(pixels, 0, 0);


  setTimeout(draw,100);
};

