document.addEventListener("DOMContentLoaded", function () {
  let animated = false; // To ensure the animation only runs once

  window.addEventListener("scroll", function () {
    const section = document.querySelector(".translucent-section");
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.getBoundingClientRect().height;

    // Check if the section is in the viewport
    if (
      sectionTop <= window.innerHeight &&
      sectionTop + sectionHeight >= 0 &&
      !animated
    ) {
      const fadeElements = section.querySelectorAll(".square");
      fadeElements.forEach((el) => el.classList.add("fade"));
      animated = true;
    }
  });
});
