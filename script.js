$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

// Disable right-click on images
$(document).ready(function () {
  $("img").on("contextmenu", function () {
    return false;
  });
});

// Disable right-click on webpage
$(document).bind("contextmenu", function (e) {
  return false;
});

function contact() {
  window.open("https://forms.gle/ueD8HL2uSMGb2GJr7", "_blank");
}
