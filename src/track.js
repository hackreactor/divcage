//track.js: tracking colors
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

    var left = Math.floor(i%w);
    var top = Math.floor(i/w);

    if(g > 140 && r < 140 && b < 140){
      //IT'S GREEN! 
      pixels.data[i * 4 + 3] = 0; //it's green, make pixel invisible
      map[left][top] = 1;     //give it a map value of 1

    }else{
      //NOT GREEN
      map[left][top] = 0;     //give it a map value of 0
    }

  }
  //sum the score for each pixel
  for(var j = 5; j < h-5; j++){
    for(var i = 5; i < w-5; i++){
      var l5 = map[i-5][j],
        l4 = map[i-4][j],
        l3 = map[i-3][j],
        l2 = map[i-2][j],
        l1 = map[i-1][j],
        r1 = map[i+1][j],
        r2 = map[i+2][j],
        r3 = map[i+3][j],
        r4 = map[i+4][j],
        r5 = map[i+5][j],
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
        self = map[i][j];
      //console.log(i,j);
      scores[i][j] = l5+l4+l3+l2+l1+r1+r2+r3+r4+r5+u5+u4+u3+u2+u1+d1+d2+d3+d4+d5+self;
    }
  }
  //Find the pixel closest to the top left that has the highest score. The
  //  pixel with the highest score is where the highlight box will appear.
  var targetx = 0;
  var targety = 0;
  var targetscore = 0;
  for(var i = 5; i < w-5; i++){
    for(var j = 5; j < h-5; j++){
      if(scores[i][j] > targetscore){
        targetx = i,
        targety = j;
        targetscore = scores[i][j];
      }
    }
  }
  hl.style.left = ""+Math.floor(document.width*(targetx/v.width))+"px";
  hl.style.top = ""+Math.floor(document.height*(targety/v.height))+"px";
  x.putImageData(pixels, 0, 0);


  setTimeout(draw,200);
  






};

