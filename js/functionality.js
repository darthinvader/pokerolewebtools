"use strict";

/**
 * Name: displayHome
 * Parameters: none
 * Description: 
 *      This function render the home page
 * returns: nothing
 */

function displayHome(){
    document.getElementById("chart").style.visibility = "hidden"; 
}

/**
 * Name: displayChart
 * Parameters: none
 * Description: 
 *      This function render the damage type chart
 * returns: nothing
 */
function displayChart(){
    document.getElementById("chart").style.display = "inline-flex";
    document.getElementById("register-form").style.display = "none";
}

/**
 * Name: displayPokedex
 * Parameters: none
 * Description: 
 *      This function render the pokedex
 * returns: nothing
 */
function displayPokedex(){
    document.getElementById("chart").style.visibility = "visible";
}

function resize(){
    document.getElementById('img2').src='../resources/images/open_pokeball.png'; 
    document.getElementById('img2').style.width = '230px';
    document.getElementById('img2').style.height = '230px';
    document.getElementById('img2').style.padding = '0px';
    document.getElementById('img2').style.margin = '-15px';
    document.getElementById('middle2').style.opacity = '1';
}