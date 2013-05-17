//snapshot.js: the functionality behind the record button

/*global x:false, c:false, v:false, mainVideoWidth:false, mainVideoHeight:false, canvas:false */
var snapShot = function(){
  if(displayElement !== 'canvas'){
    console.log("in if");
    console.log("displayElement: " + displayElement);
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
  } else {
    console.log("In else...");
    console.log("displayElement: " + displayElement);
    ocx.save();
    ocx.translate(w, 0);
    ocx.scale(-1,1);
    ocx.drawImage(v, 0, 0, w, h);
    ocx.restore();
    $('.main-canvas').hide();
    $('.offscreen-canvas').show();
    }  
  displayElement = 'canvas';
};
