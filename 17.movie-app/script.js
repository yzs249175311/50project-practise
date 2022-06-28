const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

let main = document.querySelector("main")
let search = document.querySelector(".search")

search.addEventListener("keyup",searchMovie)

getMovie(API_URL)

async function getMovie(url) {
   let res = await fetch(url)
   let { results } = await res.json()
   showMovie(results)
}

function searchMovie(e){
   console.log(e.key)
   if(e.key == "Enter"){
      main.innerHTML = "";
      getMovie(SEARCH_API + this.value)
   }
}

function showMovie(results) {
   results.forEach(element => {
      main.innerHTML += `
        <div class="card">
            <img src="${IMG_PATH + element.poster_path}" alt="">
            <div class="describle">
               <span class="title">${element.original_title}</span>
               <span class="score">${element.vote_average}</span>
            </div>
            <div class="overview">
               <h4 class="title">overview</h4>
               <span class="info">${element.overview}</span>
            </div>
        </div>
      `
   });
}

