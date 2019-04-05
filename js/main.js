(function ($) {
  "use strict";
  /*
    * 1. Slide Carousel
    */
  $(document).ready(function () {
    $('.owl-carousel').each(function (index, el) {
      var config = $(this).data();
      config.navText = ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'];
      config.smartSpeed = "800";

      if ($(this).hasClass('owl-style2')) {
        config.animateOut = 'fadeOut';
        config.animateIn = 'fadeIn';
      }
      if ($(this).hasClass('dotsData')) {
        config.dotsData = "true";
      }
      $(this).owlCarousel(config);
    });
  });

  //$('.info-footer .footer-left .hi-items .title .fa').click(function() {
  //var grand = $(this).parent().parent();
  //    if ($(this).hasClass("fa-plus")) {
  //   	$('.hi-items .title .fa').removeClass("fa-minus").addClass("fa-plus");
  //   	$('.alias-footer',$('.footer-left')).slideUp();
  //   	$(this).removeClass("fa-plus");
  //   	$(this).addClass("fa-minus");
  //   	$('.alias-footer',$(grand)).slideDown();
  //       } else {
  //           $(this).removeClass("fa-minus");
  //   		$(this).addClass("fa-plus");
  //   		$('.alias-footer',$(grand)).slideUp();
  //       }
  //       return false;
  //});
  
    // Dropdown Help Detail 
  $('.items-browse .help-bottom .info-help-bottom .link-help').click(function () {
    var grand = $(this).parent().parent();
    var abc = $(this).parent();
    if ($(abc).hasClass("activetab")) {
      $('.fa', $(this)).removeClass("fa-minus").addClass("fa-plus");
      $(abc).removeClass("activetab");
      $('.alias-help', $(abc)).slideUp();
    } else {
      $('.help-bottom .info-help-bottom li.activetab a .fa').removeClass("fa-minus").addClass("fa-plus");
      $('.help-bottom .info-help-bottom li.activetab .alias-help').slideUp();
      $('.help-bottom .info-help-bottom li').removeClass('activetab');
      $('.fa', $(this)).removeClass("fa-plus").addClass("fa-minus");
      $(abc).addClass("activetab");
      $('.alias-help', $(abc)).slideDown();
    }
    return false;
  });

  // Sidebar
  $('nav#menu').mmenu();
  $('nav#nlogin').mmenu({
    offCanvas: {
      position: "right",
      zposition: "front"
    }
  }, {
    offCanvas: {
      pageNodeType: "form"
    }
  });
  $('nav#nuser').mmenu({
    offCanvas: {
      position: "right",
      zposition: "front"
    }
  }, {
    offCanvas: {
      pageNodeType: "form"
    }
  });
})(jQuery); // End of use strict
