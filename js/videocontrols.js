var supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
}

var videoContainer = document.getElementById('videoContainer');
var video = document.getElementById('video');
var videoControls = document.getElementById('video-controls');
// Hide the default controls
video.controls = false;

// Display the user defined video controls
videoControls.style.display = 'block';

var playpause = document.getElementById('playpause');
var stop = document.getElementById('stop');
var mute = document.getElementById('mute');
var volinc = document.getElementById('volinc');
var voldec = document.getElementById('voldec');
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');
var fullscreen = document.getElementById('fs');
