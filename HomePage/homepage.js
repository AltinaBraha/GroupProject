var swiper = new Swiper(".new-book", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
  });
  
  