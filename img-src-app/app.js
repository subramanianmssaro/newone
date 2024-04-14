const accesskey ="ojcAXx-fpKPb6SgAtOkkItYKppOuF8fjz4vA82wagT4"

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const  searchResultsEl  = document.querySelector(".search-results");
const  showMoreBtn   = document.getElementById("show-more-btn");

let inputData="";
let page=1;
async function  searchImges() {
inputData = searchInputEl.value;
const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`
 console.log(url);
 const responce = await fetch(url);
 const data = await responce.json();
 //console.log(data)
if (page === 1){

	searchResultsEl.innerHTML = "";
	//console.log(page);
}
const results = data.results;

results.map((result)=>{

const imageWrapper = document.createElement("div");
imageWrapper.classList.add("search-result");
const image =document.createElement("img");
image.src = result.urls.small;
image.alt  = result.alt_description;
const imageLink = document.createElement("a");
imageLink.href = result.links.html;
imageLink.target ="_blank";
//console.log(result); 
imageLink.textContent = result.alt_description; 


imageWrapper.appendChild(image);
imageWrapper.appendChild(imageLink); 
searchResultsEl.appendChild(imageWrapper);




});
 
page++; 

console.log(page);


if(page > 1) {
showMoreBtn.style.display ="block";	
}



}

formEl.addEventListener("submit",(event)=>{
	event.preventDefault();
	page = 1;
    searchImges();
});

showMoreBtn.addEventListener("click",() =>{

searchImges();

});