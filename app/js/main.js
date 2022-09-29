$(function () {


  const wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  );
  wow.init();


  $(".aside__accordion-inner, .aside__third-level").css("display", "none");

  $(".aside__first-level").on('click', function () {
    $(".aside__first-level").not(this).removeClass("open");
    $(".aside__first-level").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });

  $(".aside__second-level").on('click', function () {
    $(".aside__second-level").not(this).removeClass("active");
    $(".aside__second-level").not(this).next().slideUp(300);
    $(this).toggleClass("active");
    $(this).next().slideToggle(300);
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 10) {
      $('.scroll').addClass("active");
    }
    else {
      $('.scroll').removeClass("active");
    }
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 1800) {
      $('.go-up').addClass("active");
    }
    else {
      $('.go-up').removeClass("active");
    }
  });


  $('.header__menu-btn').on('click', function () {
    $('.header__list, .header__menu-btn').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });

});