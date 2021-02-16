//ハンバーガーメニュー

function myFunc() {
    document.querySelector('.page').classList.toggle('open');
}
//トップに戻る

$(function() {
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//ホームスクロールバー

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//当院についてエフェクト

AOS.init({
    duration: 500,
    easing: 'ease-in',
    once: true,
});
