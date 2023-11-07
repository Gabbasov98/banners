function Sliders() {
    let SlidersArray = []

    let sliders = document.querySelectorAll("._slider")
    sliders.forEach((slider,index) => {
        slider.setAttribute("data-slider-id",index)

        SlidersArray[index] = new Swiper(`._slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 1,
            spaceBetween: 10,
            watchSlidesProgress: true,
            preventClicks :true,
            a11y: false,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            navigation: {
                nextEl: `._slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `._slider[data-slider-id="${index}"] .swiper-button-prev`,
            },
            pagination: {
                el: `._slider[data-slider-id="${index}"] .swiper-pagination`,
                type: 'bullets',
                clickable: true,
            },
            on: {
                init: function () {
                    setButtonsColor()
                },
                slideChangeTransitionEnd: function () {
                    setButtonsColor()
                },
            },
        })

        function setButtonsColor() {
            let activeSlide = document.querySelector(`._slider[data-slider-id="${index}"] .swiper-slide-active`)
            if(activeSlide.classList.contains('_white-arrow')){
                slider.classList.add("_white-arrow")
            } else{
                slider.classList.remove("_white-arrow")
            }
        }
    })
}

Sliders()
