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
    colorValue,
    paintArray,
    bgPaintArray,
    mode;

$(document).ready(function(){
  $('.modal').modal({show:true});
  $('.carousel').carousel('pause');
  $('.carousel').on('slid', '', function() {
    if($('.carousel-inner .item:last').hasClass('active')) {
      $('.next').hide();
      $('.back').hide();
      $('.skip').text('START');
    }
  });
});

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
  $('#start-button').on('click', function(){
    //look at record.js for funcitonality
    recordVideo();
    //change text for directions
    $('#textarea').text('Press the allow button up top to get started!').css('color', 'orange').css('border', '4px dotted orange');
  });
  
  $('.skip').on('click', function (){
    $('.modal').modal('hide');
      recordVideo();
    $('<img class="svg arrow" src="./img/arrow.svg" />').appendTo('body')
      .fadeIn('slow', toggleArrow);
  });


  //Erase paint
  $('#eraser-button').on('click', function(){
    if(paintArray === undefined) {
      $('#textarea').text('Please click start to begin painting').css('color', 'red').css('border', '4px dotted red');
    } else {
      painting = false;
      erasing = true;
      eraser();
    }
  });

  //Takes snapshot
  $('#picture-button').on('click', function(){
    mode = 'background';
    snapShot();
    $('#main-canvas').css('background-image', 'url(' + dataURL + ')');
    $('#main-canvas').css('background-size', 'cover');
    if(bgPaintArray === undefined) {
      bgPaintArray = createBgPaintArray();
    }
    painting = true;
    erasing = false;
    background();
  });

  //Allows paint on canvas
  $('#paint-button').on('click', function(){
    if($('video').attr('src')){
      if(!colorChoice){
        colorChoice = 'black';
        colorValue = [0,0,0,255];
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
      if(mode === 'background'){
        background();
      } else {
        paint();
      }
    } else {
      $('#textarea').text('Please click start to begin painting').css('color', 'red').css('border', '4px dotted red');
    }
  });

  //Color choice from speech
  $('#speech-button').on('click',function(){
    $('<img class="svg arrow" src="./img/arrow.svg" />').appendTo('body')
      .fadeIn('slow', toggleArrow);
    if($('video').attr('src')){
      $('canvas').show();
      console.log('recording...');
      toggleStartStop();

      //Custom bind function
      $('#textarea').bind('newWord', function(e){
        console.log(e);
        var string = $(this).text();
        var wordArray = string.split(' ');
        colorChoice = wordArray[wordArray.length-1];
        $('#textarea').text('You are painting with ' + colorChoice).css('color', colorChoice).css('border', '4px dotted ' + colorChoice);
        $('#main-video').css('display', 'none');
        if(paintArray === undefined) {
          paintArray = createPaintArray();
        };
        painting = true;
        erasing = false;
        console.log(mode);
        colorChooser();
        if(mode === 'background'){
          console.log('in background..', colorChoice);
          background();
        } else {
          console.log('in picture..', colorChoice);
          paint();
        }
      });
    } else {
      $('#textarea').text('Please click start to begin painting').css('color', 'red').css('border', '4px dotted red');
    }
  });

  //Color choice from color buttons
  $('li').on('click', function(){
    colorChoice = $(this).attr('class');
    colorChooser();
    $('#textarea').text('You are painting with ' + colorChoice).css('color', colorChoice).css('border', '4px dotted ' + colorChoice);
    console.log(colorChoice);
  });

  //Saves Image
  $('#save-button').on('click', function(){
    console.log('stopping..');
    localStream.stop();
    $('.color-palette').fadeOut(400);
    $('#main-video').css('display', 'none');
    $('#main-canvas').css('visibility', 'visible');
    saveImage();
  });

} else {
  //no modern browser detected...fallback?
  alert('please use a better browser');
}
