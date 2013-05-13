// Main.js: Implementation of getUserMedia API

/*global recordVideo:false, snapShot:false, draw:false, maskArray:false, createMaskArray:false, paint: false, paintArray:false, createPaintArray:false, erase:false  */

//Select html element id's
var v = document.querySelector('#main-video'),
    c = document.querySelector('#main-canvas'),
    image = document.querySelector('#main-image'),
    //canvas x cord size
    x = c.getContext('2d'),
    hl = document.querySelector('#highlight'),
    localStream,

    //dimensions
    h = 480,
    w = 640,

    erasing,
    painting,
    colorChoice,
    paintArray,
    bgPaintArray;

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

    // Sum the score for each pixel
var scoreSum = function(scores, map) {
  var neighborsCount = 10;
  for(var ri = neighborsCount; ri < (h - neighborsCount); ri++){
    for(var ci = neighborsCount; ci < (w - neighborsCount); ci++){
      scores[ri][ci] = map[ri][ci];
      // scores[ci][ri] = map[ci][ri];
      for(var pi = neighborsCount - 1; pi > 0; pi--) {
        scores[ri][ci] += map[ri - pi][ci] + map[ri + pi][ci];
        scores[ri][ci] += map[ri][ci - pi] + map[ri][ci + pi];
        // scores[ci][ri] += map[ci - pi][ri] + map[ci + pi][ri];
        // scores[ci][ri] += map[ci][ri - pi] + map[ci][ri + pi];
      }
    }
  }
};

var findClosestHighScore = function(scores) {
  //Find the pixel closest to the top left that has the highest score. The
  //  pixel with the highest score is where the highlight box will appear.
  var neighborsCount = 10;
  targetx = 0, targety = 0, targetscore = 0;
  // Are these global intentionally?

  for(var ri = 10; ri < (h - 10); ri++){
    for(var ci = 10; ci < (w - 10); ci++){
      if(scores[ri][ci] > targetscore){
        targetx = ri;
        targety = ci;
        targetscore = scores[ri][ci];
      }
    }
  }
}

var highlightPlacer = function(x, pixels) {
  hl.style.left = '' + targetx + 'px';
  hl.style.top = '' + (($('.button-toolbar').height() * 2) + targety) + 'px';
  x.putImageData(pixels, 0, 0);
}

//Set dimensions for elmements
$('#main-video').attr('width', w +'px').attr('height', h + 'px');

$('#main-canvas').attr('width', w +'px').attr('height', h + 'px');

$('#main-image').attr('width', w +'px').attr('height', h + 'px');

//Detect browser compatibility
var hasGetUserMedia = function(){
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
};

//If the user does have one of the follow navigators
if(hasGetUserMedia()){
  //Set window url to the user's specified browser
  window.URL = window.URL || window.webkitURL;
  navigator.getUserMedia  = navigator.getUserMedia ||navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  //List of all button functionalities
  $('#startbutton').on('click', function(){
    //look at record.js for funcitonality
    recordVideo();
  });
  
    //change text for directions
    $('#textarea').text('Press the allow button up top to get started!').css('color', 'orange').css('border', '4px dotted orange');
  });

  $('#eraserbutton').on('click', function(){
    if(paintArray === undefined) {
      alert('Nothing to erase!');
    } else {
      painting = false;
      erasing = true;
      eraser();
    }
  });

  $('#background-button').on('click', function(){
    console.log('bg')
    $('#main-canvas').css('visibility', 'visible');
    $('#main-canvas').css('display', 'inline-block');
    $('#main-video').css('display', 'none');
    $('#main-canvas').css('background-image', 'url("../img/hedgehog.png")');
    $('#main-canvas').css('background-size', 'cover');
    if(bgPaintArray === undefined) {
      bgPaintArray = createBgPaintArray();
    }
    painting = true;
    erasing = false;
    background();
  });

  $('#paintbutton').on('click', function(){
    if($('video').attr('src')){
      if(!colorChoice){
        colorChoice = 'black';
        $('#textarea').text('You are painting with ' + colorChoice).css('color', colorChoice).css('border', '4px dotted ' + colorChoice);
      } else if(colorChoice === 'black') {
        $('#textarea').text('Would you like to try more colors').css('color', 'pink').css('border', '4px dotted pink');
      }
      $('.color-palette').fadeIn(400);
      $('#main-video').css('display', 'none');
      $('#main-canvas').css('display', 'inline-block');
      if(paintArray === undefined) {
        paintArray = createPaintArray();
      };
      painting = true;
      erasing = false;
      paint();
    } else {
      $('#textarea').text('Please click start to begin painting').css('color', 'red').css('border', '4px dotted red');
    }
  });

  $('#speechbutton').on('click',function(){
    $('canvas').show();
    console.log('recording...');
    toggleStartStop();

    //TODO: Add helper function
    setTimeout(function(){
      textArray = $('#textarea').text().split(' ');
      colorChoice = textArray[textArray.length - 1];
      console.log('your color: ', colorChoice);
      $('#textarea').css('color', colorChoice).css('border', '4px dotted ' + colorChoice);
    }, 1000);

    $('#main-video').css('display', 'none');
    $('#main-canvas').css('visibility', 'visible');
    if(paintArray === undefined) {
      paintArray = createPaintArray();
    };
    painting = true;
    erasing = false;
    paint();
  });

  $('li').on('click', function(){
    colorChoice = $(this).attr('class');
    $('#textarea').text('You are painting with ' + colorChoice).css('color', colorChoice).css('border', '4px dotted ' + colorChoice);
    console.log(colorChoice);
  });

  //Stop recording (for dev purposes)

  $('#savebutton').on('click', function(){
    console.log('stopping..');
    localStream.stop();
    $('.color-palette').fadeOut(400);
    $('#main-video').css('display', 'none');
    $('#main-canvas').css('visibility', 'visible');
    saveImage();
    //add save image modal here
  });
} else {
  //no modern browser detected...fallback?
  alert('please use a better browser');
}

// OLD BUTTONS

// $('#snapshot').on('click', function(){
//   //look at snapshot.js for functionality
//   localStream.stop();
//   $('#main-video').css('display', 'none');
//   $('#main-canvas').show();
//   snapShot();
// });

// $('#trackbutton').on('click', function(){
//   //look at track.js for functionality
//   $('#main-video').css('display', 'none');
//   $('#main-canvas').css('display', 'inline-block');
//   draw();
// });

// // REVEAL
// $('#erasebutton').on('click', function(){
//   $('#main-video').css('display', 'none');
//   $('#main-canvas').css('visibility', 'visible');
//   maskArray = createMaskArray();
//   erase();
// });
