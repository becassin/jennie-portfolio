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
    resizeProjects();
    
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
  
  function resizeProjects() {
    if($('body.page-node.node-type-project').length) {
      
      var height = $('body').height();
      $('.node-project .slider .slider_inner .field-name-field-images .rslides .field-item').css('line-height', height+'px');

    }
  }
  
  $( document ).ready(function() {
  });

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
        resizeProjects();
        gallery.find('.close_button').addClass('jambon').click(function(){
          gallery.find('.slider_inner').html(sliders_html);
          gallery.hide();
          $('body').css('overflow','auto');
        });
      }
    });
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





