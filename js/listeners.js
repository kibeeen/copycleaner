$(document).ready(function () {


  // Side Navigation - Selecting items
  $('a .link-group__li').click(function (e) {
    $('a .link-group__li').removeClass('active');
    $(this).addClass('active');
  });

  $('.modal-close-button').click(() => {
    $('#cms__modal-overlay').css('display', 'none');
  });

  $('#modal-comp__full-tncs').click(() => {
    $('#cms__modal-overlay').css('display', 'flex');
  });





});