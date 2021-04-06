'use strict';

// Header!!!
window.addEventListener('scroll', function () {
  var header = document.getElementById("nav");

  if (window.pageYOffset > 50) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});


// Mobile menu!!!
var body = document.querySelector("body");
var overlay = document.querySelector(".overlay");
var toggleBtn = document.querySelector(".toggle-button");
var mobileMenu = document.querySelector(".menu-mobile");
var lock = document.querySelectorAll(".lock");

toggleBtn.addEventListener("click", function () {

  toggleBtn.classList.toggle("change");
  mobileMenu.classList.toggle("show");
  overlay.classList.toggle("show");
  body.classList.toggle("lock");


});

overlay.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
  toggleBtn.classList.remove("change");
  overlay.classList.remove("show");
});


// Tabs!!!
(function ($) {
  $(function () {

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
      $(this)
        .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
    });

  });
})(jQuery);

// DAte!!!
$(function () {
  $("#datepicker").datepicker();
});

//dropdown
$(function () {
  $(".dropdown").selectmenu();
});


//slider
var TIMEOUT = 4000;
var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');
  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);

  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}


//scroll to top
var toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("up");
  } else {
    toTop.classList.remove("up");
  }
})




//Events on scroll 

AOS.init({
  offset: 120,
  duration: 700,
  easing: "ease-in-out",
});


AOS.init({
  disable: 'mobile'
});

AOS.init({
  disable: function () {
    var maxWidth = 560;
    return window.innerWidth < maxWidth;
  }
});