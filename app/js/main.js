$(function () {


  $('.product-single__slider').slick({
    asNavFor: '.product-single__slider-sync',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.product-single__slider-sync').slick({
    asNavFor: '.product-single__slider',
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
    dots: false
  });


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


  $(".aside__accordion-inner, .aside__third-level, .account__inner-level, .checkout__coupons-body, .checkout__delivery-box").css("display", "none");

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


  $(".checkout__delivery-checkbox").on("change", function () {
    if ($(this).prop("checked") === true) {
      $('.checkout__delivery-box').slideToggle(300);
    } else {
      $('.checkout__delivery-box').slideUp(300);
    }
  });


  $(".checkout__payment-checkbox").on("change", function () {
    if ($(this).prop("checked") === true) {
      $('.checkout__form-btn').addClass('active');
    } else {
      $('.checkout__form-btn').removeClass('active');
    }
  });


  $(".checkout__payment-radio1").on("change", function () {
    if ($(this).prop("checked") === true) {
      $('.checkout__payment-hiddentext1').slideToggle(300);
      $('.checkout__payment-hiddentext2').slideUp(300);
      $('.checkout__payment-hiddentext3').slideUp(300);
      $('.checkout__payment-radiostyle').addClass('radio-active');
      $('.checkout__payment-radiostyle2').removeClass('radio-active');
      $('.checkout__payment-radiostyle3').removeClass('radio-active');
    }
  });
  $(".checkout__payment-radio2").on("change", function () {
    if ($(this).prop("checked") === true) {
      $('.checkout__payment-hiddentext2').slideToggle(300);
      $('.checkout__payment-hiddentext1').slideUp(300);
      $('.checkout__payment-hiddentext3').slideUp(300);
      $('.checkout__payment-radiostyle2').addClass('radio-active');
      $('.checkout__payment-radiostyle').removeClass('radio-active');
      $('.checkout__payment-radiostyle3').removeClass('radio-active');
    }
  });
  $(".checkout__payment-radio3").on("change", function () {
    if ($(this).prop("checked") === true) {
      $('.checkout__payment-hiddentext3').slideToggle(300);
      $('.checkout__payment-hiddentext2').slideUp(300);
      $('.checkout__payment-hiddentext1').slideUp(300);
      $('.checkout__payment-radiostyle3').addClass('radio-active');
      $('.checkout__payment-radiostyle').removeClass('radio-active');
      $('.checkout__payment-radiostyle2').removeClass('radio-active');
    }
  });


  $(".checkout__payment-checkboxlink").on('click', function () {
    $(".contract").slideToggle(300);
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


  $('.account__console-link').on('click', function (e) {
    e.preventDefault();
    $('.account__console-link').removeClass('active');
    $(this).addClass('active');

    $('.account__text').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });



  $('input, select').styler();

  let inputValue = $('.cart__table-item--price').data('price');
  console.log(inputValue);


  $('#check').change(function () {
    if ($(this).is(":checked")) {
      $('.checkout__checkbox-style').addClass("check-active");
    } else {
      $('.checkout__checkbox-style').removeClass("check-active");
    }
  });

  $('#check-terms').change(function () {
    if ($(this).is(":checked")) {
      $('.checkout__payment-checkboxstyle').addClass("check-active");
    } else {
      $('.checkout__payment-checkboxstyle').removeClass("check-active");
    }
  });

  $('#check-popup').change(function () {
    if ($(this).is(":checked")) {
      $('.popup__check-style').addClass("popup-active");
    } else {
      $('.popup__check-style').removeClass("popup-active");
    }
  });



  $(".product-single__accordion-content").css("display", "none");
  $(".product-single__name").on("click", function () {
    $(".product-single__name").not(this).removeClass("open");
    $(".product-single__name").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });



  $('.product-single__tabs-btn').on('click', function (e) {
    e.preventDefault();
    $('.product-single__tabs-btn').removeClass('active');
    $(this).addClass('active');

    $('.product-single__tab').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });

  $('.product-single__tabs-button').on('click', function (e) {
    e.preventDefault();
    $('.product-single__tabs-button').removeClass('active');
    $(this).addClass('active');
  });

});