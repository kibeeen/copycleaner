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













  var xValues = ["Italy", "France", "Spain", "USA", "Argentina", "Argentina", "Argentina"];
  var yValues = [55, 49, 44, 24, 15, 53, 22];
  var barColors = [
    "#EC3F5F",
    "#8A30FC",
    "#B850F8",
    "#27C691",
    "#5A47E9",
    "#F0C734",
    "#FFDE65",
  ];

  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018",
      },
      cutoutPercentage: 70,
      legend: {
        display: true,
      },
    }
  });





});