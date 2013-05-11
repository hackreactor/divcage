//track.js: tracking colors

/*global mainVideoWidth:false, mainVideoHeight:false, rgb2hsl: false, x:false,
         v:false, hl:false, maskArray:false, paintArray:false */

var createPaintArray = function() {
  var rowArr;
  var arr = [];
  var ri, ci;
  for (ri = 0; ri < h; ri++) {
    rowArr = [];
    for (ci = 0; ci < w; ci++) {
      rowArr.push(false);
    }
    arr.push(rowArr);
  }
  return arr;
};

// Sum the score for each pixel
var scoreSum = function(scores, map){
  var j, i, ci;
  for(j = 10; j < h-10; j++){
    for(i = 10; i < w-10; i++){
      scores[i][j] = map[i][j];
      for(ci = 10; ci > 0; ci--) {
        scores[i][j] += map[i-ci][j] + map[i+ci][j] +
          map[i][j-ci] + map[i][j+ci];
      }
    }
  } 
};

//Find the pixel closest to the top left that has the highest score.
var findClosestHighScore = function(scores){
  targetx = 0;
  targety = 0;
  targetscore = 0;
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
};

var highlightPlacer = function(){
    hl.style.left = '' + targetx + 'px';
    hl.style.top = '' + (($('.button-toolbar').height() * 2) + targety) + 'px';
    x.putImageData(pixels, 0, 0);
};

var paint = function() {
  x.drawImage(v, 0, 0, w, h);

  pixels = x.getImageData(0, 0, w, h);
  pixCount = pixels.data.length / 4;

  var map = new Array(w);
  var scores = new Array(w);
  for(var i = 0; i < w; i++){
    map[i] = new Array(h);
    scores[i] = new Array(h);
  }

  var ri, ci, i;

  for(i = 0; i < pixCount; i++){
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
      
      switch(colorChoice) {

        case 'red':
        paintArray[ri][ci]=[255,0,0,255];
        map[left][top] = 1; break;
        
        case 'orange':
        paintArray[ri][ci]=[255,165,0,255];
        map[left][top] = 1; break;
        
        case 'yellow':
        paintArray[ri][ci]=[255,255,0,255];
        map[left][top] = 1; break;
   
        case 'green':
        paintArray[ri][ci]=[0,255,0,255];
        map[left][top] = 1; break; 

        case 'blue':
        paintArray[ri][ci]=[0,0,255,255];
        map[left][top] = 1; break; 

        case 'purple':
        paintArray[ri][ci]=[128,0,128,255];
        map[left][top] = 1; break;   

        case 'black':
        paintArray[ri][ci]=[0,0,0,255];
        map[left][top] = 1; break;  

        case 'white':
        paintArray[ri][ci]=[255,255,255,255];
        map[left][top] = 1; break;      
      }

    } else {
        map[left][top] = 0;
    }

    if(paintArray[ri][ci]){
      pixels.data[i * 4] = paintArray[ri][ci][0];
      pixels.data[i * 4 + 1] = paintArray[ri][ci][1];
      pixels.data[i * 4 + 2] = paintArray[ri][ci][2];
    }
      
  }

  scoreSum(scores, map);
  
  findClosestHighScore(scores);
  
  highlightPlacer();
  

  if(!erasing) {
    setTimeout(paint,50);
  }
};
