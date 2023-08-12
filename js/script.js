// console.log("i am working");
let loader = document.getElementById("preloader");

window.addEventListener("load", ()=>{
    loader.classList.add('disappear');
})

// function for search iteams
let searchItems = document.getElementById("search-item");
let displayItems = document.getElementById("display");


searchItems.addEventListener("click", ()=>{
    displayItems.classList.toggle("activebar")
})


// slider section
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// const nxtBtn = document.getElementsByClassName('.nxt-btn');
const preBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// end of slider section



