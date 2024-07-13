import navBar from "./navbar.js"

let nav = document.querySelector("#navbar");
nav.innerHTML = navBar();

let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
async function getData(url){
    try {
        let res = await fetch(url)
        let data = await res.json()
        displayData(data.meals);
    } catch (error) {
        console.log(error);
    }
}

setInterval(()=>{
    getData(url)
},2000);

function displayData(arr){
    main.innerHTML="";
    arr.forEach((ele) => {
        let card = document.createElement("div")
        card.id = "RandomCard"

        let strCategory = document.createElement("h2");
        strCategory.innerText = ele.strCategory;

        let strCategoryThumb = document.createElement("img")
        strCategoryThumb.src = ele.strMealThumb;
    

        let strYoutube = document.createElement("iframe")
        strYoutube.src = ele.strYoutube;
        strYoutube.style.width = "300px"
        strYoutube.style.height = "200px"

        let strCategoryDescription = document.createElement("h3");
        strCategoryDescription.innerText = ele.strInstructions;

        card.append(strCategory, strCategoryThumb, strCategoryDescription)
        main.append(card) 
    });
}

