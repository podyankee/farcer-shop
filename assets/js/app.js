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
    
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0bGV0IG9wZW5TZWFyY2hGb3JtID0gKCkgPT4ge1xyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZWFyY2hfX2ljb24nLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3NlYXJjaC0tb3BlbicpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IGNsZWFyU2VhcmNoRm9ybSA9ICgpID0+IHtcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2VhcmNoX19jbGVhcicsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JCgnLnNlYXJjaF9faW5wdXQnKS52YWwoJycpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IGJhbm5lclNsaWRlciA9ICgpID0+IHtcclxuXHRcdCQoJy5qcy1iYW5uZXInKS5zbGljayh7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdHByZXZBcnJvdzogXCIuYmFubmVyX19uYXZpZ2F0aW9uLS1wcmV2XCIsXHJcblx0XHRcdG5leHRBcnJvdzogXCIuYmFubmVyX19uYXZpZ2F0aW9uLS1uZXh0XCIsXHJcblx0XHRcdGRvdHM6IHRydWUsXHJcblx0XHRcdGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gJzxhIGNsYXNzPVwiYmFubmVyX19kb3RcIj48L2E+JzsgXHJcblx0XHRcdH0sXHJcblx0XHRcdGFwcGVuZERvdHM6ICcuYmFubmVyX19kb3RzJ1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0bGV0IHRhYnMgPSBmdW5jdGlvbiAgKCkge1xyXG5cdFx0JCgnLnRhYnMtbmF2aWdhdGlvbl9faXRlbScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bGV0IHRhYk5hbWUgPSAkKHRoaXMpLmF0dHIoJ3Nob3ctdGFiJyksXHJcblx0XHRcdFx0XHR0YWJzQm9keSA9ICQodGhpcykuY2xvc2VzdCgnLnRhYnMnKS5maW5kKCcudGFic19fYm9keScpWzBdLFxyXG5cdFx0XHRcdFx0dGFiID0gJCh0YWJzQm9keSkuZmluZCgnLicgKyB0YWJOYW1lKTtcclxuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygndGFicy1uYXZpZ2F0aW9uX19pdGVtLS1hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCd0YWJzLW5hdmlnYXRpb25fX2l0ZW0tLWFjdGl2ZScpO1xyXG5cdFx0XHQkKHRhYikuYWRkQ2xhc3MoJ3RhYi0tYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygndGFiLS1hY3RpdmUnKTtcclxuXHRcdFx0aWYgKCQodGFic0JvZHkpLmZpbmQoJyAuanMtcHJvZHVjdHMtbGluZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKCcuanMtcHJvZHVjdHMtbGluZS1zbGlkZXInKS5lYWNoKGZ1bmN0aW9uICAoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnNsaWNrKCdyZWZyZXNoJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0JCgnLmpzLXByb2R1Y3RzLXByZXZfX3NsaWRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5zbGljaygncmVmcmVzaCcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdFx0XHRsZXQgcHJvZHVjdFByZXZTbGlkZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JCgnLmpzLXByb2R1Y3QtcHJldl9fc2xpZGVyJykuZWFjaChmdW5jdGlvbiAoaWR4KSB7XHJcblx0XHRcdFx0XHRsZXQgY2Fyb3VzZWxJZCA9ICdjYXJvdXNlbCcgKyBpZHg7XHJcblx0XHRcdFx0XHR0aGlzLmNsb3Nlc3QoJy5wcm9kdWN0LXByZXYnKS5pZCA9IGNhcm91c2VsSWQ7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnNsaWNrKHtcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0XHRcdFx0ZG90czogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YXJyb3dzOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0c3dpcGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRpbmZpbml0eTogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGFwcGVuZERvdHM6ICcjJyArIGNhcm91c2VsSWQgKyAnIC5wcm9kdWN0LXByZXZfX2NvbG9ycycsXHJcblx0XHRcdFx0XHRcdGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKHNsaWRlciwgaSkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjb2xvciA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmRhdGEoJ2NvbG9yJyk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuICc8YSBjbGFzcz1cInByb2R1Y3QtcHJldl9fY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyBjb2xvciArICcgIFwiID48L2E+JztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblxyXG5cdGxldCBwcm9kdWN0TGluZVNsaWRlciA9IGZ1bmN0aW9uICAoKSB7XHJcblx0XHQkKCcuanMtcHJvZHVjdHMtbGluZS1zbGlkZXInKS5zbGljayh7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogNCxcclxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdHJlc3BvbnNpdmU6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRicmVha3BvaW50OiAxMTM5LFxyXG5cdFx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0XHRcdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGRvdHM6IHRydWUsXHJcblx0XHRcdFx0XHRcdGFwcGVuZERvdHM6ICcucHJvZHVjdHMtbGluZS1zbGlkZXJfX2RvdHMnLFxyXG5cdFx0XHRcdFx0XHRjdXN0b21QYWdpbmc6IGZ1bmN0aW9uIChzbGlkZXIsIGkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICc8ZGl2IGNsYXNzPVwiLnByb2R1Y3RzLWxpbmUtc2xpZGVyX19kb3RcIj48L2Rpdj4nO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDYwMCxcclxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMixcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDQ4MCxcclxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdG9wZW5TZWFyY2hGb3JtKCk7XHJcblx0Y2xlYXJTZWFyY2hGb3JtKCk7XHJcblx0YmFubmVyU2xpZGVyKCk7XHJcblx0dGFicygpO1xyXG5cdHByb2R1Y3RQcmV2U2xpZGVyKCk7XHJcblx0cHJvZHVjdExpbmVTbGlkZXIoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuICAgICJdfQ==
