"use strict";

function damageChart(){
    var pokemon_type = ['bug','dark','dragon','electric','fairy','fighting','fire','flying','ghost','grass','ground','ice',
                    'normal','poison','psychic','rock','steel','water'];


    $('.container').append($('<div/>', {id : 'chart'}));
    for(var i = 1; i < 19; i++){
        $('#chart').append($('<div/>', {id: i ,'class' : 'box'}));
    }
    
    fill_the_chart(pokemon_type);
    
}


function fill_the_chart(type){

    var j=0;
    
    $('.box').append($('<h3></h3>'));
    $('.box').append($('<p>Super Effective Against:</p>'),$('<div/>', {'class' : 'SuperEffective'}));
    $('.box').append($('<p>It’s Not Very Effective against:</p>'),$('<div/>', {'class' : 'NotVeryEffective'}));
    $('.box').append($('<p>No effect against:</p>'),$('<div/>', {'class' : 'NoEffect'}));
    for (var i=1;i<=type.length;i++){
        $('#'+i+'>h3').append($('<span/>', {'class' : type[j++]}));
    }
   
}

function displayHome(){
    document.getElementById("chart").style.visibility = "hidden"; 
}

function displayChart(){
    document.getElementById("chart").style.visibility = "visible";
}

function displayPokedex(){
    document.getElementById("chart").style.visibility = "visible";
}