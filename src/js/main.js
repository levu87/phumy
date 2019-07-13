$(document).ready(function(){
    $('.search-icon').on('click',function(){
        $(this).siblings('.searchbox').toggleClass('active')
    });
    $('.language-active').on('click',function(){
        $(this).siblings('.language-list').toggleClass('active')
    });
    $('.toggle-menu').on('click',function(){
        $('.bar-menu').toggleClass('active')
    });
    $('.section-menu-2 .danhmuc').on('click',function(){
      $('.section-menu-2 .menu-2').slideToggle()
    });
    var ListPageBottom = new MappingListener({
        selector: 'header .main-wrap .main-menu',
        mobileWrapper: 'header .bar-menu',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header .main-wrap .logo',
        desktopMethod: 'insertAfter',
        breakpoint: 1025,
    }).watch()
    var boxsearch = new MappingListener({
        selector: 'header .main-wrap .search',
        mobileWrapper: 'header .bar-menu',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header .main-wrap .main-menu',
        desktopMethod: 'insertAfter',
        breakpoint: 1025,
    }).watch()
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is <= 640px
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30
            }
        },
    });
    $(".box-img").fancybox({
      maxWidth	: 900,
      maxHeight	: 600,
      fitToView	: false,
      width		: '90%',
      height		: '90%',
      autoSize	: false,
      closeClick	: false,
      openEffect	: 'none',
      closeEffect	: 'none',
      iframe: {
        scrolling : 'auto',
        preload   : true
      }
    });
    $(".section-menu-2").waypoint(
      function(direction){
        if(direction == "down"){
          $('header').addClass('sticky');
        }else{
          $('header').removeClass('sticky')
        }
      }, {offset: '100px'}
    )
})