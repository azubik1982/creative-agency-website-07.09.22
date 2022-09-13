$(function(){
    $('.top-slider').slick({
        dots: true,
        // speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {

            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false
            }
          }
        ]
      });

});
