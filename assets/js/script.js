jQuery(document).ready(function ($) {
  "use strict";
  var testimonialsSlider = $("#testimonials-list");
  
  testimonialsSlider.owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1280: {
        items: 3,
      },
    },
  });

  // Control Buttons
  var prevButton = $(".prev-button");
  var nextButton = $(".next-button");

  prevButton.click(function () {
    testimonialsSlider.trigger("prev.owl.carousel");
  });

  nextButton.click(function () {
    testimonialsSlider.trigger("next.owl.carousel");
  });
});

