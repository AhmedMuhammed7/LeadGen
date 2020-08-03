$(document).ready(function () {
    
    
    //FOR TESTIMONIAL HEADER
     $('.banner').slick({
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        prevArrow:$('.banner-icon .prev'),
        nextArrow:$('.banner-icon .next'),

    });
    /////////////////////////////////////////////
    //FOR TESTIMONIAL SEC
        $('.testi-show .testi-item').slick({
            prevArrow:$('.testi-show .prev'),
            nextArrow:$('.testi-show .next'),
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay:true,
            autoplaySpeed:2000,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                    breakpoint: 769,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                  }
                },
                {
                    breakpoint: 577,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                  }
                },
              ]

    });
    ////////////////////////////////////////////
    //FOR CLINT-TESTIMONIAL SEC
        $('.clint-testi ').slick({
            //prevArrow:$('.testi-show .prev'),
            //nextArrow:$('.testi-show .next'),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:1000,
            //centerMode: true,
            arrows:false,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  }
                },
                {
                    breakpoint: 769,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                  }
                },
                {
                    breakpoint: 577,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                  }
                },
              ]
    });
    ////////////////////////////////////////
    
    
});