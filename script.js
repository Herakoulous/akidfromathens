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