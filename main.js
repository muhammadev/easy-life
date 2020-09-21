let navItems = document.querySelectorAll(".nav-li");

navItems.forEach(item => {
  item.onmouseover = function() {
    item.classList.remove("hover-out");
    item.classList.add("hover-in");
  }

  item.onmouseleave = function() {
    item.classList.remove("hover-in");
    item.classList.add("hover-out");
  }
})

// mobile menu settings
let menuIcon = document.querySelector(".menu-icon"),
    navMenu = document.querySelector("nav");

menuIcon.onclick = function() {
  menuIcon.classList.toggle("opened")
  if (navMenu.classList.contains("opened")) {
    document.body.style.overflow = "unset";
    navMenu.classList.remove("fade-in");
    navMenu.classList.add("fade-out");
    navMenu.addEventListener("webkitAnimationEnd", function(e) {
      if (e.animationName === "fade-out") {
        navMenu.classList.remove("opened");
      }
    });
  } else {
    navMenu.classList.toggle("opened");
    navMenu.classList.remove("fade-out");
    navMenu.classList.add("fade-in");
    document.body.style.overflow = "hidden";
  };
}
navItems.forEach(item => {
  item.onclick = function() {
    if (navMenu.classList.contains("opened")) {
      document.body.style.overflow = "unset";
      menuIcon.classList.toggle("opened")
      navMenu.classList.remove("fade-in");
      navMenu.classList.add("fade-out");
      navMenu.addEventListener("webkitAnimationEnd", function(e) {
        if (e.animationName === "fade-out") {
          navMenu.classList.remove("opened");
        }
      });
    }
  }
})


// contact form animations
function floatingLabel(container, isTextarea) {
  let label = container.querySelector("label"),
      input;

  if (isTextarea) {
    input = container.querySelector("textarea");
  } else {
    input = container.querySelector("input");
  }

  input.addEventListener("focus", function() {
    label.classList.add("label-up");
    label.classList.remove("label-up-blur");
    label.classList.add("label-up-focus");
  });

  input.addEventListener("blur", function() {
    let length = input.value.length;

    if (length > 0) { // if there is text, hold the label up
      label.classList.remove("label-up-focus");
      label.classList.add("label-up-blur");
    } else { // if not, get to main position
      label.classList.remove("label-up");
      label.classList.remove("label-up-blur");
      label.classList.remove("label-up-focus");
    }

  })
}

floatingLabel(document.querySelector(".holder-one"), false);
floatingLabel(document.querySelector(".holder-sec"), false);
floatingLabel(document.querySelector(".holder-third"), true);
