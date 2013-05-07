// dimensions of source stream
var captureWidth = 640;
var captureHeight = 480;

// dimensions of snapshot
var snapWidth = captureWidth;
var snapHeight = captureHeight;

$('#basic-stream').attr("width",captureWidth+"px");
$('#basic-stream').attr("height",captureHeight+"px");

$('#snapshot').attr("width",captureWidth+"px");
$('#snapshot').attr("height",captureHeight+"px");

// Detect browser compatibility
var hasGetUserMedia = function(){
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if(hasGetUserMedia()){
  console.log('good to go!');
  //specify a url to grab data from
  window.URL = window.URL || window.webkitURL;
  navigator.getUserMedia  = navigator.getUserMedia ||navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  //provide fallbacks
  var fallback = function(e){
    console.log('falling back...')
  }

  //specify what context the stream will come from
  var video = document.querySelector('video');
  var canvas = document.querySelector('canvas');
  canvas.width = captureWidth;
  canvas.height = captureHeight;

  var ctx = canvas.getContext('2d');
  var localMediaStream = null;

  var snapshot = function () {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0, captureWidth, captureHeight);
      // "image/webp" works in Chrome 18. In other browsers, this will fall back to image/png.
      document.querySelector('img').src = canvas.toDataURL('image/webp');
      console.log('getImageData: ',getImageData(document.querySelector('img')))
    }
  }

  navigator.getUserMedia({video: true, audio: true}, function(stream){
      console.log('success!');
      console.log('streams of data: ' , stream);
      video.src = window.URL.createObjectURL(stream);
      video.addEventListener('click', snapshot);
      $('#basic-stream').attr("width");
      localMediaStream = stream;
  });

  var camMotion = CamMotion.Engine({
    canvasBlended: canvas
  });

  camMotion.on('error', function(e) {
    console.log("error", e);
  });

  camMotion.on("streamInit", function(e) {
      console.log("webcam stream initialized", e);
  });

  camMotion.onMotion(CamMotion.Detectors.LeftMotion, function () {
      console.log("Left motion detected");
  });
  camMotion.onMotion(CamMotion.Detectors.RightMotion, function () {
      console.log("Right motion detected");
  });
  camMotion.onMotion(CamMotion.Detectors.DownMotion, function () {
      console.log("Down motion detected");
  });
  camMotion.onMotion(CamMotion.Detectors.UpMotion, function () {
      console.log("Up motion detected");
  });
  camMotion.on("frame", function () {
    var point = camMotion.getMovementPoint(true);
    // draw a circle
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.r, 0, Math.PI*2, true);
    ctx.closePath();
    if (camMotion.getAverageMovement(point.x-point.r/2, point.y-point.r/2, point.r, point.r)>4) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  });
  camMotion.start();

} else {
  alert('please use a better browser for the full experience!');
  fallback();
}









