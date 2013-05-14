
var saveImage = function(){
  $('.color-palette').fadeOut(400);
  //if it's a pure video stream, hide it and render the current frame to the canvas
  if(!painting && !erasing){  
    $('.main-video').hide();
    x.save();
    x.translate(w, 0);
    x.scale(-1,1);
    x.drawImage(v, 0, 0, w, h);
    x.restore();
    $('.main-canvas').show();
  }
  //otherwise it will already be a canvas 
  dataURL = c.toDataURL();
  image.src = dataURL;
  $('.main-canvas').hide();
  $('.main-image').show();
  $('#save-button a').attr("href",dataURL);
};

