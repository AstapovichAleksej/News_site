const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 6,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        640: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        
        940: {
          slidesPerView: 6,
          spaceBetween: 40
        }
      }
  });