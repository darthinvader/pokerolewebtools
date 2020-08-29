'use strict';

var my_navbar = '\
<li class="nav-item active">\
    <a class="nav-link" href="#home" onclick="displayHome();">Home <span class="sr-only">(current)</span></a>\
</li>\
<li class="nav-item">\
    <a id="chartBtn" class="nav-link" href="#damage-chart" onclick="displayChart();">Damage Type Chart</a>\
</li>\
<li class="nav-item">\
    <a class="nav-link" href="#pokedex" onclick="displayPokedex();">Pokedex</a>\
</li>';

$(document).ready(function () {   
    $('.navbar-nav').append(my_navbar); 
    damageChart();
    document.getElementById("chart").style.visibility = "hidden";

});