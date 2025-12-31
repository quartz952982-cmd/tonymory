$(function(){
     $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.gotop').fadeIn()
        } else { $('.gotop').fadeOut() }
    })
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })
})
