if(window.innerWidth>767){
var swiper = new Swiper(".slidecontainer", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    // grabCursor: "true",
    centerSlide: "true",
    fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
  });
}else{
  var swiper = new Swiper(".slidecontainer", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    // grabCursor: "true",
    centerSlide: "true",
    fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
  }); 
}


