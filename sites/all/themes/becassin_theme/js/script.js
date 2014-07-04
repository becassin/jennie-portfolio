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
    var _interval = 200;
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
  });
  
  Drupal.behaviors.mobileMenu = {
    attach: function (context) {
      createMobileMenu();
    }
  }
})(jQuery);





