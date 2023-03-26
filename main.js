const navBtn = document.querySelector(".dropdown-content-active")
const NavbtnNone = document.querySelector(".dropdown-content")
const buttOn = document.querySelector(".onc")



if (buttOn) {
  buttOn.addEventListener("click", navActive)
}
function navActive() {
  NavbtnNone.classList.toggle("dropdown-content-active")
  NavbtnNone.classList.toggle("dropdown-content")
  // NavbtnNone.classList.remove("dropdown-content")
}

// Create the observer
let submit = document.querySelector("#sub")
if (submit) {
  submit.addEventListener("click", () => {

    alert(`Válassza ki kedvenc kávéját,hogy részt vehessen sorsolásunkon!
  Illetve, ha eddig nem tette, töltse ki a kötlelező mezőket!`)

  }
  )
}

const btn = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".navitems")
const floatingBtn = document.querySelector(".floating-btn")
const header = document.querySelector("header")
const line1 = document.querySelector(".line-1")
const line2 = document.querySelector(".line-2")
const line3 = document.querySelector(".line-3")
const e = document.querySelector(".dropbtn")

function active() {
  mobileNav.classList.toggle("active")
  line1.classList.toggle("line-1-active")
  line2.classList.toggle("line-2-active")
  line3.classList.toggle("line-3-active")

}



function removeNav() {
  mobileNav.classList.remove("active")
  line1.classList.remove("line-1-active")
  line2.classList.remove("line-2-active")
  line3.classList.remove("line-3-active")


}
e.addEventListener("click", (e) => {
  e.stopPropagation()
})

if (btn) {
  btn.addEventListener("click", active)
}
if (mobileNav) {
  mobileNav.addEventListener("click", removeNav)
}

const ins = document.querySelector(".p-4")
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


if (ins) {
  if (window.innerWidth < 600)
    observer.observe(document.querySelector(".p-4"));

}



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


// toggleBtn.addEventListener("click", () => {
//   if (myDiv.style.display === "none") {

//     myDiv.style.display = "block"
//     myDiv.style.padding = "100px 0"
//     toggleBtn.style.padding = "10px"
//     toggleBtn.innerHTML = `<a><i class="fa fa-close"></i></a>`

//     // myButtnB.style.display = "block"


//   } else {

//     myDiv.style.display = "none"

//     toggleBtn.innerHTML = `<a><i
//       class="fa fa-bars"></i></a>`

//     // myDiv.style.display = "none"
//   }
// })


// let observer = new IntersectionObserver((entries, o) => {
//   console.log(o === observer)
//   // Loop over the entries
//   entries.forEach((entry) => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add("anim");
//       observer.observe(document.querySelector(".p-4"));

//     }

//   });

// });