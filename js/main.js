/* $ */
$(document).ready(function () {
    
    'use strict';
    
    //FOR NAVBAR RESPONSIVE
    if($(window).width() <= 990 ){
        
    $('.nav .icon-nav, .nav ul li a ').click(function () {
            $('.nav-links').animate({
                "height" : "toggle"
    
            });
        });
    }
    ///////////////////////////////////
    //FOR NAVBAR ICON ANIMATION
    var counter = 1;
    $('.nav .icon-nav , .nav ul li a').click(function(){
        counter++;
        if( counter %2 == 0 ){
            $('.nav .icon-nav .inSecond').css({
                "transform" : "rotateY(90deg)"
            });
            $('.nav .icon-nav .inFerst').css({
                "marginBottom" : "-9px",
                "transform" : "rotate(-45deg)"
            });
            $('.nav .icon-nav .inThird').css({
                "marginTop" : "-9px",
                "transform" : "rotate(45deg)"   
            });
            
        }else{
            $('.nav .icon-nav .inSecond').css({
                "transform" : "rotateY(0deg)"
            });
            $('.nav .icon-nav .inFerst').css({
                "margin" : "6px 0",
                "transform" : "rotate(0deg)"
            });
            $('.nav .icon-nav .inThird').css({
                "margin" : "6px 0",
                "transform" : "rotate(0deg)"   
            });
        }
    })
    /////////////////////////////////////////////
    //FOR ANIMATION NAVNAR
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() > 990) {
            $('.nav').css({
                "paddingTop":"40px",
                "paddingBottom":"250px",
                 "background": "transparent" ,
            })
        }else{
            $('.nav').css({
                "paddingTop":"15px",
                "paddingBottom":"0px",
                 "background": "#272727" ,
            })
        }
    });
    $(window).on("scroll",function(){
        if( $(window).scrollTop() > 0  && $(window).width() < 990) {
            $('.nav').css({
                "height":"60px",
            });
            $('.nav .nav-links').css({
                "top":"60px",
            })
        }else{
            $('.nav').css({
                "height":"70px",
            })
            $('.nav .nav-links').css({
                "top":"70px",
            })
        }
    });
    /////////////////////////////////////////
    /*************************************************SCROLL TO ELEMNT**************/
        $('.nav ul li a ').click(function(e){
            e.preventDefault();
            $('html ,body').animate({
                    scrollTop:$('#'+$(this).data('scroll')).offset().top 
                },2000);
            
        });
   /*************************************************SCROLL TO ELEMNT**************/
    /*************************************************ACTIVEING COLOUR NAVBAR**************/
        $(window).on("scroll",function(){
        
        /*$('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var blockId = $(this).attr('id');
                
                $('.nav li a [data-scroll=" ' + blockId + ' "]').addClass('active');
            }
        })*/
        
        if ($(window).scrollTop() > $('.header').offset().top  - $(window).height()  ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(1) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.about').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(2) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.service').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(3) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.project').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(4) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.we-make').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(5) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.clint').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(6) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.ex').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(7) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.contact').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(8) a ').addClass('active')
        }
        
        
        
        
    })
   /*************************************************ACTIVEING COLOUR NAVBAR**************/
    
    /*************************************************SCROLL_TO_TOP**************/
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 900){
            $('.scrollToTop').fadeIn(1000)
        }else{
            $('.scrollToTop').fadeOut(1000)
        }
    })
    $('.scrollToTop').click(function(){
        $('html,body').animate({
            scrollTop : '0'
        },2000)
    })
   /*************************************************SCROLL_TO_TOP**************/
    
    /*************************************************LOADING**************/
    $(window).on("load",function(){
        
        $('.loading .overlay .spinner').fadeOut(1000,function(){
            $(this).parent().fadeOut(1500)
        })
    })
   /*************************************************LOADING**************/
    
   /*************************************************LOADING**************/
    
    //FOR ANIMATION ABOUT
    
    $(window).on("scroll",function(){
        
        
        if($(window).scrollTop() >= $('.about .container .about-content .about-img').offset().top - $(window).height() + 50){
            
            $('.about .container .about-content .about-img').addClass('fadeInLeftBig')
        }
        
    });
    
    //FOR ANIMATION FEATURE ABOUT
    $(window).on("scroll",function(){
        
        
        if($(window).scrollTop() >= $('.about-next .container .about-next-content .about-next-content-text .next-content-icon .next-content-icon-box').offset().top - $(window).height() + 300){
            
            $('.about-next .container .about-next-content .about-next-content-text .next-content-icon .next-content-icon-box').addClass('flipInX')
        }
        
        
    });
    
    //FOR ANIMATION Our Services
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.service .service-content .service-box').offset().top - $(window).height() + 200){
            
            $('.service .service-content .service-box').addClass('lightSpeedIn ')
        }
        
    });
    
    //FOR ANIMATION Our Services
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.project .pro-content .gallery-item .box-img').offset().top - $(window).height() + 200){
            
            $('.project .pro-content .gallery-item .box-img').addClass('zoomIn ')
        }
        
    });
   /*************************************************LOADING**************/
    
});