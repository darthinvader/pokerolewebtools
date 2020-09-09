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

var pokeball = '\
<div class="pokeballs">\
    <button id="login-btn" type = "submit" name = "login" value = "pokeball">\
        <img src="../resources/images/pokeball.png"/>\
        <div class="middle">\
            <div class="text">Login</div>\
        </div>\
    </button>\
    <button id="login-btn2" type = "submit" name = "login" value = "pokeball" onclick="resize();">\
        <img id="img2" src="../resources/images/pokeball.png"/>\
        <div id="middle2" class="middle2">\
            <div class="text2">Login</div>\
        </div>\
    </button>\
</div>';

var login = '\
<div class="login-pokeball">\
    <img id="login-img" src="../resources/images/open_pokeball.png"/>\
    <div class="middle-login">\
        <div class="text-login">Login</div>\
    </div>\
</div>'
/**
 * When document loads navbar must be visible,damage type chart must be created but not shown 
 */
$(document).ready(function () {   
    $('.navbar-nav').append(my_navbar); 
    damageChart();
    document.getElementById("chart").style.display = "none";
    $('.container-fluid').append(login);
    $('.container-fluid').append(login_form);
    // $('.container-fluid').append(pokeball);
    $('.container-fluid').show();
});