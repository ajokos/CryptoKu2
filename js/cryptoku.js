function displaylightbox(url, options)
{
   options.items = { src: url };
   options.type = 'iframe';
   $.magnificPopup.open(options);
}
$(document).ready(function()
{
   $("a[href*='#header']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
   });
   $('#headerMenu .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
   $(document).on('click','.headerMenu-navbar-collapse.show',function(e)
   {
      if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
      {
         $(this).collapse('hide');
      }
   });
   $("a[href*='#home']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-68 }, 600, 'easeOutCirc');
   });
   $("#welcome-carousel").on('slid.bs.carousel', function(e)
   {
      var index = $(e.relatedTarget).index();
      switch(index)
      {
         case 0:
            AnimateCss('wb_welcome-text1', 'slide-left-in', 300, 1000);
            AnimateCss('wb_welcome-text2', 'slide-right-in', 1000, 1000);
            AnimateCss('welcome-button1', 'slide-down-in', 2000, 1000);
            break;
         case 1:
            AnimateCss('wb_welcome-text3', 'slide-left-in', 300, 1000);
            AnimateCss('wb_welcome-text4', 'slide-right-in', 1000, 1000);
            AnimateCss('welcome-button2', 'slide-down-in', 2000, 1000);
            break;
         case 2:
            AnimateCss('wb_welcome-text5', 'slide-left-in', 300, 1000);
            AnimateCss('wb_welcome-text6', 'slide-right-in', 1000, 1000);
            AnimateCss('welcome-button3', 'slide-down-in', 2000, 1000);
            break;
      }
   });
   $("#welcome-carousel").bootstrapcarousel({interval:6000, pause: false});
   $("a[href*='#servicesLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_servicesLayoutGrid').offset().top }, 600, 'easeOutCirc');
   });
   $("a[href*='#services']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-68 }, 600, 'easeOutCirc');
   });
   $("a[href*='#buySellLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_buySellLayoutGrid').offset().top }, 600, 'easeOutCirc');
   });
   $("a[href*='#firstStepsLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_firstStepsLayoutGrid').offset().top-68 }, 600, 'easeOutCirc');
   });
   $("a[href*='#LayoutGrid10']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid10').offset().top-68 }, 600, 'easeOutCirc');
   });
   $("a[href*='#caseStudiesLayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_caseStudiesLayoutGrid').offset().top }, 600, 'easeOutCirc');
   });
   $("a[href*='#teamLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_teamLayoutGrid1').offset().top }, 600, 'easeOutSine');
   });
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-68 }, 600, 'easeOutCirc');
   });
   $("a[href*='#links']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_links').offset().top-68 }, 600, 'easeOutCirc');
   });
   $('#wb_videoImageHotspots map').imageMapResize();
   $("#caseStudiesCarousel").bootstrapcarousel({interval:4000, pause: false});
   var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
   if (iOS)
   {
      $('#wb_home,#wb_servicesLayoutGrid,#wb_buySellLayoutGrid,#wb_videoLayoutGrid').css('background-attachment', 'scroll');
   }
});
// NOTE: this code will fix the header at the top of the page. It will also change the background when in fixed mode (via the CSS classes above).
$(document).ready(function()
{
   $("#wb_header").affix({offset:{top: $("#wb_header").offset().top}});
});
