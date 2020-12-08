// TODO: add code here

function main() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let containerEl = document.getElementById("container");
      let astronautListEl = "";

      json.forEach((astronaut) => {
        astronautListEl += `
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
              <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                <li>Active: ${astronaut.active}</li>
                <li>Skills: ${astronaut.skills.join(", ")}</li>
              </ul>
            </div>
          <img class="avatar" src="${astronaut.picture}">
        </div> 
        `;
      });
      containerEl.innerHTML = astronautListEl;
    });
}

window.addEventListener("load", main);
