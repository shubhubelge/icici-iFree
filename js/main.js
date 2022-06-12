'use strict';
var keyFeaturesSectionSwiper = new Swiper(".keyFeaturesSectionSwiper", {
  lazy: true,
  slidesPerView: 1,
  spaceBetween: 100,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 60,
      slidesPerGroup: 3,
      loopFillGroupWithBlank: true,
    },
  }

});

const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

let navbarlinks = select(".nav_bar .scrollto", true);
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("nav-active");
    } else {
      navbarlink.classList.remove("nav-active");
    }
  });
};

const scrollto = (el) => {
  let header = select(".header_container");
  let offset = header.offsetHeight;
  let elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos - offset,
    behavior: "smooth",
  });
};
window.addEventListener("load", () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  }
});

$(".nav_bar").on("click", ".scrollto", function (e) {
  $('.nav_bar_container').removeClass('d-block');
  if (select(this.hash)) {
    e.preventDefault();
    $(".menu").click();
    scrollto(this.hash);
  }
});

window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);


//start script for accordian in faq page
$(function() {
  $('.faqtitle').click(function(j) {

    var dropDown = $(this).closest('.faqbx').find('.faqdesc');
    $(this).closest('.acc').find('.faqdesc').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.faqtitle.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});
//end script for accordian in faq page

$(document).ready(function(){
  $(".faqbx").slice(0, 5).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".faqbx:hidden").slice(0, 19).slideDown();
    if($(".faqbx:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("d-none");
    }
  });
  
})
$('.menu-btn').on('click', function(){
  if($('.nav_bar_container.d-block').length){
    $('.nav_bar_container').removeClass('d-block')

  }else{
    $('.nav_bar_container').addClass('d-block')

  }
})

// images lazy
// Initialize library to lazy load images
var observer = lozad();
//   '.lozad', {
//   threshold: 0.1,
//   enableAutoReload: true,
//   load: function(el) {
//       el.src = el.getAttribute("data-src");
//       el.onload = function() {
//           toastr["success"](el.localName.toUpperCase() + " " + el.getAttribute("data-index") + " lazy loaded.")
//       }
//   }
// })
observer.observe()
var backgroundObserver = lozad('.lozad-background', {
  threshold: 0.1
})
backgroundObserver.observe()