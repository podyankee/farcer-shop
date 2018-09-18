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
			customPaging: function  (slider, i) {
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
						infinite: true,
						dots: true,
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

	openSearchForm();
	clearSearchForm();
	bannerSlider();
	tabs();
	productPrevSlider();
	productLineSlider();
});



    });
    
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRsZXQgb3BlblNlYXJjaEZvcm0gPSAoKSA9PiB7XHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlYXJjaF9faWNvbicsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnc2VhcmNoLS1vcGVuJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRsZXQgY2xlYXJTZWFyY2hGb3JtID0gKCkgPT4ge1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZWFyY2hfX2NsZWFyJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKCcuc2VhcmNoX19pbnB1dCcpLnZhbCgnJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRsZXQgYmFubmVyU2xpZGVyID0gKCkgPT4ge1xyXG5cdFx0JCgnLmpzLWJhbm5lcicpLnNsaWNrKHtcclxuXHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0cHJldkFycm93OiBcIi5iYW5uZXJfX25hdmlnYXRpb24tLXByZXZcIixcclxuXHRcdFx0bmV4dEFycm93OiBcIi5iYW5uZXJfX25hdmlnYXRpb24tLW5leHRcIixcclxuXHRcdFx0ZG90czogdHJ1ZSxcclxuXHRcdFx0Y3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiAnPGEgY2xhc3M9XCJiYW5uZXJfX2RvdFwiPjwvYT4nOyBcclxuXHRcdFx0fSxcclxuXHRcdFx0YXBwZW5kRG90czogJy5iYW5uZXJfX2RvdHMnXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRsZXQgdGFicyA9IGZ1bmN0aW9uICAoKSB7XHJcblx0XHQkKCcudGFicy1uYXZpZ2F0aW9uX19pdGVtJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsZXQgdGFiTmFtZSA9ICQodGhpcykuYXR0cignc2hvdy10YWInKSxcclxuXHRcdFx0XHRcdHRhYnNCb2R5ID0gJCh0aGlzKS5jbG9zZXN0KCcudGFicycpLmZpbmQoJy50YWJzX19ib2R5JylbMF0sXHJcblx0XHRcdFx0XHR0YWIgPSAkKHRhYnNCb2R5KS5maW5kKCcuJyArIHRhYk5hbWUpO1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCd0YWJzLW5hdmlnYXRpb25fX2l0ZW0tLWFjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3RhYnMtbmF2aWdhdGlvbl9faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRcdCQodGFiKS5hZGRDbGFzcygndGFiLS1hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCd0YWItLWFjdGl2ZScpO1xyXG5cdFx0XHRpZiAoJCh0YWJzQm9keSkuZmluZCgnIC5qcy1wcm9kdWN0cy1saW5lLXNsaWRlcicpLmxlbmd0aCkge1xyXG5cdFx0XHRcdCQoJy5qcy1wcm9kdWN0cy1saW5lLXNsaWRlcicpLmVhY2goZnVuY3Rpb24gICgpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuc2xpY2soJ3JlZnJlc2gnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQkKCcuanMtcHJvZHVjdHMtcHJldl9fc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnNsaWNrKCdyZWZyZXNoJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGxldCBwcm9kdWN0UHJldlNsaWRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJy5qcy1wcm9kdWN0LXByZXZfX3NsaWRlcicpLmVhY2goZnVuY3Rpb24gKGlkeCkge1xyXG5cdFx0XHRsZXQgY2Fyb3VzZWxJZCA9ICdjYXJvdXNlbCcgKyBpZHg7XHJcblx0XHRcdHRoaXMuY2xvc2VzdCgnLnByb2R1Y3QtcHJldicpLmlkID0gY2Fyb3VzZWxJZDtcclxuXHRcdCQodGhpcykuc2xpY2soe1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0XHRzd2lwZTogZmFsc2UsXHJcblx0XHRcdGluZmluaXR5OiBmYWxzZSxcclxuXHRcdFx0YXBwZW5kRG90czogJyMnICsgY2Fyb3VzZWxJZCArICcgLnByb2R1Y3QtcHJldl9fY29sb3JzJyxcclxuXHRcdFx0Y3VzdG9tUGFnaW5nOiBmdW5jdGlvbiAgKHNsaWRlciwgaSkge1xyXG5cdFx0XHRcdGxldCBjb2xvciA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmRhdGEoJ2NvbG9yJyk7XHJcblx0XHRcdFx0cmV0dXJuICc8YSBjbGFzcz1cInByb2R1Y3QtcHJldl9fY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyBjb2xvciArICcgIFwiID48L2E+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IHByb2R1Y3RMaW5lU2xpZGVyID0gZnVuY3Rpb24gICgpIHtcclxuXHRcdCQoJy5qcy1wcm9kdWN0cy1saW5lLXNsaWRlcicpLnNsaWNrKHtcclxuXHRcdFx0c2xpZGVzVG9TaG93OiA0LFxyXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0cmVzcG9uc2l2ZTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDExMzksXHJcblx0XHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdFx0XHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0ZG90czogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YXBwZW5kRG90czogJy5wcm9kdWN0cy1saW5lLXNsaWRlcl9fZG90cycsXHJcblx0XHRcdFx0XHRcdGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKHNsaWRlciwgaSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgY2xhc3M9XCIucHJvZHVjdHMtbGluZS1zbGlkZXJfX2RvdFwiPjwvZGl2Pic7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YnJlYWtwb2ludDogNjAwLFxyXG5cdFx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YnJlYWtwb2ludDogNDgwLFxyXG5cdFx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0b3BlblNlYXJjaEZvcm0oKTtcclxuXHRjbGVhclNlYXJjaEZvcm0oKTtcclxuXHRiYW5uZXJTbGlkZXIoKTtcclxuXHR0YWJzKCk7XHJcblx0cHJvZHVjdFByZXZTbGlkZXIoKTtcclxuXHRwcm9kdWN0TGluZVNsaWRlcigpO1xyXG59KTtcclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgIl19
