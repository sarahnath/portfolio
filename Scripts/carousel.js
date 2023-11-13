
const SLIDES = $(".first-row > .hbox");


function nextSlide() {
  let nextNum = SLIDES.index($(".hbox:not(.hidden)")) + 1 + 1;
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".hbox:not(.hidden)")) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
}

$("#carousel-next-button").click(function() {
   nextSlide();
  });

$("#carousel-previous-button").click(function() {
    prevSlide();
    });

$("#nav-bar").click(function() {
  $(".nav").removeClass("hidden");
});

$("#nav-bar").click(function() {
  if ($("nav").hasClass("hidden")) {
      $("nav").removeClass("hidden");
  } else {
    $("nav").addClass("hidden");
  }
});

$(window).resize(function() {
  if ($(window).width() < 700) {
    $("#nav-bar").removeClass("hidden");
  } else {
    $("#nav-bar").addClass("hidden")
  }
});

$(window).resize(function() {
  if ($(window).width() < 700) {
    $("nav").addClass("hidden");
  } else {
    $("nav").removeClass("hidden")
  }
});

$(document).ready(function() {
  if ($(window).width() < 700) {
  $("#nav-bar").removeClass("hidden");
  } else {
    $("#nav-bar").addClass("hidden");
  }
  });

  $(document).ready(function() {
    if ($(window).width() < 700) {
    $("nav").addClass("hidden");
    } else {
      $("nav").removeClass("hidden");
    }
    });
