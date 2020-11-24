var time = new Date().getTime();
var years, months, weeks, days, hours;
var minutes, seconds;
var url_str = document.URL;
let url = new URL(url_str);
let search_params = url.searchParams; 
let id = search_params.get('id')-1;

fetch("../videos.json")
  .then((response) => response.json())
  .then((data) => {
	  
	  document.querySelector("header").innerHTML += `<div class="row col col-12 title">
      <h2>${data.videos[id].title}</h2>
      <div class="row"></div>
      </div>`;
	  
	  document.querySelector(".videoContainer").innerHTML += `
	  
            <video
              class="video"
              controls
              preload="metadata"
              poster=".${data.videos[id].poster}"
            >
              <source src=".${data.videos[id].video}" type="video/mp4" />
              <!-- Flash fallback -->
              <object
                type="application/x-shockwave-flash"
                data="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4"
                width="1024"
                height="576"
              >
                <param
                  name="movie"
                  value="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4"
                />
                <param name="allowfullscreen" value="true" />
                <param name="wmode" value="transparent" />
                <param
                  name="flashvars"
                  value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4"
                />
                <img
                  alt="Big bunny Video"
                  src="/videos/bunny.png"
                  width="1024"
                  height="428"
                  title="No video playback possible, please download the video from the link below"
                />
              </object>
              <!-- Offer download -->
              <a href="video/tears-of-steel-battle-clip-medium.mp4"
                >Download MP4</a
              >
            </video>
          
	  <div class="row col-6 col-12 controls">
      <div>
        <button class="back" type="button"></button>
        <button class="playpause" type="button"></button>
        <button class="mute" type="button"></button>
        <button class="fs" type="button"></button>
        <button class="next" type="button"></button>
      </div>
      </div>
	  <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio nisi, blandit quis turpis nec, ultrices placerat ante. Suspendisse viverra enim id tempus interdum.</p>
	  <p class="description">Maecenas cursus nec leo ac auctor</p>
	  
	  
	  `
	  
	  for (var i = 0; i < Object.keys(data.videos[id].related).length; i++) {
		years = months = weeks = days = hours = minutes = 0;
        seconds = data.videos[data.videos[id].related[i]-1].duration;
        var timeCreated = time - data.videos[data.videos[id].related[i]-1].created;
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
	  document.querySelector(".related2").innerHTML += `
	  
	  <a href="pages/video.html?id=${
          data.videos[id].related[i]
        }"><div class="myndband${
		data.videos[data.videos[id].related[i]-1].id
        } col col-4 col-sm-12 myndband">
          <div class="myndband-poster">
            <img src=".${data.videos[data.videos[id].related[i]-1].poster}">
            <div class="myndband-poster-time"><p>${
              minutes + ":" + ("0" + seconds).slice(-2)
            }</p></div
            </div>
          <div class="myndband-title"><p>.${
            data.videos[data.videos[id].related[i]-1].title
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
		
		
			`
	  }
  });