var time = new Date().getTime();
var years, months, weeks, days, hours;
fetch("./videos.json")
  .then(response => response.json())
  .then(data => {
    for(var i = 0; i < Object.keys(data.categories).length; i++) {
      document.querySelector("main").innerHTML += `<div class="${data.categories[i].title}">
      <h2>${data.categories[i].title}</h2>
      <div class="row"></div>
      </div>`;
      for(var u = 0; u < Object.keys(data.categories[i].videos).length; u++) {
        years = months = weeks = days = hours = 0;
        var timeCreated = time - data.videos[data.categories[i].videos[u] - 1].created;
        if (timeCreated / 3.154e+10 > 1) {
          years = Math.floor(timeCreated / 3.154e+10);
        } else if (timeCreated / 2.628e+9 > 1) {
          months = Math.floor(timeCreated / 2.628e+9);
        } else if (timeCreated / 6.048e+8 > 1) {
          weeks = Math.floor(timeCreated / 6.048e+8);
        } else if (timeCreated / 8.64e+7 > 1) {
          days = Math.floor(timeCreated / 8.64e+7)
        } else {
          hours = Math.floor(timeCreated / 3.6e+6 )
        }
        document.querySelector(`.${data.categories[i].title.substr(0, data.categories[i].title.indexOf(" "))} .row`).innerHTML += `
        <div class="myndband${data.videos[data.categories[i].videos[u] - 1].id} col col-4 col-sm-12 myndband">
          <div class="myndband-poster"><img src="${data.videos[data.categories[i].videos[u] - 1].poster}"></div>
          <div class="myndband-title"><p>${data.videos[data.categories[i].videos[u] - 1].title}</p></div>
          <div class="myndband-time">${(() => {
            if(years != 0){
              if(years == 1) {
                return `Fyrir 1 ári síðan`
              } else {
                return `Fyrir ${years} árum síðan`
              }
            } else if (months != 0) {
              if(months == 1) {
                return `Fyrir 1 mánuði síðan`
              } else {
                return `Fyrir ${months} mánuðum síðan`
              }
            } else if(weeks != 0) {
              if(weeks == 1) {
                return `Fyrir 1 viku síðan`
              } else {
                return `Fyrir ${weeks} vikum síðan`
              }
            } else if (days != 0) {
              if(days == 1) {
                return `Fyrir 1 degi síðan`
              } else {
                return `Fyrir ${days} dögum síðan`
              }
            } else {
              if(hours == 1) {
                return `Fyrir 1 klukkutíma síðan`
              } else {
                return `Fyrir ${hours} klukkustundum síðan`
              }
            }
          })()}</div>
        </div>
        `;
      }
    }
    
  });