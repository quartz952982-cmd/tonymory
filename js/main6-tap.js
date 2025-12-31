$(function(){
 $('.taptitle li').click(function(){
    $('.taptitle li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()
    console.log(idx)
    $('.tapcontent .tap').hide()
    $('.tapcontent .tap').eq(idx).show()
 })
 
 $('.taptitle li').eq(0).trigger('click')
}) 