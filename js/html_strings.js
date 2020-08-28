'use strict';

var my_navbar = '\
<li class="nav-item active">\
    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\
</li>\
<li class="nav-item">\
    <a class="nav-link" href="damagetypechart.html">Damage Type Chart</a>\
</li>\
<li class="nav-item">\
    <a class="nav-link" href="./fight/encounter-builder.html">Pokedex</a>\
</li>';

$(document).ready(function () {   
    $('.navbar-nav').append(my_navbar); 
});