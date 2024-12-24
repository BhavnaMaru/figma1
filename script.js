$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navigation: true,
      navigationText: ["", ""],
      pagination: true,

      // Responsive settings
      responsive: {
          0: {
              items: 1,
              nav: true,
              dots: true,
          },
          600: {
              items: 2,
              nav: true,
              dots: true,
          },
          1000: {
              items: 3,
              nav: true,
              dots: true,
          }
      }
  });
});