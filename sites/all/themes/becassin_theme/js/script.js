/* Author: Dan Linn */
(function($) {
  $(window).resize(function(){
    if(!$(".mobileselect").length) {
      createMobileMenu();
    } else if ($(window).width()>=480) {
      $('#navigation ul').show();
      $('.mobileselect').hide();
    } else {
      $('#navigation ul').hide();
      $('.mobileselect').show();
    }
  });
  function createMobileMenu(){
    $('#navigation ul').mobileSelect({
      autoHide: true, // Hide the ul automatically
      defaultOption: "Navigation", // The default select option
      deviceWidth: 480, // The select will be added for screensizes smaller than this
      appendTo: '', // Used to place the drop-down in some location other than where the primary nav exists
      className: 'mobileselect', // The class name applied to the select element
      useWindowWidth: true // Use the width of the window instead of the width of the screen
    });
  }
  function displayProjects(){
    var page = $('div.page-projects');
    var _interval = 100;
    if(page.length){
      var items = page.find('div.view-content .views-row').get().sort(function() { return 0.5 - Math.random() });
      var count = 0;
      var tid = setInterval(function(){
        var item = items.pop();
        $(item).animate({ opacity: 1 });;
        count ++;
        if(!items.length){
          clearInterval(tid);
        }
      }, _interval);
    }
  }

  $( window ).load(function() {
    displayProjects();
    var gallery = $('.node-project .slider');
    var sliders_html = gallery.find('.slider_inner').html();
    var gallery_triggers = $('.node-project .content .field-items .field-item');
    gallery_triggers.click(function(){
      if(!gallery.is(":visible")){
        var startnr = $(this).index();
        gallery.fadeIn();
        $('body').css('overflow','hidden');
        gallery.find('.field-items').responsiveSlides({
          auto: false,
          startidx: startnr, 
          nav: true,
          pager: true
        });
        gallery.find('.close_button').addClass('jambon').click(function(){
          gallery.find('.slider_inner').html(sliders_html);
          gallery.hide();
          $('body').css('overflow','auto');
        });
      }
    });
    // if( $('.js-homepage-gallery').length ) {
    //   var transition = function() {
    //     console.log('transition');
    //     var active_slide = $('.js-homepage-gallery').find('.slide:visible').addClass('zob');
    //     if (active_slide.next().length) {
    //       next_slide = active_slide.next();
    //     } else {
    //       next_slide = $('.js-homepage-gallery').find('.slide').first();
    //     }
        
    //     next_slide.fadeIn('slow', function(){
    //       active_slide.hide();
    //     });
    //   };
    //   setInterval(transition, 4000);
    // }
    $('.js-homepage-gallery').cycle({
      fx: 'fade',
      slideExpr: '.slide'
    });
  });
  
  Drupal.behaviors.mobileMenu = {
    attach: function (context) {
      createMobileMenu();
    }
  }
})(jQuery);





