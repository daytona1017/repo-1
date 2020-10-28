$(document).ready(function() {
	$('#nav-icon1').click(function(){
      $(this).toggleClass('open');
      $('.logo').toggleClass('open');
      $('.mobile-nav').fadeToggle();
    });

  $('.quest-head').click(function(){
    $(this).next().slideToggle();
  });

   $(function() {
    $('.footer-height').matchHeight();
   });

   $(function() {
    $('.features-box').matchHeight();
   });

   $(function() {
    $('.testimonials-box').matchHeight();
   });

   $(function() {
    $('.price-top').matchHeight();
   });



   /* Tabs Activiation
  ================================================== */

  var tabs = $('ul.tabs');

  tabs.each(function(i) {

    //Get all tabs
    var tab = $(this).find('> li > a');
    tab.click(function(e) {

      //Get Location of tab's content
      var contentLocation = $(this).attr('href');

      //Let go if not a hashed one
      if(contentLocation.charAt(0)=="#") {

        e.preventDefault();

        //Make Tab Active
        tab.removeClass('active');
        $(this).addClass('active');

        //Show Tab Content & add active class
        $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

      }
    });
  });


  /* Height Match 
  ====================================================*/
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.height-match').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });

});


   /* Tabs Activiation
  ================================================== */

  function displayForm(c){ 
    if(c.value =="1")  {
        document.getElementById("yearly1").style.display='block'; 
        document.getElementById("yearly2").style.display='block'; 
        document.getElementById("yearly3").style.display='block'; 
        document.getElementById("monthly1").style.display='none'; 
        document.getElementById("monthly2").style.display='none'; 
        document.getElementById("monthly3").style.display='none'; 
    } 
    else if (c.value == "2") { 
        document.getElementById("monthly1").style.display='block'; 
        document.getElementById("monthly2").style.display='block'; 
        document.getElementById("monthly3").style.display='block'; 
        document.getElementById("yearly1").style.display='none'; 
        document.getElementById("yearly2").style.display='none'; 
        document.getElementById("yearly3").style.display='none'; 
    } 
}  

$('#country').selectize({
    create: true,
    sortField: {
      field: 'text',
      direction: 'asc'
    },
    dropdownParent: 'body'
  });