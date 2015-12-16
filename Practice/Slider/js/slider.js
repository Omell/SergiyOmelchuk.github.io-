function slider (selector, options) {
    var sliderNode= document.querySelector(selector);
        sliderImagesNode = sliderNode.querySelector('.slider__images-wrap');
        prevSliderNode = sliderNode.querySelector('.slider__pager_previous');
        nextSliderNode = sliderNode.querySelector('.slider__pager_next');
        paginationNode = sliderNode.querySelector('.slider__pagination');

    var currentSlideIndex = option.currentSlide || 0 ;
        imagesCount = sliderImagesNode.children.length;
        slideSize = sliderImagesNode.offsetWidth
}