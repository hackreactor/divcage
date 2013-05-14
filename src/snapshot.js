//snapshot.js: the functionality behind the record button

/*global x:false, c:false, v:false, mainVideoWidth:false, mainVideoHeight:false, canvas:false */
var snapShot = function(){
	$('.main-video').hide();
  x.save();
  x.translate(w, 0);
  x.scale(-1,1);
  x.drawImage(v, 0, 0, w, h);
  x.restore();
  $('.main-canvas').show();
  dataURL = c.toDataURL();
  image.src = dataURL;
};
