//record.js: the functionality behind the record button

/*global localStream:false, v:false, localStream:false */

var recordVideo = function(){
  navigator.getUserMedia({video: true},  function(stream){
    localStream = stream;
    //v is the video element set in main.js
    v.src = window.URL.createObjectURL(localStream);
  	if($('video').attr('src')){
  	  $('.arrow').remove();
  	};
  });
  videoRunning = true;
  displayElement = 'video';
};
