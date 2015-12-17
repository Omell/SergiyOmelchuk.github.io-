function Slider (selector, options) {
    var __self = this;
    var sliderNode= document.querySelector(selector);
        sliderImagesNode = sliderNode.querySelector('.slider__images-wrap');
        prevSliderNode = sliderNode.querySelector('.slider__pager_previous');
        nextSliderNode = sliderNode.querySelector('.slider__pager_next');
        paginationNode = sliderNode.querySelector('.slider__pagination');

    var currentSlideIndex =  0 ;
        imagesCount = sliderImagesNode.children.length;
        slideSize = sliderImagesNode.offsetWidth;


    this.nextSlide = function () {
        if (currentSlideIndex=== imagesCount - 1) {
            currentSlideIndex= 0;
            return;
        }
        currentSlideIndex++;
    };
    this.prevSlide = function (e) {
        if (currentSlideIndex===0) {
            currentSlideIndex=imagesCount - 1;
            return;
        }
        currentSlideIndex--;
    };


    this.__render = function () {
        sliderImagesNode.style.marginLeft = -(currentSlideIndex * slideSize) + 'px';

        paginationNode.querySelector('.active').classList.remove('active');
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
    };

    setInterval(function () {
        if (currentSlideIndex=== imagesCount - 1) {
            currentSlideIndex= -1;
            return;
        }
        currentSlideIndex++;
        __self.__render();
    }, 6000);


    prevSliderNode.onclick = function () {
        __self.prevSlide();
        __self.__render();
    };
    nextSliderNode.onclick = function (e) {
        e.preventDefault();
        __self.nextSlide();
        __self.__render();
    };

    paginationNode.onclick = function (e) {
        e.preventDefault();
        var link = e.target;
        if (link.tagName !== 'A') { return };
        currentSlideIndex = +link.dataset['slider__item'];
        __self.__render();

        console.log(e.target);
    }
    if (options.direction === 'vertical') {
        sliderImagesNode.style.whiteSpace = 'normal';
    };
    this.__render();
}