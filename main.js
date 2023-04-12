// TOGGLE IMG SRC'-s FOR ABOUT.HTML
const flipPic1 = document.querySelector("#qm-1")
const flipPic2 = document.querySelector("#qm-2")
const flipPic3 = document.querySelector("#qm-3")

const advertisement = document.querySelector(".hidden-message-active")
const advertisementHidden = document.querySelector(".hidden-message")


let change = true
let change1 = true
let change2 = true

if (flipPic1)
  flipPic1.addEventListener("click", flipPicAdd1)
if (flipPic2)
  flipPic2.addEventListener("click", flipPicAdd2)
if (flipPic3)
  flipPic3.addEventListener("click", flipPicAdd3)
function flipPicAdd1() {
  change = !change
  if (change) {
    flipPic1.src = "img/qm-1.jpg"
  } else {
    flipPic1.src = "img/qm-1-added.jpg"
    advertisementHidden.classList.add("hidden-message-active")
  }
}
function flipPicAdd2() {
  change1 = !change1
  if (change1) {
    flipPic2.src = "img/qm-2.jpg"
  } else {
    flipPic2.src = "img/qm-2-added.jpg"
    advertisementHidden.classList.add("hidden-message-active")

  }
}
function flipPicAdd3() {
  change2 = !change2
  if (change2) {
    flipPic3.src = "img/qm-3.jpg"
  } else {
    flipPic3.src = "img/qm-3-added.jpg"
    advertisementHidden.classList.add("hidden-message-active")
  }
}









// ADDING CONSTS TO SUPPORT HTML
const custom = document.querySelector("#op-4")
const required = document.querySelector("#op-5")
const remove1 = document.querySelector("#op-1")
const remove2 = document.querySelector("#op-2")
const remove3 = document.querySelector("#op-3")
const customA = document.querySelector(".op-5")
const ToggleCurrency = document.querySelector(".currency")
const customB = document.querySelector(".op-5-active")
const currency = document.querySelector(".currency-active")




// ADDING CLICK EVENT TO "MÁS ÖSSZEG"
if (custom, customA) {
  custom.addEventListener("click", addCustom)
}
// ADD ACTIVE CLASS==> INPUT FIELD WILL SHOW AND SET THE INPUT FIELD TO REQUIRED
function addCustom() {
  customA.classList.add("op-5-active")
  ToggleCurrency.classList.add("currency-active")
  required.required = true

}
// REMOVE INPUT FIELD IF THE USER DOESNT WANT TO DONATE CUSTOM MONEY(IF CLICKS ON THE FIXED AMOUNTS)
if (custom, customA, ToggleCurrency) {
  // customA.addEventListener("click", removeCustom)
  remove1.addEventListener("click", removeCustom)
  remove2.addEventListener("click", removeCustom)
  remove3.addEventListener("click", removeCustom)
}
// SET THE INPUT VALUE TO ZERO(RESETS) IF THE USER CLICKS ON A FIXED AMOUNT OF MONEY AND THE CUSTOM MONEY FIELD WONT BE REQUIRED
function removeCustom() {
  customA.classList.remove("op-5-active")
  ToggleCurrency.classList.remove("currency-active")
  let setValueToZero = document.getElementById("op-5")
  setValueToZero.value = "";
  required.required = false
  // customA.classList.add("remove-content")

}




// NAVIGATION MENU BUTTON
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

// ADDITIONAL INFOS FOR REGISTRATION
let submit = document.querySelector("#sub")
if (submit) {
  submit.addEventListener("click", () => {

    alert(`1.Válassza ki kedvenc kávéját,hogy részt vehessen sorsolásunkon!
2.Illetve, ha eddig nem tette, töltse ki a kötelező mezőket!
3.Amennyiben Ön kerül kiválasztásra, E-mailben megkeressük!`)

  }
  )
}
// HAMBURGER MENU ADDED
const btn = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".navitems")
const floatingBtn = document.querySelector(".floating-btn")
const header = document.querySelector("header")
const line1 = document.querySelector(".line-1")
const line2 = document.querySelector(".line-2")
const line3 = document.querySelector(".line-3")
const e = document.querySelector(".dropbtn")
// ADDING(TOGGLE) ACTIVE CLASS (NAV MENU WILL APPEAR)
function active() {
  mobileNav.classList.toggle("active")
  line1.classList.toggle("line-1-active")
  line2.classList.toggle("line-2-active")
  line3.classList.toggle("line-3-active")

}
if (btn) {
  btn.addEventListener("click", active)
}

// REMOVING ACTIVE CLASS (NAV MENU HIDE)
function removeNav() {
  mobileNav.classList.remove("active")
  line1.classList.remove("line-1-active")
  line2.classList.remove("line-2-active")
  line3.classList.remove("line-3-active")

}
if (mobileNav) {
  mobileNav.addEventListener("click", removeNav)
}
// STOP PROPAGATION FOR TERMELŐI KÁVINK
e.addEventListener("click", (e) => {
  e.stopPropagation()
})

const CentralAfrican = document.querySelector("#central-american")
if (CentralAfrican) {
  CentralAfrican.addEventListener("click", removeCentral)
}
function removeCentral() {
  NavbtnNone.classList.remove("dropdown-content-active")
  NavbtnNone.classList.add("dropdown-content")
}

// INTERSECTION OBSERVER FOR .p-4 PICTURE,WHEN IT APPEARS ON THE PAGE,ANIMATION WILL START
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