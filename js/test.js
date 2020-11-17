var time = new Date().getTime();
var years, months, weeks, days, hours;
var minutes, seconds;
fetch("./videos.json")
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < Object.keys(data.categories).length; i++) {
      document.querySelector(
        "main"
      ).innerHTML += `<div class="${data.categories[i].title}">
      <h2>${data.categories[i].title}</h2>
      <div class="row"></div>
      </div>`;
      for (var u = 0; u < Object.keys(data.categories[i].videos).length; u++) {
        years = months = weeks = days = hours = minutes = 0;
        seconds = data.videos[data.categories[i].videos[u] - 1].duration;
        var timeCreated =
          time - data.videos[data.categories[i].videos[u] - 1].created;
        if (timeCreated / 3.154e10 >= 1) {
          years = Math.floor(timeCreated / 3.154e10);
        } else if (timeCreated / 2.628e9 >= 1) {
          months = Math.floor(timeCreated / 2.628e9);
        } else if (timeCreated / 6.048e8 >= 1) {
          weeks = Math.floor(timeCreated / 6.048e8);
        } else if (timeCreated / 8.64e7 >= 1) {
          days = Math.floor(timeCreated / 8.64e7);
        } else {
          hours = Math.floor(timeCreated / 3.6e6);
        }
        if (seconds / 60 >= 1) {
          minutes = Math.floor(seconds / 60);
          seconds = seconds - 60 * minutes;
        }
        document.querySelector(
          `.${data.categories[i].title.substr(
            0,
            data.categories[i].title.indexOf(" ")
          )} .row`
        ).innerHTML += `
        <a href="pages/myndband${
          data.videos[data.categories[i].videos[u] - 1].id
        }.html"><div class="myndband${
          data.videos[data.categories[i].videos[u] - 1].id
        } col col-4 col-sm-12 myndband">
          <div class="myndband-poster">
            <img src="${data.videos[data.categories[i].videos[u] - 1].poster}">
            <div class="myndband-poster-time"><p>${
              minutes + ":" + ("0" + seconds).slice(-2)
            }</p></div
            </div>
          <div class="myndband-title"><p>${
            data.videos[data.categories[i].videos[u] - 1].title
          }</p></div>
          <div class="myndband-time">${(() => {
            if (years != 0) {
              if (years == 1) {
                return `Fyrir 1 ári síðan`;
              } else {
                return `Fyrir ${years} árum síðan`;
              }
            } else if (months != 0) {
              if (months == 1) {
                return `Fyrir 1 mánuði síðan`;
              } else {
                return `Fyrir ${months} mánuðum síðan`;
              }
            } else if (weeks != 0) {
              if (weeks == 1) {
                return `Fyrir 1 viku síðan`;
              } else {
                return `Fyrir ${weeks} vikum síðan`;
              }
            } else if (days != 0) {
              if (days == 1) {
                return `Fyrir 1 degi síðan`;
              } else {
                return `Fyrir ${days} dögum síðan`;
              }
            } else {
              if (hours == 1) {
                return `Fyrir 1 klukkutíma síðan`;
              } else {
                return `Fyrir ${hours} klukkustundum síðan`;
              }
            }
          })()}</div>
        </div></a>
        `;
      }
    }
  });

//testing video controls things

var supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo) {
  var videoContainer = document.getElementById("videoContainer");
  var video = document.getElementById("video");
  var videoControls = document.getElementById("video-controls");
  // Hide the default controls
  video.controls = false;
  // Display the user defined video controls
  videoControls.style.display = "block";
  //create variable pointing to each pf the buttons
  var playpause = document.getElementById("playpause");
  var stop = document.getElementById("stop");
  var mute = document.getElementById("mute");
  var volinc = document.getElementById("volinc");
  var voldec = document.getElementById("voldec");
  var progress = document.getElementById("progress");
  var progressBar = document.getElementById("progress-bar");
  var fullscreen = document.getElementById("fs");

  //play,pause
  playpause.addEventListener('click', function(e) {
    if (video.paused || video.ended) video.play();
    else video.pause();
 });
}
