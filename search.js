import navBar from "./navbar.js"

let nav = document.querySelector("#navbar");
nav.innerHTML = navBar();

let mainBody = document.getElementById("mainBody");

let url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;

async function getData(url) {
  try {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.meals)
    displayData(data.meals)

  } catch (error) {
    console.log('Error',error);
  }
}

function displayData(arr){
    mainBody.innerHTML="";
    
    if(arr){
        arr.forEach((ele)=>{

            let card = document.createElement("div")
    
            let strCategory = document.createElement("h2");
            strCategory.innerText = ele.strCategory;
    
            let strMealThumb = document.createElement("img")
            strMealThumb.src = ele.strMealThumb;
    
            let strMeal = document.createElement("h3");
            strMeal.innerText = ele.strMeal;
           
            card.append(strCategory, strMealThumb, strMeal);
            mainBody.append(card);
        })
    }else{
        mainBody.innerHTML= "<p>No recipes found!.</p>"
    }
}

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
searchBtn.textContent= "search"

let searchVal = '';

searchInput.addEventListener("input", function() {
    searchVal = searchInput.value;
    console.log(searchVal); 
});

searchBtn.addEventListener("click", function() {
    console.log(searchVal); 
    if (searchVal.trim()) {
        getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`);
    }
});