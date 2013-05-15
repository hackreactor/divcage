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
    h = 570,
    w = 760,
    erasing,
    painting,
    colorChoice,
    colorValue,
    paintArray,
    bgPaintArray,
    elementAttr,
    pencilClass,
    currentText,
    wordArray,
    displayElement;
    lastBgArray,
    lastMode = 'video',
    videoRunning = false,
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
    if(!videoRunning) {
      recordVideo();
      $('#textarea').text('Press the allow button up top to start!');
      // change text for directions
      // $('#start-button p').text('Restart');
      $('#start-button p').text('Clear');
    }

    switch(lastMode) {
      case 'video':
        paintArray = pixelDataArray(undefined); break;
      case 'bgimg':
        bgPaintArray = lastBgArray; break;
      default:
        console.log('ignored!');
    }
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
      $('#textarea').text('Please click start to begin painting');
    } else {
      painting = false;
      erasing = true;
      eraser();
    }
  });

  //Takes snapshot
  $('#picture-button').on('click', function(){
    mode = "background";
    snapShot();
  });

  //Allows paint on canvas
  $('#paint-button').on('click', function(){
    if($('video').attr('src')){
      if(!colorChoice){
        colorChoice = 'black';
        colorValue = [0,0,0,255];
        $('#textarea').text('You are painting with ' + colorChoice).removeClass('brown-pencil').addClass(colorChoice + '-pencil');
      } else if(colorChoice === 'black') {
        $('#textarea').text('Would you like to try more colors');
      }
      $('.color-palette').fadeIn(400);
      $('#main-video').css('display', 'none');
      $('#main-canvas').css('display', 'inline-block');
      if(paintArray === undefined) {
        paintArray = createPaintArray();
      };
      painting = true;
      erasing = false;
      if(displayElement === 'canvas'){
        console.log("calling background...");
        background();
      } else {
        paint();
      }
    } else {
      $('#textarea').text('Please click start to begin painting');
    }
  });

  //Color choice from speech
  $('#speech-button').on('click',function(){
    $('<img class="svg arrow" src="./img/arrow.svg" />').appendTo('body')
      .fadeIn('slow', toggleArrow);
    if($('video').attr('src')){
      $('canvas').show();
      $('.color-palette').fadeIn(400);
      console.log('recording...');
      toggleStartStop();

      //Custom bind function
      $('#textarea').bind('newWord', function(e){
        console.log(e);
        currentText = $(this).text();
        wordArray = currentText.split(' ');
        elementAttr = $('#textarea').attr('class').split(' ');
        pencilClass = elementAttr[elementAttr.length-1];
        colorChoice = wordArray[wordArray.length-1];
        $('#textarea').text('You are painting with ' + colorChoice).removeClass(pencilClass).addClass(colorChoice + '-pencil');
        $('.pencil-tip').css('border-bottom', '12px solid ' + colorChoice);
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
      $('#textarea').text('Please click start to begin painting');
    }
  });

  //Color choice from color buttons
  $('li').on('click', function(){
    colorChoice = $(this).attr('class');
    elementAttr = $('#textarea').attr('class').split(' ');
    pencilClass = elementAttr[elementAttr.length-1];
    colorChooser();
    $('#textarea').text('You are painting with ' + colorChoice).removeClass(pencilClass).addClass(colorChoice + '-pencil');
    $('.pencil-tip').css('border-bottom', '12px solid ' + colorChoice);
  });

  //Saves Image
  $('#save-button').on('click', function(){
    console.log('stopping..');
    //localStream.stop();
    $('.color-palette').fadeOut(400);
    if(mode !== 'background'){
      $('#main-video').css('display', 'none');
      $('#main-canvas').css('visibility', 'visible');
    }
    saveImage();
  });

} else {
  //no modern browser detected...fallback?
  alert('please use a better browser');
}
