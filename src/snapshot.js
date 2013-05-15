//snapshot.js: the functionality behind the record button

/*global x:false, c:false, v:false, mainVideoWidth:false, mainVideoHeight:false, canvas:false */
var snapShot = function(){
  $('.color-palette').fadeOut(400);
	$('.main-video').hide();
  flipCanvas();
  $('.main-canvas').show();
  dataURL = c.toDataURL();
  $('#main-canvas').css('background-image', 'url(' + dataURL + ')');
  $('#main-canvas').css('background-size', 'cover');
  if(bgPaintArray === undefined) {
    bgPaintArray = createBgPaintArray();
  }
};
