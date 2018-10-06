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

	let categorySlider = function () {
		$('.js-category-slider').slick({
			slidesToShow: 6,
			arrow: false
		});
	};

	let select = function  () {
		$(document).on('click', '.select__header',function  () {
			$(this).parent().toggleClass('select--open').siblings('.filter__row').find('.select').removeClass('select--open');;
		});
		$(document).on('click', '.select-list__item',function  () {
			let current = $(this).closest('.select').find('select__current')[0];
			$(this).closest('.select').removeClass('select--open');
			$(current).text($(this).text());
		});
	};

	openSearchForm();
	clearSearchForm();
	bannerSlider();
	tabs();
	productPrevSlider();
	productLineSlider();
	productBorderLineSlider();
	categorySlider();
	select();
});



    });