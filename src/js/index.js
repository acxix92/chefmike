$(document).ready(function() {

  // typing animation
  (function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 80);
    };
    
  })(jQuery);

  // input text for typing animation 
  $("#holder").writeText("CHEF");

  // initialize wow.js
  new WOW().init();
    
  // Push the body and the nav over by 285px over
  var main = function() {
    $('.fa-bars').click(function() {
      $('.nav-screen').animate({
        right: "0px"
      }, 200);

      $('body').animate({
        right: "285px"
      }, 200);
    });

    // Then push them back */
    $('.fa-times').click(function() {
      $('.nav-screen').animate({
        right: "-285px"
      }, 200);

      $('body').animate({
        right: "0px"
      }, 200);
    });

    $('.nav-links a').click(function() {
      $('.nav-screen').animate({
        right: "-285px"
      }, 500);

      $('body').animate({
        right: "0px"
      }, 500);
    });
  };

  $(document).ready(main);
  
  // initiate full page scroll

  $('#fullpage').fullpage({
    scrollBar: true,
    responsiveWidth: 900,
    navigation: true,
    navigationTooltips: ['home', 'about', 'projects', 'press', 'events', 'thefarm', 'contact', 'connect'],
    anchors: ['home', 'about', 'projects', 'press', 'events', 'thefarm', 'contact', 'connect'],
    menu: '#myMenu',
    fitToSection: false,
    // autoScrolling: false, // maybe use this, test out first
    normalScrollElements: '.scrollme',
    scrollOverflowReset: true,

    afterLoad: function ( anchorLink, index){
      var loadedSection = $(this);
  

      //using index
      if(index==1){
        /* add opacity to arrow */
        $('.fa-chevron-down').each(function(){
          $(this).css('opacity','2')
        });
        $('.header-links a').each(function(){
          $(this).css('color','white')
        });
        $('.header-links').css("background-color","transparent");
      }

      else if(index!=1){
        $('.header-links a').each(function(){
          $(this).css('color','black')
        });
        $('.header-links').css('background-color', 'white');
      }

      //using index
      if(index == 2){

        /* animate skill bars */
        $('.skillbar').each(function(){
          $(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
          },2500);
        });
      }
    }
  });
 

  // move section down one
  $(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on('click', '#about', function(){
    $.fn.fullpage.moveTo(2);
  });

  $(document).on('click', '#projects', function(){
    $.fn.fullpage.moveTo(3);
  });

  $(document).on('click', '#press', function(){
    $.fn.fullpage.moveTo(4);
  });

  $(document).on('click', '#events', function(){
    $.fn.fullpage.moveTo(5);
  });

  $(document).on('click', '#thefarm', function(){
    $.fn.fullpage.moveTo(6);
  });

  $(document).on('click', '#contact', function(){
    $.fn.fullpage.moveTo(7);
  });

  // smooth scrolling
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 700);
          return false;
        }
      }
    });
  });

 
$('.callme').each(function() {
  var link = $(this).html();
  $(this).contents().wrap('<a href="tel:1-330-233-2516" target="_blank"></a>');
});

$('.emailme').each(function() {
  var link = $(this).html();
  $(this).contents().wrap('<a href="mailto:chefmichael@michaelrafidi.com" target="_blank"></a>');
});

$('.tweetme').each(function() {
  var link = $(this).html();
  $(this).contents().wrap('<a href="https://twitter.com/search?q=chef%20michael%20rafidi&src=typd" target="_blank"></a>');
});

$('.igme').each(function() {
  var link = $(this).html();
  $(this).contents().wrap('<a href="https://www.instagram.com/chefmichaelrafidi/" target="_blank"></a>');
});



  

});