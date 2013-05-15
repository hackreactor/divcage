// Implementing Speech to Text
if (!('webkitSpeechRecognition' in window)) {
  alert('Oh no your browser is too old for this!');
} else {
  var recognizing,
      output = '',
      textarea = document.getElementById('textarea');

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;

  recognition.onstart = function(){
    $('.arrow').remove();
    console.log('recording...');
    recognizing = true;
  }

  recognition.onresult = function (event) {
    if (typeof(event.results) == 'undefined') {
      console.log('event.results is undefined');
      recognition.onend = null;
      recognition.stop();
      return;
    }

    console.log('testing event ', event.results);
     for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        output = event.results[i][0].transcript;
        checkOutput(output);
        // textarea.innerHTML = 'You are painting with ' + event.results[i][0].transcript;
        // checkOutput(output);
      } else {
        alert('what happened..?');
      }
    }
  }

  var reset = function() {
    recognizing = false;
    $('#speech-button p').text('Speak').parent().removeClass('orange').addClass('blue-purple');
  }

  var toggleStartStop = function() {
    if (recognizing) {
      console.log('stop recording...');
      // recognition.stop();
      reset();
    } else {
      recognition.start();
      recognizing = true;
      console.log('in the else', recognition);
      $('#speech-button p').text('Stop..').parent().removeClass('blue-purple').addClass('orange');
    }
  }

  var checkOutput = function(output){
    // var output = document.getElementById('textarea').innerHTML;
    if(output.length > 0){
      console.log('checking output...');
      lastWord(output);
    } else {
      alert('Oops, please speak into the microphone.');
    }
  }

  var lastWord = function(string) {
    words = string.split(' ');
    var latestWord = words.pop();
    if(latestWord === 'red' || latestWord === 'blue' || latestWord === 'green' || latestWord === 'orange' || latestWord === 'yellow' || latestWord === 'purple'){
      console.log('the string...', string);
      textarea.innerHTML = 'You are painting with ' + string;
      $('#textarea').trigger('newWord');
    } else {
      console.log('Oops, you said ' + latestWord + ' please say a color instead.');
    }
  };
}