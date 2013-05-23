HTML5 Kids Game...?
=========
Currently Deployed at: http://scribblers.herokuapp.com/

This project utilizes the HTML5 [getUserMedia API] to manipulate the Canvas.

  - Currently the project is scoped to a single player game that will draw finger motion on a white board.
    - Version 0.6
  - There will potentially be a lobbying system that will delegate multi-player games in the next version.
    - Version 0.8
  - The game might get more complex [i.e. follow the leader or draw a specific image]
    - Version 1.0

Developers
-
####Seung Lim - [seung]
####Chad Reed - [chadreed-intl]
####Tyson Daughtery - [gigmania]
####Anthony Singhavong - [bigthyme]
####Philip Rosen - [philipjrosen]

Current Version
-
0.5.1 - Updating master README.md and prepping for soft release
 
Inspiration
-
######getUserMedia API demos:

1. https://github.com/tjerkw/js-cam-motion

2. https://github.com/ReallyGood/js-motion-detection

3. https://github.com/auduno/headtrackr/
    - http://dev.opera.com/articles/view/head-tracking-with-webrtc/

4. http://40win.com/blog/2012/11/14/web-gestures-with-getusermedia-part1/

######Algorithm demos:

1. http://mkweb.bcgsc.ca/color_summarizer/?

2. https://github.com/Huddle/Resemble.js

3. http://en.wikipedia.org/wiki/Feature_detection_(computer_vision)#Feature_detectors

4. https://github.com/mtschirs/js-objectdetect?source=cr

5. https://code.google.com/p/js-aruco/
 

Tech
-----------

This game uses a number of open source projects to work properly:


* [Twitter Bootstrap] - Great UI boilerplate for modern web apps
* [node.js] - Evented I/O for the backend
* [Express] - Fast node.js network app framework [@tjholowaychuk]
* [jQuery] - Dom manipulation
* [Google Web Speech] - Unreleased Speech to text api that is native to modern browsers

License
-

MIT

  [1]: http://daringfireball.net/projects/markdown/
  [bigthyme]: https://github.com/bigthyme/
  [seung]: https://github.com/seung/
  [chadreed-intl]: https://github.com/chadreed-intl/
  [gigmania]: https://github.com/gigmania/
  [philipjrosen]: https://github.com/philipjrosen/
  [node.js]: http://nodejs.org
  [Twitter Bootstrap]: http://twitter.github.com/bootstrap/
  [jQuery]: http://jquery.com
  [Express]: http://expressjs.com/
  [Google Web Speech]: https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
  [getUserMedia API]: http://www.html5rocks.com/en/tutorials/getusermedia/intro/
