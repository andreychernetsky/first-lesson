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
     // $('#responsiveTabsDemo').responsiveTabs({
     //     startCollapsed: 'accordion'
     // });
 });
 var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var SWslider = function () {
     function SWslider(containerName, slideName, delay) {var prevIcon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '<';var nextIcon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '>';_classCallCheck(this, SWslider);
         this.container = document.querySelector('' + containerName);
         this.slides = Array.from(document.querySelectorAll('' + slideName));
         this.delay = delay;
         this.prevIcon = prevIcon;
         this.nextIcon = nextIcon;
         this.navigateClasses = [
             { name: 'slider-sw__nav-prev', icon: '' + this.prevIcon, dir: 'left' },
             { name: 'slider-sw__nav-next', icon: '' + this.nextIcon, dir: 'right' }];

         this.paginationItems = [];
         this.autoplayStopID = null;
         this.currentIndexes = null;
         this.direction = -1;

         this.slideChange = this.getSlideIndexes();
         this.currentIndexes = this.slideChange(this.direction);
         this.setClasses();
         this.createNavigation();
         this.setPagination();
         this.setAutoPlay = this.setAutoPlay.bind(this);

         this.setAutoPlay();
         this.setHover();
     }_createClass(SWslider, [{ key: 'createNavigation', value: function createNavigation()
     {var _this = this;
         this.navigateClasses.forEach(function (v) {
             var span = document.createElement('span');
             span.className = 'slider-sw__nav ' + v.name;
             span.innerHTML = '' + v.icon;
             if (v.dir === 'left') {
                 span.addEventListener('click', function () {
                     _this.prevAction();
                 });
             } else {
                 span.addEventListener('click', function () {
                     _this.nextAction();
                 });
             }
             _this.container.appendChild(span);
         });
     } }, { key: 'prevAction', value: function prevAction()
     {
         this.setSlides('decrement');
         this.setClasses();
         this.setActivePagination();
     } }, { key: 'nextAction', value: function nextAction()
     {
         this.setSlides('increment');
         this.setClasses();
         this.setActivePagination();
     } }, { key: 'setPagination', value: function setPagination()
     {var _this2 = this;
         var pagination = document.createElement('div');
         pagination.className = 'slider-sw__pagination';
         for (var i = 0; i < this.slides.length; i++) {
             var span = document.createElement('span');
             span.className = 'slider-sw__pagination-item ' + (this.currentSlide === i ? 'slider-sw__pagination-item--active' : '');
             span.setAttribute('data-pagination-item-id', '' + (i + 1));
             this.paginationItems.push(span);
             pagination.appendChild(span);
         }
         pagination.addEventListener('click', function (e) {
             _this2.changeActivePaginationItem(e);
         });
         this.container.appendChild(pagination);
     } }, { key: 'setActivePagination', value: function setActivePagination()
     {
         this.paginationItems.forEach(function (v) {
             v.classList.remove('slider-sw__pagination-item--active');
         });
         this.paginationItems[this.currentIndexes[1]].classList.add('slider-sw__pagination-item--active');
     } }, { key: 'changeActivePaginationItem', value: function changeActivePaginationItem(
         e) {

         this.currentSlide = +e.target.getAttribute('data-pagination-item-id');

         var steps = this.currentIndexes[1] - this.currentSlide;

         var stopID1 = null;
         if (steps < 0) {
             for (var i = steps; i < 0; i++) {
                 this.currentIndexes = this.slideChange(1);
             }
         } else if (steps > 0) {
             for (var _i = steps; _i > 0; _i--) {
                 this.currentIndexes = this.slideChange(-1);
             }
         }
         this.setSlides();
         this.setClasses();
         this.setActivePagination();
     } }, { key: 'getSlideIndexes', value: function getSlideIndexes()
     {
         var arr = [].concat(_toConsumableArray(this.slides));
         var indexes = arr.map(function (v, i) {return i;});
         var len = indexes.length - 1;
         return function (step) {
             indexes = indexes.map(function (v) {
                 v += step;
                 if (v < 0) {
                     v = len;
                 } else if (v > len) {
                     v = 0;
                 }
                 return v;
             });
             return indexes;
         };
     } }, { key: 'setSlides', value: function setSlides(
         dir) {
         dir === 'increment' ? this.direction = 1 : this.direction = -1;
         this.currentIndexes = this.slideChange(this.direction);
     } }, { key: 'setClasses', value: function setClasses(
         p, c, n) {
         this.slides.forEach(function (v) {
             v.classList.remove('slider-sw__prev');
             v.classList.remove('slider-sw__next');
             v.classList.remove('slider-sw__current');
         });
         this.slides[this.currentIndexes[0]].classList.add('slider-sw__prev');
         this.slides[this.currentIndexes[2]].classList.add('slider-sw__next');
         this.slides[this.currentIndexes[1]].classList.add('slider-sw__current');

     } }, { key: 'setAutoPlay', value: function setAutoPlay()
     {var _this3 = this;
         this.autoplayStopID = setInterval(function () {
             _this3.setSlides('increment');
             _this3.setClasses();
             _this3.setActivePagination();
         }, this.delay);
     } }, { key: 'setHover', value: function setHover()
     {var _this4 = this;
         this.container.addEventListener('mouseover', function () {
             clearInterval(_this4.autoplayStopID);
         });
         this.container.addEventListener('mouseout', function () {
             _this4.setAutoPlay();
         });
     } }]);return SWslider;}();


 new SWslider('.slider-sw', '.slider-sw__slide', 1500);

