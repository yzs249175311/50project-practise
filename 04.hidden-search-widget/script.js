let search = document.querySelector("#search");
let input = document.querySelector("#input-search");

search.addEventListener("click", () => {
  // if(input.classList.contains("hidden")){
  //     input.classList.remove("hidden")
  // }else{
  //     input.classList.add("hidden")
  // }

  input.classList.toggle("hidden");
});
