// const carousel = document.querySelector(".carousel");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// let currentIndex = 0;

// prevBtn.addEventListener("click", () => {
//   console.log("btn_01");
//     const itemWidth = document.querySelector(".carousel-item").offsetWidth + 20; // item width + margin
//     currentIndex = Math.max(currentIndex - 1, 0);
//     carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// });

// nextBtn.addEventListener("click", () => {
//   console.log("btn_02");
//     const itemWidth = document.querySelector(".carousel-item").offsetWidth + 20; // item width + margin
//     const maxIndex = carousel.children.length - Math.floor(carousel.parentElement.offsetWidth / itemWidth);
//     currentIndex = Math.min(currentIndex + 1, maxIndex);
//     carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// });



let slideContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let naxtBtn = document.getElementById("backBtn");
