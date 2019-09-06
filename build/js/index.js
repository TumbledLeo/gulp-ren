'use strict';

var root = "http://www.chncpa.org/ncpa/myn2018/";
// 加载
var loader = new resLoader({
    resources: [root + 'images/logo.png', root + 'images/musicBtn.png', root + 'images/text_title.png', root + 'images/text_1.png', root + 'images/text_2.png', root + 'images/text_3.png', root + 'images/text_4.png', root + 'images/girl.png', root + 'images/ticket_btn.png', root + 'images/nav_itembg.png', root + 'images/title_bg.png', root + 'images/section_bg01.jpg', root + 'images/section_bg02.jpg', root + 'images/section_bg03.jpg', root + 'images/section_bg04.jpg'],
    onStart: function onStart(total) {
        // 开始的回调
    },
    onProgress: function onProgress(current, total) {
        // 加载中的回调
        var percent = current / total * 100;
        $('.progressbar').css('width', percent + '%');
    },
    onComplete: function onComplete(total) {
        // 加载完的回调
        $('#progress').fadeOut();

        if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
            new WOW().init();
        }
    }
});
loader.start();

$(function () {
    // tab切换
    function tabCtrl(ele) {
        $(ele + '>.tabContents>.tabContent').hide().eq(0).show();
        $(ele + '>.tabs>.tab').eq(0).addClass('cur');
        $(ele + '>.tabs>.tab').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).hasClass('cur')) {
                return;
            }
            $(this).addClass('cur').siblings().removeClass('cur');
            var me = $(this);
            var index = 0;
            $(ele + '>.tabs>.tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + '>.tabContents>.tabContent').hide().eq(index).fadeIn();
        });
    }
    //导航
    var isClick = false;
    $('.nav a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        isClick = true;
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 600, function () {
            isClick = false;
        });
        // 修改颜色
        $(this).parent().siblings().removeClass('cur');
        $(this).parent().addClass('cur');
    });

    var t = void 0;
    var t0 = $('#jmjq').offset().top - 200;
    var t1 = $('#zczy').offset().top - 200;
    var t2 = $('#jmjx').offset().top - 200;
    var t3 = $('#wmsx').offset().top - 200;
    var t4 = $('#mtzs').offset().top - 200;
    $(window).scroll(function () {
        t = $(window).scrollTop();
        if (!isClick) {
            if (t >= 0 && t < t0) {
                $('nav li').removeClass('cur');
            } else if (t >= t0 && t < t1) {
                $('nav li').removeClass('cur');
                $('nav li').eq(0).addClass('cur');
            } else if (t >= t1 && t < t2) {
                $('nav li').removeClass('cur');
                $('nav li').eq(1).addClass('cur');
            } else if (t >= t2 && t < t3) {
                $('nav li').removeClass('cur');
                $('nav li').eq(2).addClass('cur');
            } else if (t >= t3 && t < t4) {
                $('nav li').removeClass('cur');
                $('nav li').eq(3).addClass('cur');
            } else if (t >= t4) {
                $('nav li').removeClass('cur');
                $('nav li').eq(4).addClass('cur');
            }
            //    返回顶部
            if (t > t1) {
                $('.back').fadeIn();
            } else {
                $('.back').fadeOut();
            }
        }
    });
    // 返回顶部
    $('.back').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('html,body').animate({ scrollTop: 0 }, 600);
    });
    /* 音频 */
    var music = document.getElementById('music');
    var isMusicPlay = true;
    $('#music-btn').click(function () {
        if ($(this).hasClass('on')) {
            music.pause();
            $(this).removeClass('on');
            isMusicPlay = false;
        } else {
            music.play();
            $(this).addClass('on');
            isMusicPlay = true;
        }
    });

    // 视频
    var video = document.getElementById('video');
    $('.video_btn').on('click', function (e) {
        e.preventDefault();
        $('.dialog_video').fadeIn();
        if (isMusicPlay) {
            music.pause();
        }
    });

    $('.close_btn').on('click', function (e) {
        e.preventDefault();
        $('.dialog_video').fadeOut();
        video.pause();
        if (isMusicPlay) {
            music.play();
        }
    });

    var video2 = document.getElementById('video_2');
    video2.addEventListener('play', function () {
        if (isMusicPlay) {
            music.pause();
        }
    });

    video2.addEventListener('pause', function () {
        if (isMusicPlay) {
            music.play();
        }
    });
});

$(function () {
    $(document).on('mousewheel DOMMouseScroll', onMouseScroll);
    function onMouseScroll(e) {
        e.preventDefault();
        var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var delta = Math.max(-1, Math.min(1, wheel));
        if (delta < 0) {
            //向下滚动
            console.log('向下滚动');
        } else {
            //向上滚动
            console.log('向上滚动');
        }
        window.event ? window.event.cancelBubble = true : e.stopPropagation();
    }
});