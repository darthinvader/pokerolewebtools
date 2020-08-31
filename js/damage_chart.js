"use strict";

/**
 * Name: readJSON
 * Parameters: none
 * Description: 
 *      This function reads a local json file and for each of its key 
 *      the damageCards function is applied
 * returns: nothing
 */
function readJSON() {

    $.getJSON("resources/damageTypes.json", function (json) {
        var i = 1;
        for (const key of Object.keys(json)) {
            damageCards(json[key], i++);
        }
    });

}

/**
 * Name: damageChart
 * Parameters: none
 * Description: 
 *      This function creates the main chart div and appends it in the root div.
 *      Also it creates 19 more divs with class box nested in the chart div. Each of those divs represent 
 *      a damage card. The cards are filled by the fill_the_chart function.
 * returns: nothing
 */
function damageChart() {
    var pokemon_type = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice',
        'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];


    readJSON();

    $('.container-fluid').append($('<div/>', { id: 'chart' }));
    for (var i = 1; i < 19; i++) {
        $('#chart').append($('<div/>', { id: i, 'class': 'box' }));
    }

    fill_the_chart(pokemon_type);
}

/**
 * Name: fill_the_chart
 * Parameters: type -> the pokemon types
 * Description: 
 *      This function fills up the box divs with the necessary informations about the current pokemon type.
 * returns: nothing
 */
function fill_the_chart(type) {

    var j = 0;

    $('.box').append($('<h3></h3>'));
    $('.box').append($('<p id="effective">Super Effective Against:</p>'), $('<div/>', { 'class': 'SuperEffective' }));
    $('.box').append($('<p id="ineffective">It’s Not Very Effective against:</p>'), $('<div/>', { 'class': 'NotVeryEffective' }));
    $('.box').append($('<p id="immune">No effect against:</p>'), $('<div/>', { 'class': 'NoEffect' }));
    for (var i = 1; i <= type.length; i++) {
        $('#' + i + '>h3').append($('<span/>', { 'class': type[j++] }));
    }

}

/**
 * Name: damageCards
 * Parameters: data -> the json key 
 *             numBoc -> the id of the box div
 * Description: 
 *      This function uses the json data to fill the Super Effective, Not very Effective and No effect 
 *      parts of each damage card
 * returns: nothing
 */
function damageCards(data, numBox) {
    if (data.SuperEffective.length != 0) {
        for (var i = 0; i < data.SuperEffective.length; i++) {
            $('#' + numBox + '>.SuperEffective').append($('<span/>', { 'class': data.SuperEffective[i].toLowerCase() }));
        }
    } else {
        $('#' + numBox + '>.SuperEffective').remove();
        $('#' + numBox + '>#effective').remove();
    }

    if (data.NotVeryEffective.length != 0) {
        for (var i = 0; i < data.NotVeryEffective.length; i++) {
            $('#' + numBox + '>.NotVeryEffective').append($('<span/>', { 'class': data.NotVeryEffective[i].toLowerCase() }));
        }
    } else {
        $('#' + numBox + '>.NotVeryEffective').remove();
        $('#' + numBox + '>#ineffective').remove();
    }

    if (data.Immune.length != 0) {
        for (var i = 0; i < data.Immune.length; i++) {
            $('#' + numBox + '>.NoEffect').append($('<span/>', { 'class': data.Immune[i].toLowerCase() }));
        }
    } else {
        $('#' + numBox + '>.NoEffect').remove();
        $('#' + numBox + '>#immune').remove();
    }
}