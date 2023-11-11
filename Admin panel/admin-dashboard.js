$(document).ready(function () {
  $(".search").click(function () {
    $(".search-bar").css("display", "flex");
  });

  $(".search-bar i").click(function () {
    $(".search-bar").css("display", "none");
  });

  $(".grid i").click(function () {
    $(".grid-section").toggleClass("active");
  });
  $(".bell i").click(function () {
    $(".notification").toggleClass("active");
  });
  $(".account").click(function () {
    $(".account-section").toggleClass("active");
  });

  $(".design").on("click", function () {
    $(".operation-1").fadeIn();
    $(".operation-2, .operation-3").fadeOut();
  });
  $(".development").on("click", function () {
    $(".operation-2").fadeIn();
    $(".operation-1, .operation-3").fadeOut();
  });
  $(".android").on("click", function () {
    $(".operation-3").fadeIn();
    $(".operation-2, .operation-1").fadeOut();
  });

  // $("#calendar").evoCalendar({
  //   theme: "linear-gradient(rgba(103, 58, 183, 0.5), rgba(33, 150, 243, 0.8));",
  //   calendarEvents: [
  //     {
  //       id: "Event1", // Event's ID (required)
  //       name: "APL", // Event name (required)
  //       description: "AppTech Premier League Started on 18 Dec 2021",
  //       date: "December/18/2021", // Event date (required)
  //       type: "holiday", // Event type (required)
  //       //   everyYear: true, // Same event every year (optional)
  //     },
  //     {
  //       id: "Event2", // Event's ID (required)
  //       name: "New Year", // Event name (required)
  //       date: "January/1/2020", // Event date (required)
  //       description:
  //         "The heart touching greetings will make feel anyone very special. Wish your near and dear one with our special greetings.",
  //       type: "holiday", // Event type (required)
  //       everyYear: true, // Same event every year (optional)
  //     },
  //     {
  //       name: "Vacation Leave",
  //       badge: "02/13 - 02/15", // Event badge (optional)
  //       date: ["February/13/2020", "February/15/2020"], // Date range
  //       description: "Vacation leave for 3 days.", // Event description (optional)
  //       type: "event",
  //       color: "#63d867", // Event custom color (optional)
  //     },
  //   ],
  // });
});

let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  });
}
let arrow1 = document.querySelectorAll(".arrow1");
for (let i = 0; i < arrow1.length; i++) {
  arrow1[i].addEventListener("click", (e) => {
    console.log(e);
    let arrowParent1 = e.target.parentElement.parentElement;
    console.log(arrowParent1);
    arrowParent1.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  // document.querySelector(".second-img").style.display = "block";
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    sidebar.classList.add("close");
  }
}

var x = window.matchMedia("(max-width: 679px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

// //

// const operation_1 = document.querySelector(".operation-1");
// const operation_2 = document.querySelector(".operation-2");
// const operation_3 = document.querySelector(".operation-3");

// const design_div = document.querySelector(
//   ".profit-feed-order-user .progress .same-class .top-div .design"
// );
// const development_div = document.querySelector(
//   ".profit-feed-order-user .progress .same-class .top-div .development"
// );
// const android_div = document.querySelector(
//   ".profit-feed-order-user .progress .same-class .top-div .android"
// );
// design_div.addEventListener("click", function () {
//   if (operation_1.style.display === "block") {
//     operation_2.style.display = "none";
//     operation_3.style.display = "none";
//   }
// });
// development_div.addEventListener("click", function () {
//   if (operation_2.style.display === "block") {
//     operation_1.style.display = "none";
//     operation_3.style.display = "none";
//   }
// });
// android_div.addEventListener("click", function () {
//   if (operation_3.style.display === "block") {
//     operation_1.style.display = "none";
//     operation_2.style.display = "none";
//   }
// });
//////////////////////////////////////
// console.log(top_div);
// const design = document.querySelector(".design");
// design.addEventListener("click", function () {
//   if (operation_1.style.display == "block") {
//     operation_2.style.display = "none";
//     operation_3.style.display = "none";
//   }
// });
// if (operation_1.style.display == "block") {
//   operation_2.style.display = "none";
//   operation_3.style.display = "none";
// } else if ((operation_2.style.display = "block")) {
//   operation_1.style.display = "none";
//   operation_3.style.display = "none";
// } else {
//   operation_1.style.display = "none";
//   operation_2.style.display = "none";
// }
const form = document.getElementById("form");
const title = document.getElementById("title");

const textarea = document.getElementById("textarea");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const titleValue = title.value.trim();
  // const t_imageValue = t_image.value.trim();
  // const nameValue = name.value.trim();
  const textareaValue = textarea.value.trim();

  if (titleValue === "") {
    //show error
    //add error class
    setErrorFor(title, "title  cannot be blank");
  } else {
    // add success class
    setSuccessFor(title);
  }

  // if (nameValue === "") {
  // show error
  //add error class
  // setErrorFor(name, "Auther Name cannot be blank");
  // } else {
  // add success class
  // setSuccessFor(name);
  // }
  // if (t_imageValue === "") {
  // show error
  //add error class
  // setErrorFor(t_image, "Title Image cannot be blank");
  // } else {
  // add success class
  // setSuccessFor(t_image);
  // }
  if (textareaValue === "") {
    // show error
    //add error class
    setErrorFor(textarea, "Textarea cannot be blank");
  } else {
    // add success class
    setSuccessFor(textarea);
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
