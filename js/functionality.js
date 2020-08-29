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
    document.getElementById("chart").style.visibility = "visible";
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