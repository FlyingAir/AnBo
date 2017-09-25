/**
 * Created by jay on 2017/9/16.
 */
$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay:5000,
        speed:1000,
        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
    })
})

