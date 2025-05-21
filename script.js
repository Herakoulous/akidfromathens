  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      header.style.opacity = "0";
      header.style.pointerEvents = "none"; // makes it unclickable
    } else {
      // Scrolling up
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
    }

    lastScrollY = currentScrollY;
  });

    const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 3,
    slidesPerGroup: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


