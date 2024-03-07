const APIURL = "https://api.github.com/users/";
let main = document.querySelector("main");
let profiles = document.querySelector(".profiles");
let searchUser: HTMLInputElement = document.querySelector("#search")!;
searchUser.addEventListener("keyup", (e: KeyboardEvent) => {
  if ("Enter" === e.code) {
    getUser(e.currentTarget?.value);
    searchUser.value = "";
  }
});

function getUser(username) {
  fetch(APIURL + username)
    .then((res) => res.json())
    .then((data) => {
      if (data.message == "Not Found") {
        throw new Error("not found");
      }
      createUserCard(data);
      setTimeout(() => {
        getRepos(username);
      }, 1000);
    })
    .catch((errpr) => createErrorCard());
}

function getRepos(username) {
  fetch(APIURL + username + "/repos?sort=created")
    .then((res) => res.json())
    .then((data) => {
      createReposCard(data);
    });
}

function createUserCard(data) {
  let cardDiv = `
        <div class="card">
            <div id="avatar">
                <img src="${data.avatar_url}" alt="头像">
            </div>
            <div id="info">
                <h2 id="name">${data.name}</h2>
                <span id="bio">${data.bio}</span>
                <ul>
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>
                <p id="repos"></p>
            </div>
        </div>
    `;
  profiles.innerHTML = cardDiv;
}

function createReposCard(data) {
  data.slice(0, 4).forEach((element) => {
    let repos = document.querySelector("#repos");
    let card = document.createElement("span");
    card.classList.add("repoCard");
    card.innerText = element.name;
    repos.appendChild(card);
  });
}

function createErrorCard() {
  profiles.innerHTML = `
    <div class="card">
        <h2 id="errorCard">No profile with this username</h2>
    </div>
    `;
}
