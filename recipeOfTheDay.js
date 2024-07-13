import navBar from "./navbar.js";

let nav = document.querySelector("#navbar");
nav.innerHTML = navBar();

let main = document.querySelector("#main");

let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`

async function getData(url){
    try {
        let res = await fetch(url)
        let data = await res.json()
        displayData(data.meals)
    } catch (error) {
        console.log(error);
    }
}
getData(url)
function displayData(arr){

    arr.forEach(ele => {
        main.innerHTML="";

        let card = document.createElement('div')

        let strCategory = document.createElement("h2");
        strCategory.innerText = ele.strMeal;

        let strCategoryThumb = document.createElement("img")
        strCategoryThumb.src = ele.strMealThumb;

        card.append(strCategory, strCategoryThumb)
        main.append(card)
    });
}