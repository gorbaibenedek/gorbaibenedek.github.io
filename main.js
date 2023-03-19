// function widthChangeCallback() {
//   if (window.innerWidth < 600) {
//     observer.observe(document.querySelector(".anim"));
//   } else {

//     observer.unobserve(document.querySelector(".anim"));
//   }
// }
// window.addEventListener('resize', widthChangeCallback);
// widthChangeCallback();
const toggleBtn = document.querySelector("#tap");
const myDiv = document.querySelector(".dropdown-content-2 ");
const myButtnA = document.querySelector("#a");
const myButtnB = document.querySelector("#b");


toggleBtn.addEventListener("click", () => {
  if (myDiv.style.display === "none") {

    myDiv.style.display = "block"
    myDiv.style.padding = "100px 0"
    toggleBtn.style.padding = "10px"
    toggleBtn.innerHTML = `<a><i class="fa fa-bars"></i></a>`

    // myButtnB.style.display = "block"


  } else {

    myDiv.style.display = "none"

    toggleBtn.innerHTML = `<a><i
      class="fa fa-bars"></i></a>`

    // myDiv.style.display = "none"
  }
})


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
}


