$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".main-header nav ul").toggleClass("active");
    $(".hamburger i").toggleClass("active");
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".main-header nav ").addClass("sticky");
    } else {
      $(".main-header nav ").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(".bx-search-alt-2").click(function () {
    $(".search-bar").css("display", "flex");
  });

  $(".bx-message-square-x").click(function () {
    $(".search-bar").css("display", "none");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const form1 = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Name should be correct");
  } else {
    // add success class
    setSuccessFor(username);
  }
  if (emailValue === "") {
    //show error
    //add error class
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
  if (phoneValue === "") {
    //show error
    //add error class
    setErrorFor(phone, "phone cannot be blank");
  } else {
    // add success class
    setSuccessFor(phone);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; //.form-control
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Animation
AOS.init({
  duration: 1000,
});
