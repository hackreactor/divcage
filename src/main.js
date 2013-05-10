// Main.js: Implementation of getUserMedia API

/*global recordVideo:false, snapShot:false, draw:false, maskArray:false, createMaskArray:false, paint: false, paintArray:false, createPaintArray:false, erase:false  */

//Select html element id's
var v = document.querySelector('#main-video'),
    c = document .querySelector('#main-canvas'),
    //canvas x cord size
    x = c.getContext('2d'),
    hl = document.querySelector('#highlight'),
    localStream,
    //dimensions
    mainVideoHeight = 480,
    mainVideoWidth = 640;


//Set dimensions for elmements
$('#main-video').attr('width', mainVideoWidth +'px').attr('height', mainVideoHeight + 'px');

$('#main-canvas').attr('width', mainVideoWidth +'px').attr('height', mainVideoHeight + 'px');

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

  $('#snapshot').on('click', function(){
    //look at snapshot.js for functionality
    snapShot();
  });

  $('#trackbutton').on('click', function(){
    //look at track.js for functionality
    $('#main-video').css('display', 'none');
    $('#main-canvas').css('visibility', 'visible');
    draw();
  });

  $('#erasebutton').on('click', function(){
    console.log(location);
    // location.reload();
    //look at track.js for functionality
    $('#main-video').css('display', 'none');
    $('#main-canvas').css('visibility', 'visible');
    maskArray = createMaskArray();
    erase();
  });

  $('#paintbutton').on('click', function(){
    // location.reload();
    console.log(location);
    //look at track.js for functionality

    $('#main-canvas').css('background-image', 'url("../lib/orange.jpeg")');
    $('#main-video').css('display', 'none');
    $('#main-canvas').css('visibility', 'visible');
    paintArray = createPaintArray();
    paint();
  });

} else {
  //no modern browser detected...fallback?
  alert('please use a better browser');
}

//stop recording (for dev purposes)
$('#stopbutton').on('click', function(){
  console.log('stopping..');
  localStream.stop();
});