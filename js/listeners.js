$(document).ready(function(){

  $('a .link-group__li').click(function(e) {
    $('a .link-group__li').removeClass('active');
    $(this).addClass('active');
});

});