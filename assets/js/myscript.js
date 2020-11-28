// OWL CAROUSEL

$(".page-header").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
  },
});

$(".owl-theme-display").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    700: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});

// WINDOW VH

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

// SCROLL WINDOW TO ID

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

// Menu Slide

var menuHideShow = $(".menu").hasClass("menu_show");

function desplazar() {
  $(".menu").toggleClass("menu_show");
  $(".hamburger_div").toggleClass("hamburger_div-slide");
  $("#hambIconOne").toggleClass("hamburger_icon_one");
  $("#hambIconTwo").toggleClass("hamburger_icon_two");
  $("#hambIconThree").toggleClass("hamburger_icon_three");
  // $('.menuicon').toggleClass('menuicon-black');
}
$(".hamburger_div").on("click", function (e) {
  desplazar();
  e.stopPropagation();
  menuHideShow = $(".menu").hasClass("menu_show");
  console.log(menuHideShow);
});

window.addEventListener("click", function (e) {
  if ((menuHideShow = true && e.target.className != "menu menu_show")) {
    $(".menu").removeClass("menu_show");
    $(".hamburger_div").removeClass("hamburger_div-slide");
    $("#hambIconOne").removeClass("hamburger_icon_one");
    $("#hambIconTwo").removeClass("hamburger_icon_two");
    $("#hambIconThree").removeClass("hamburger_icon_three");
    // $('.menuicon').removeClass('menuicon-black');
    // e.stopPropagation();
  }
});

// MENU STYLE

var sectionOne = $("#sectionOne").offset();
var sectionTwo = $("#sectionTwo").offset();
var sectionThree = $("#sectionThree").offset();
var sectionFour = $("#sectionFour").offset();

// DESKTOPS

// ---------------------------------

var x = window.matchMedia("(min-width: 1100px)");
//
function myFunction(x) {
  if (x.matches) {
    // If media query matches

    // $("#productLink").on("mouseenter", function () {
    //   $("#menuList").css({
    //     visibility: "visible",
    //     opacity: 1,
    //   });
    // });
    // $("#productLink").on("mouseleave", function () {
    //   $("#menuList").css({
    //     visibility: "hidden",
    //     opacity: 0,
    //   });
    // });

    var windowHeight = $(window).height();
    var position = $(window).scrollTop();

    //
    //
    //       // MENU CHANGE
    //
    $(window).on("load", function () {
      $(".header_title").addClass("header-from-left");
      $(".header_description").addClass("header-from-right");
    });

    // MENU ACTIVE

    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= sectionTwo.top - 100) {
        $("#menu").addClass("menu-scroll");
      } else {
        $("#menu").removeClass("menu-scroll");
      }
    });
  }
}

myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
