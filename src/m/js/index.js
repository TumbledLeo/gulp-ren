$(function(){
  //弹窗
  var scrollTop = null;
$('.fmsy .inner ul li').click(function(event){
    $('.more').fadeIn();
    $('.more li').eq($(this).index()).fadeIn();
    scrollTop = window.scrollY;
    document.body.style.position = 'fixed';
    $("body").css("top",-scrollTop);

}); 
$('.close0').click(function(){ 
    $('.more').fadeOut();
    $('.more li').fadeOut();
    document.body.style.position = '';
    $("body").css("top",'');
    window.scrollTo(0, scrollTop); 
});
var scrollTop1 = null;
$('.swiper-container6 .swiper-slide').click(function(event){
    $('.fly').fadeIn();
    //alert($(this).index());
    mySwiper4.slideTo($(this).index()-15);
    scrollTop1 = window.scrollY;
    document.body.style.position = 'fixed';
    $("body").css("top",-scrollTop1);

}); 
$('.close1').click(function(){ 
    $('.fly').fadeOut();

    document.body.style.position = '';
    $("body").css("top",'');
    window.scrollTo(0, scrollTop1); 
});

    function tabCtrl(ele) {
      $(ele + ' .tabContents .tabContent').hide().eq(0).show();
      $(ele + ' .tabs .tab').eq(0).addClass('active');
      $(ele + ' .tabs .tab').click(function (e) {
          e.stopPropagation();
          e.preventDefault();
          if ($(this).hasClass('active')) {
              return;
          }
          $(this).addClass('active').siblings().removeClass('active');
          let me = $(this);
          let index = 0;
          $(ele + ' .tabs .tab').each(function (i) {
              if (me.get(0) === $(this).get(0)) {
                  index = i;
              }
          });
          $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
      });
  }
  tabCtrl('.ysts');
  tabCtrl('.yl');
  //音乐
let music = document.getElementById('aud');
let music1 = document.getElementById('aud1');
let music2 = document.getElementById('aud2');
let music3 = document.getElementById('aud3');
let music4 = document.getElementById('aud4');
$('.music_bg').click(function(){
            if($(this).hasClass('play')){
                music.pause();
                $(this).find('img').attr("src","images/play.png");
                $(this).removeClass('play');
            }else{
                music.play(); 
                music1.pause();
                music2.pause();
                music3.pause();
                music4.pause();
                $(this).addClass('play'); 
                $(this).find('img').attr("src","images/music.png");
                $('.music1').find('img').attr("src","images/play.png");
                $('.music1').removeClass('play');
            }
            
});
$('.swiper-button-prev1').click(function(){
    music1.pause();
    music2.pause(); 
    music3.pause(); 
    music4.pause(); 
    $('.music1,.music2,.music3,.music4').removeClass('play');
    $('.music1,.music2,.music3,.music4').find('img').attr("src","images/play.png");
});
$('.swiper-button-next1').click(function(){
    music1.pause();
    music2.pause(); 
    music3.pause(); 
    music4.pause(); 
    $('.music1,.music2,.music3,.music4').removeClass('play');
    $('.music1,.music2,.music3,.music4').find('img').attr("src","images/play.png");
});

$('.music1').click(function(){
    music.pause(); 
    music2.pause();
    music3.pause();
    music4.pause();
    $('.music_bg').removeClass('play');
    if($(this).hasClass('play')){
        $(this).find('img').attr("src","images/play.png");
    //    $('.music_bg').find('img').attr("src","images/music.png");
        $(this).removeClass('play');
        music1.pause();
    }else{
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.music_bg').find('img').attr("src","images/play.png");
        music1.play();
    }
    
});
$('.music2').click(function(){
    music.pause(); 
    music1.pause();
    music3.pause();
    music4.pause();
    $('.music_bg').removeClass('play');
    if($(this).hasClass('play')){
        $(this).find('img').attr("src","images/play.png");
    //    $('.music_bg').find('img').attr("src","images/music.png");
        $(this).removeClass('play');
        music2.pause();
    }else{
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.music_bg').find('img').attr("src","images/play.png");
        music2.play();
    }
    
});
$('.music3').click(function(){
    music.pause(); 
    music1.pause();
    music2.pause();
    music4.pause();
    $('.music_bg').removeClass('play');
    if($(this).hasClass('play')){
        $(this).find('img').attr("src","images/play.png");
    //    $('.music_bg').find('img').attr("src","images/music.png");
        $(this).removeClass('play');
        music3.pause();
    }else{
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.music_bg').find('img').attr("src","images/play.png");
        music3.play();
    }
    
});
$('.music4').click(function(){
    music.pause(); 
    music1.pause();
    music3.pause();
    music2.pause();
    $('.music_bg').removeClass('play');
    if($(this).hasClass('play')){
        $(this).find('img').attr("src","images/play.png");
    //    $('.music_bg').find('img').attr("src","images/music.png");
        $(this).removeClass('play');
        music4.pause();
    }else{
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.music_bg').find('img').attr("src","images/play.png");
        music4.play();
    }
    
});
//导航跳转
$('.nav_list li').click(function(){
   // $(this).addClass('active').siblings().removeClass('active');
   $('.nav_list').fadeOut();
   document.body.style.position = '';
    $("body").css("top",'');
    $('html,body').animate({scrollTop:$('.'+$(this).attr('data')).offset().top-100}, 800);
}); 
var scrollTop2 = null;
$('.nav_list .close').click(function(){
    $('.nav_list').fadeOut();
    document.body.style.position = '';
    $("body").css("top",'');
    //window.scrollTo(0, scrollTop2); 
});
$('.nav').click(function(){
    $('.nav_list').fadeIn();
    scrollTop2 = window.scrollY;
    document.body.style.position = 'fixed';
    $("body").css("top",-scrollTop2);
});

});