//Creates pixel data history array
var pixelDataArray = function(elem) {
  var rowArr, arr = [];
  for(var ri = 0; ri < h; ri++) {
    rowArr = [];
    for(var ci = 0; ci < w; ci++) {
      rowArr.push(elem);
    }
    arr.push(rowArr);
  }
  return arr;
};

//Sets color values
var colorChooser = function() {
  switch(colorChoice) {
    case 'red':
    colorValue=[255,0,0,255]; break;
    case 'orange':
    colorValue=[255,165,0,255]; break;
    case 'yellow':
    colorValue=[255,255,0,255]; break;
    case 'green':
    colorValue=[0,255,0,255]; break;
    case 'blue':
    colorValue=[30,144,255,255]; break;
    case 'purple':
    colorValue=[128,0,128,255]; break;
    case 'black':
    colorValue=[0,0,0,255]; break;
    case 'white':
    colorValue=[255,255,255,255]; break;
  };
};

//Evaluates if controller is detected on each pixel
var isGreen = function(ha,s,l) {
  return (ha >= 75 && ha <= 165 &&
           s >= 25 && s <= 90 &&
           l >= 20 && l <= 95)
};