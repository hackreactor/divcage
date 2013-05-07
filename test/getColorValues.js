// returns rows x cols pixel values ranging from 0 ~ 1
var getPixelValues = function(pixelValues, rows, cols) {
  var normalized = [];
  var pixeldata, rowdata;
  var pnum = 0;

  for(var ri = 0; ri < rows; ri++) {
    rowdata = [];
    for (var ci = 0; ci < cols; ci++) {
      pixeldata = [];
      for (var pi = 0; pi < 4; pi++) {
        pixeldata.push(pixelValues.data[pnum]/255);
        pnum++;
      }
      rowdata.push(pixeldata);
    }
    normalized.push(rowdata);
  }
  console.log('normalized array: ',normalized);
  return normalized;
};

// displays the pixel values 
var displayPixelData = function(data, rows, cols) {
  var resultStr = '[';

  for(var ri = 0; ri < rows; ri++) {
    resultStr += '[';
    for(var ci = 0; ci < cols; ci++) {
      //resultStr += data[ri][ci] + ', ';
      resultStr += '[';
      for(var color = 0; color < 4; color++) {
        var rounded = Math.round(data[ri][ci][color] * 1000)/1000;
        resultStr += rounded + ', ';
      }
      resultStr += ']';
    }
    resultStr += ']\n';
  }
  resultStr += ']';

  console.log(resultStr);
  return resultStr;
};

// var selectedColorData(normalized, rows, cols) {
var displayColorData = function(data, color, rows, cols) {
  var resultStr = '[';

  for(var ri = 0; ri < rows; ri++) {
    resultStr += '[';
    for(var ci = 0; ci < cols; ci++) {
      //resultStr += data[ri][ci] + ', ';
      // resultStr += '[';
      // for(var color = 0; color < 4; color++) {
        var rounded = Math.round(data[ri][ci][color] * 1000)/1000;
        resultStr += rounded + ', ';
      // }
      // resultStr += ']';
    }
    resultStr += ']\n';
  }
  resultStr += ']';

  console.log(resultStr);
  return resultStr;
};

// var selectedColorData(normalized, rows, cols) {
var makeColorArray = function(data, color, rows, cols) {
  var result = [];

  for(var ri = 0; ri < rows; ri++) {
    resultStr += '[';
    for(var ci = 0; ci < cols; ci++) {
      //resultStr += data[ri][ci] + ', ';
      // resultStr += '[';
      // for(var color = 0; color < 4; color++) {
        var rounded = Math.round(data[ri][ci][color] * 1000)/1000;
        resultStr += rounded + ', ';
      // }
      // resultStr += ']';
    }
    resultStr += ']\n';
  }
  resultStr += ']';

  console.log(resultStr);
  return resultStr;
};


