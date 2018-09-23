$(document).ready(function(){
    $(document).ready(function () {
	let openSearchForm = () => {
		$(document).on('click', '.search__icon', function () {
			$(this).parent().addClass('search--open');
		});
	};

	let clearSearchForm = () => {
		$(document).on('click', '.search__clear', function () {
			$('.search__input').val('');
		});
	};

	let bannerSlider = () => {
		$('.js-banner').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: ".banner__navigation--prev",
			nextArrow: ".banner__navigation--next",
			dots: true,
			customPaging: function () {
			return '<a class="banner__dot"></a>'; 
			},
			appendDots: '.banner__dots'
		});
	};

	let tabs = function  () {
		$('.tabs-navigation__item').click(function () {
			let tabName = $(this).attr('show-tab'),
					tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
					tab = $(tabsBody).find('.' + tabName);
			$(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
			$(tab).addClass('tab--active').siblings().removeClass('tab--active');
			if ($(tabsBody).find(' .js-products-line-slider').length) {
				$('.js-products-line-slider').each(function  () {
					$(this).slick('refresh');
				});
				$('.js-products-prev__slider').each(function () {
					$(this).slick('refresh');
				});
			}
		});
	};



			let productPrevSlider = function () {
				$('.js-product-prev__slider').each(function (idx) {
					let carouselId = 'carousel' + idx;
					this.closest('.product-prev').id = carouselId;
					$(this).slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false,
						swipe: false,
						infinity: false,
						appendDots: '#' + carouselId + ' .product-prev__colors',
						customPaging: function (slider, i) {
							let color = $(slider.$slides[i]).data('color');
							return '<a class="product-prev__color" style="background-color: ' + color + '  " ></a>';
						}
					});
				});
			};

	let productLineSlider = function  () {
		$('.js-products-line-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1139,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: false,
			
						appendDots: '.products-line-slider__dots',
						customPaging: function (slider, i) {
						return '<div class=".products-line-slider__dot"></div>';
					},
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	};
	let productBorderLineSlider = function  () {
		$('.js-products-border-line-slider').each(function (idx) {
			let productsBorderLineSliderID = "products-border-line-slider-" + idx;
			this.closest('.products-border-line-slider').id = productsBorderLineSliderID;
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				prevArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--prev',
				nextArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--next'
			});
		});
	};

	openSearchForm();
	clearSearchForm();
	bannerSlider();
	tabs();
	productPrevSlider();
	productLineSlider();
	productBorderLineSlider();
});



    });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRsZXQgb3BlblNlYXJjaEZvcm0gPSAoKSA9PiB7XHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlYXJjaF9faWNvbicsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnc2VhcmNoLS1vcGVuJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRsZXQgY2xlYXJTZWFyY2hGb3JtID0gKCkgPT4ge1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZWFyY2hfX2NsZWFyJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKCcuc2VhcmNoX19pbnB1dCcpLnZhbCgnJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRsZXQgYmFubmVyU2xpZGVyID0gKCkgPT4ge1xyXG5cdFx0JCgnLmpzLWJhbm5lcicpLnNsaWNrKHtcclxuXHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0cHJldkFycm93OiBcIi5iYW5uZXJfX25hdmlnYXRpb24tLXByZXZcIixcclxuXHRcdFx0bmV4dEFycm93OiBcIi5iYW5uZXJfX25hdmlnYXRpb24tLW5leHRcIixcclxuXHRcdFx0ZG90czogdHJ1ZSxcclxuXHRcdFx0Y3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiAnPGEgY2xhc3M9XCJiYW5uZXJfX2RvdFwiPjwvYT4nOyBcclxuXHRcdFx0fSxcclxuXHRcdFx0YXBwZW5kRG90czogJy5iYW5uZXJfX2RvdHMnXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRsZXQgdGFicyA9IGZ1bmN0aW9uICAoKSB7XHJcblx0XHQkKCcudGFicy1uYXZpZ2F0aW9uX19pdGVtJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsZXQgdGFiTmFtZSA9ICQodGhpcykuYXR0cignc2hvdy10YWInKSxcclxuXHRcdFx0XHRcdHRhYnNCb2R5ID0gJCh0aGlzKS5jbG9zZXN0KCcudGFicycpLmZpbmQoJy50YWJzX19ib2R5JylbMF0sXHJcblx0XHRcdFx0XHR0YWIgPSAkKHRhYnNCb2R5KS5maW5kKCcuJyArIHRhYk5hbWUpO1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCd0YWJzLW5hdmlnYXRpb25fX2l0ZW0tLWFjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3RhYnMtbmF2aWdhdGlvbl9faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRcdCQodGFiKS5hZGRDbGFzcygndGFiLS1hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCd0YWItLWFjdGl2ZScpO1xyXG5cdFx0XHRpZiAoJCh0YWJzQm9keSkuZmluZCgnIC5qcy1wcm9kdWN0cy1saW5lLXNsaWRlcicpLmxlbmd0aCkge1xyXG5cdFx0XHRcdCQoJy5qcy1wcm9kdWN0cy1saW5lLXNsaWRlcicpLmVhY2goZnVuY3Rpb24gICgpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuc2xpY2soJ3JlZnJlc2gnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQkKCcuanMtcHJvZHVjdHMtcHJldl9fc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnNsaWNrKCdyZWZyZXNoJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0XHRcdGxldCBwcm9kdWN0UHJldlNsaWRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKCcuanMtcHJvZHVjdC1wcmV2X19zbGlkZXInKS5lYWNoKGZ1bmN0aW9uIChpZHgpIHtcclxuXHRcdFx0XHRcdGxldCBjYXJvdXNlbElkID0gJ2Nhcm91c2VsJyArIGlkeDtcclxuXHRcdFx0XHRcdHRoaXMuY2xvc2VzdCgnLnByb2R1Y3QtcHJldicpLmlkID0gY2Fyb3VzZWxJZDtcclxuXHRcdFx0XHRcdCQodGhpcykuc2xpY2soe1xyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdFx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRzd2lwZTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGluZmluaXR5OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0YXBwZW5kRG90czogJyMnICsgY2Fyb3VzZWxJZCArICcgLnByb2R1Y3QtcHJldl9fY29sb3JzJyxcclxuXHRcdFx0XHRcdFx0Y3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoc2xpZGVyLCBpKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNvbG9yID0gJChzbGlkZXIuJHNsaWRlc1tpXSkuZGF0YSgnY29sb3InKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJzxhIGNsYXNzPVwicHJvZHVjdC1wcmV2X19jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJyArIGNvbG9yICsgJyAgXCIgPjwvYT4nO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHJcblx0bGV0IHByb2R1Y3RMaW5lU2xpZGVyID0gZnVuY3Rpb24gICgpIHtcclxuXHRcdCQoJy5qcy1wcm9kdWN0cy1saW5lLXNsaWRlcicpLnNsaWNrKHtcclxuXHRcdFx0c2xpZGVzVG9TaG93OiA0LFxyXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0cmVzcG9uc2l2ZTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDExMzksXHJcblx0XHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdFx0XHRpbmZpbml0ZTogZmFsc2UsXHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHRhcHBlbmREb3RzOiAnLnByb2R1Y3RzLWxpbmUtc2xpZGVyX19kb3RzJyxcclxuXHRcdFx0XHRcdFx0Y3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoc2xpZGVyLCBpKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAnPGRpdiBjbGFzcz1cIi5wcm9kdWN0cy1saW5lLXNsaWRlcl9fZG90XCI+PC9kaXY+JztcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRicmVha3BvaW50OiA2MDAsXHJcblx0XHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDIsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAyXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRicmVha3BvaW50OiA0ODAsXHJcblx0XHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGxldCBwcm9kdWN0Qm9yZGVyTGluZVNsaWRlciA9IGZ1bmN0aW9uICAoKSB7XHJcblx0XHQkKCcuanMtcHJvZHVjdHMtYm9yZGVyLWxpbmUtc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoaWR4KSB7XHJcblx0XHRcdGxldCBwcm9kdWN0c0JvcmRlckxpbmVTbGlkZXJJRCA9IFwicHJvZHVjdHMtYm9yZGVyLWxpbmUtc2xpZGVyLVwiICsgaWR4O1xyXG5cdFx0XHR0aGlzLmNsb3Nlc3QoJy5wcm9kdWN0cy1ib3JkZXItbGluZS1zbGlkZXInKS5pZCA9IHByb2R1Y3RzQm9yZGVyTGluZVNsaWRlcklEO1xyXG5cdFx0XHQkKHRoaXMpLnNsaWNrKHtcclxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdFx0aW5maW5pdGU6IGZhbHNlLFxyXG5cdFx0XHRcdHByZXZBcnJvdzogJyMnICsgcHJvZHVjdHNCb3JkZXJMaW5lU2xpZGVySUQgKyAnIC5wcm9kdWN0cy1ib3JkZXItbGluZS1zbGlkZXJfX2J0bi0tcHJldicsXHJcblx0XHRcdFx0bmV4dEFycm93OiAnIycgKyBwcm9kdWN0c0JvcmRlckxpbmVTbGlkZXJJRCArICcgLnByb2R1Y3RzLWJvcmRlci1saW5lLXNsaWRlcl9fYnRuLS1uZXh0J1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdG9wZW5TZWFyY2hGb3JtKCk7XHJcblx0Y2xlYXJTZWFyY2hGb3JtKCk7XHJcblx0YmFubmVyU2xpZGVyKCk7XHJcblx0dGFicygpO1xyXG5cdHByb2R1Y3RQcmV2U2xpZGVyKCk7XHJcblx0cHJvZHVjdExpbmVTbGlkZXIoKTtcclxuXHRwcm9kdWN0Qm9yZGVyTGluZVNsaWRlcigpO1xyXG59KTtcclxuXHJcblxyXG5cclxuICAgIH0pOyJdfQ==
