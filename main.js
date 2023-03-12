// Create the observer
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

observer.observe(document.querySelector(".p-4"));
