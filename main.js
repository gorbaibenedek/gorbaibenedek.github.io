// function widthChangeCallback() {
//   if (window.innerWidth < 600) {
//     observer.observe(document.querySelector(".anim"));
//   } else {

//     observer.unobserve(document.querySelector(".anim"));
//   }
// }
// window.addEventListener('resize', widthChangeCallback);
// widthChangeCallback();


let observer = new IntersectionObserver((entries) => {

  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("anim");


    }
  });
});
if (window.innerWidth < 600) {
  observer.observe(document.querySelector(".p-4"));
} else {
  observer.observe(document.querySelector(".p-4"));

}

