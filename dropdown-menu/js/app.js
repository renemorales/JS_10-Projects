dropdown();
sub_menu();

// when the user click on the buger menu toggle between hiding
// and showing the dropdown
function dropdown() {
  let burger = document.querySelector(".menu-toggle");
  let nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  });
}

function sub_menu() {
  let ul = document.querySelectorAll("ul li");

  for (let index = 0; index < ul.length; index++) {
    ul[index].addEventListener("click", () => {
      if (ul[index].classList.contains("active")) {
        ul[index].classList.remove("active");
      } else {
        ul[index].classList.add("active");
      }
    });
  }
}
