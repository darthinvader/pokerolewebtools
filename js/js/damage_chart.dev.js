"use strict";

document.getElementById("my-button").onclick = function () {
  $('.container').append($('<div/>', {
    id: 'chart'
  }));

  for (var i = 1; i < 20; i++) {
    $('#chart').append($('<div/>', {
      'class': 'box'
    }));
  }

  $('.box').append($('<p>Super Effective Against:</p>'), $('<div/>', {
    'class': 'SuperEffective'
  }));
  $('.box').append($('<p>It’s Not Very Effective against:</p>'), $('<div/>', {
    'class': 'NotVeryEffective'
  }));
  $('#myh').append('<link rel="stylesheet" href="css/flex.css">');
};

function fill_the_chart() {}