var APIURL = "https://api.github.com/users/";
var main = document.querySelector("main");
var profiles = document.querySelector(".profiles");
var searchUser = document.querySelector("#search");
searchUser.addEventListener("keyup", function (e) {
  var _a;
  if ("Enter" === e.code) {
    getUser(
      (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.value
    );
    searchUser.value = "";
  }
});
function getUser(username) {
  fetch(APIURL + username)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.message == "Not Found") {
        throw new Error("not found");
      }
      createUserCard(data);
      setTimeout(function () {
        getRepos(username);
      }, 1000);
    })
    ["catch"](function (errpr) {
      return createErrorCard();
    });
}
function getRepos(username) {
  fetch(APIURL + username + "/repos?sort=created")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      createReposCard(data);
    });
}
function createUserCard(data) {
  var cardDiv =
    '\n        <div class="card">\n            <div id="avatar">\n                <img src="'
      .concat(
        data.avatar_url,
        '" alt="\u5934\u50CF">\n            </div>\n            <div id="info">\n                <h2 id="name">'
      )
      .concat(data.name, '</h2>\n                <span id="bio">')
      .concat(
        data.bio,
        "</span>\n                <ul>\n                    <li>"
      )
      .concat(
        data.followers,
        "<strong>Followers</strong></li>\n                    <li>"
      )
      .concat(
        data.following,
        "<strong>Following</strong></li>\n                    <li>"
      )
      .concat(
        data.public_repos,
        '<strong>Repos</strong></li>\n                </ul>\n                <p id="repos"></p>\n            </div>\n        </div>\n    '
      );
  profiles.innerHTML = cardDiv;
}
function createReposCard(data) {
  data.slice(0, 4).forEach(function (element) {
    var repos = document.querySelector("#repos");
    var card = document.createElement("span");
    card.classList.add("repoCard");
    card.innerText = element.name;
    repos.appendChild(card);
  });
}
function createErrorCard() {
  profiles.innerHTML =
    '\n    <div class="card">\n        <h2 id="errorCard">No profile with this username</h2>\n    </div>\n    ';
}
