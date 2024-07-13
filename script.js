import navBar from "./navbar.js";

let nav = document.querySelector("#navbar");
nav.innerHTML = navBar();

let main = document.querySelector("#main");

let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

async function getData(url) {
  try {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.categories)
    displayData(data.categories)

  } catch (error) {
    console.log('comes the Error',error);
  }
}

getData(url);

function displayData(arr) {

    arr.forEach((ele)=>{

        let card = document.createElement("div");

    let idCategory = document.createElement("h2");
    idCategory.innerText = ele.idCategory;

    let strCategory = document.createElement("h4");
    strCategory.innerText = ele.strCategory;

    let strCategoryDescription = document.createElement("h3");
    strCategoryDescription.innerText = ele.strCategoryDescription;

    let strCategoryThumb = document.createElement("img");
    strCategoryThumb.src = ele.strCategoryThumb;

    card.append(strCategoryThumb,strCategory,strCategoryDescription);
    main.append(card);
    })
}
