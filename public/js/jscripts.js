 $(document).ready(function() {

     // Hidden menu
     $('.btn-menu, .hidden-menu ul a').click(function () {
         if ($('.hidden-menu').is(':hidden')) {
             $('.hidden-menu').show();
         } else {
             $('.hidden-menu').hide();
         }
     });
//
     // Page scroll
     $("a[rel='m_PageScroll2id']").mPageScroll2id({
         offset: 30
     });
     // Slider
     $("#owl-demo").owlCarousel({
         autoPlay: 3000, //Set AutoPlay to 3 seconds
         items : 5,
         itemsDesktop : [1200,5],
         itemsDesktopSmall : [190,5]
     });
     // Tabs
     $('#responsiveTabsDemo').responsiveTabs({
         startCollapsed: 'tabs'
     });
 });

