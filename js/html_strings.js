'use strict';
//==================================== Creation of navbar links ===========================================//
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

/**
 * When document loads navbar must be visible,damage type chart must be created but not shown 
 */
$(document).ready(function () {   
    $('.navbar-nav').append(my_navbar); 
    damageChart();
    document.getElementById("chart").style.visibility = "hidden";

});