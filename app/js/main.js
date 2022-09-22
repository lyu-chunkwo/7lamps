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


  $(".banner__accordion-inner, .banner__third-level").css("display", "none");


  $(".banner__first-level").on('click', function () {
    $(".banner__first-level").not(this).removeClass("open");
    $(".banner__first-level").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });

  $(".banner__second-level").on('click', function () {
    $(".banner__second-level").not(this).removeClass("active");
    $(".banner__second-level").not(this).next().slideUp(300);
    $(this).toggleClass("active");
    $(this).next().slideToggle(300);
  });


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 10) {
      $('.scroll').addClass("active");
    }
    else {
      $('.scroll').removeClass("active");
    }
  });

});