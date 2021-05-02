"use strict";


const topToArrow = document.querySelector(".top_to_arrow");
const top_Bg = document.querySelector("div.header_photo");
const humburger = document.querySelector(".humburger");
const cross = document.querySelector(".cross");
const humburgerMenu = document.querySelector(".humburger_menu");


const scrollPhotos =[
    'img/scroll1.jpg',
    'img/scroll2.jpg',
    'img/scroll3.jpg',
    'img/scroll4.jpg',
    'img/scroll5.jpg',
];

// humburger
humburger.addEventListener("click", () =>{
    humburger.classList.add("disapear_btn");
    cross.classList.add("show_btn");
    humburgerMenu.classList.add("show_humburger");
});

cross.addEventListener("click", ()=>{
    humburger.classList.remove("disapear_btn");
    cross.classList.remove("show_btn");
    humburgerMenu.classList.remove("show_humburger");
    
});

// scroll bg
let index = 1;
setInterval(scrollBg, 3000);

function scrollBg(){
    if(index > scrollPhotos.length - 1){
        index = 0;
    }
    top_Bg.style.backgroundImage = `url(${scrollPhotos[index]})`;

    index++;
}


// top to arrow
window.addEventListener("scroll", () =>{
  const scroll_Height = window.pageYOffset;
  if(scroll_Height > 450){
      topToArrow.classList.add("show_link");
  }else{
      topToArrow.classList.remove("show_link");
  }
});



