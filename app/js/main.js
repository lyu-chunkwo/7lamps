$(function () {


  const wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 0,
      mobile: true,
      live: true
    }
  );
  wow.init();


  $(".aside__accordion-inner, .aside__third-level, .account__inner-level, .checkout__coupons-body").css("display", "none");

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

  $(".account__first-level").on('click', function () {
    $(".account__first-level").not(this).removeClass("open");
    $(".account__first-level").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });

  $(".checkout__coupons-questionbox").on('click', function () {
    $(".checkout__coupons-questionbox").not(this).removeClass("active");
    $(".checkout__coupons-questionbox").not(this).next().slideUp(300);
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

  $('.checkout__checkbox-style').on('click', function () {
    $('.checkout__delivery-box').toggleClass('active');
  });


  $('.account__console-link').on('click', function (e) {
    e.preventDefault();
    $('.account__console-link').removeClass('active');
    $(this).addClass('active');

    $('.account__text').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });


  // $('.account__console-link').on('click', function () {
  //   $('.account__console-link').toggleClass('active');
  // });


  // $('.account__console-link').on('click', function () {
  //   $('.account__console-link').removeClass('active');
  //   $(this).addClass('active');
  // });

});