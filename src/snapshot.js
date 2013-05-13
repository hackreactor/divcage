//snapshot.js: the functionality behind the record button

/*global x:false, c:false, v:false, mainVideoWidth:false, mainVideoHeight:false, canvas:false */
var snapShot = function(){
  //if video has a src
  if($('video').attr('src')){
    //x is the context that specifies the main canvas element (set in main.js)
    x.drawImage(v, 0, 0, w, h);
    paint();
  } else {
    alert('please start the video first!');
  }
};
