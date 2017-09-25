/**
 * Created by jay on 2017/9/16.
 */
$(function() {
    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });

    //侧边栏hover
    $('.main-content .left-bar li ').hover(function() {
        $(this).addClass('hover').siblings().attr('id', 'no-hover')
    }, function() {
        $(this).removeClass('hover').siblings().removeAttr('id', 'no-hover')
    })
    //
    // 下拉框效果
    //子导航展开收缩
    $(".sewvtop").click(function() {
        $(this).find("em").removeClass("lbaxztop2").addClass("lbaxztop").parents(".sewv").siblings().children(".sewvtop").find("em").removeClass("lbaxztop").addClass(".lbaxztop2");
        $(this).next(".sewvbm").toggle().parents(".sewv").siblings().find(".sewvbm").hide();
    });

    /*鼠标离开下拉框关闭*/
    $(".sewv").mouseleave(function() {
        $(".sewvbm").hide();
        $(this).children(".sewvtop").find("em").addClass("lbaxztop2");
    });


    //赋值
    $(".sewvbm>li").click(function() {
        var selva = $(this).text();
        $(this).parents(".sewvbm").siblings(".sewvtop").find("span").text(selva);
        $(this).parent("ul").hide();
        $(this).parents(".sewv").children(".sewvtop").find("em").addClass("lbaxztop2");
    });
    // 首页效果
    $('.nav-content>li').animateCss('bounceInLeft');
    $('.logo-content').animateCss('bounceInLeft');
    // 轮播图
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 5000,
        speed: 1000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });
    // 导航hover效果
    $(".nav-content > li").hover(function() {

        var $container = $(this),
            $list = $container.find("ul"),
            $anchor = $container.find("a"),
            height = $list.height() * 1.1; // make sure there is enough room at the bottom

        // need to save height here so it can revert on mouseout
        $container.data("origHeight", $container.height());

        // so it can retain it's rollover color all the while the dropdown is open
        $anchor.addClass("hover");

        // make sure dropdown appears directly below parent list item
        $list
            .stop()
            .slideDown()


    }, function() {

        var $el = $(this);

        // put things back to normal
        $el
            .height($(this).data("origHeight"))
            .find("ul")
            .css({ top: "100%" })
            .stop()
            .slideUp()
            .end()
            .find("a")
            .removeClass("hover");

    });
})