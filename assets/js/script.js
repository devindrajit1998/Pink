// jQuery(document).ready(function ($) {
//     "use strict";
//     $("#testimonials-list").owlCarousel({
//       loop: true,
//       center: true,
//       items: 3,
//       margin: 0,
//       autoplay:true,
//       dots: true,
//       autoplayTimeout: 2000,
//       smartSpeed: 450,
//       responsive: {
//         0: {
//           items: 1,
//         },
//         768: {
//           items: 2,
//         },
//         1280: {
//           items: 3,
//         },
//       },
//     });
//   });

$('.owl-carousel').owlCarousel({
  margin:10,
  loop:true,
  autoWidth:true,
  items:4,
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
})

    