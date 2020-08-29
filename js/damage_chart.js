"use strict";

function readJSON(){

    $.getJSON("resources/damageTypes.json",function(json){
        damageCards(json.Bug,1);
        damageCards(json.Dark,2);
        damageCards(json.Dragon,3);
        damageCards(json.Electric,4);
        damageCards(json.Fairy,5);
        damageCards(json.Fighting,6);
        damageCards(json.Fire,7);
        damageCards(json.Flying,8);
        damageCards(json.Ghost,9);
        damageCards(json.Grass,10);
        damageCards(json.Ground,11);
        damageCards(json.Ice,12);
        damageCards(json.Normal,13);
        damageCards(json.Poison,14);
        damageCards(json.Psychic,15);
        damageCards(json.Rock,16);
        damageCards(json.Steel,17);
        damageCards(json.Water,18);
        
    });

}
function damageChart(){
    var pokemon_type = ['bug','dark','dragon','electric','fairy','fighting','fire','flying','ghost','grass','ground','ice',
                    'normal','poison','psychic','rock','steel','water'];

    
    readJSON();
    
    $('.container').append($('<div/>', {id : 'chart'}));
    for(var i = 1; i < 19; i++){
        $('#chart').append($('<div/>', {id: i ,'class' : 'box'}));
    }
    
    fill_the_chart(pokemon_type);
}


function fill_the_chart(type){

    var j=0;
    
    $('.box').append($('<h3></h3>'));
    $('.box').append($('<p id="effective">Super Effective Against:</p>'),$('<div/>', {'class' : 'SuperEffective'}));
    $('.box').append($('<p id="ineffective">It’s Not Very Effective against:</p>'),$('<div/>', {'class' : 'NotVeryEffective'}));
    $('.box').append($('<p id="immune">No effect against:</p>'),$('<div/>', {'class' : 'NoEffect'}));
    for (var i=1;i<=type.length;i++){
        $('#'+i+'>h3').append($('<span/>', {'class' : type[j++]}));
    }
   
}



function damageCards(data,numBox){
    if(data.SuperEffective.length != 0){
        for(var i=0; i<data.SuperEffective.length;i++){
            $('#'+numBox+'>.SuperEffective').append($('<span/>', {'class' : data.SuperEffective[i].toLowerCase()}));
        }
    }else{
        $('#'+numBox+'>.SuperEffective').remove();
        $('#'+numBox+'>#effective').remove();
    }

    if(data.NotVeryEffective.length != 0){
        for(var i=0; i<data.NotVeryEffective.length;i++){
            $('#'+numBox+'>.NotVeryEffective').append($('<span/>', {'class' : data.NotVeryEffective[i].toLowerCase()}));
        }
    }else{
        $('#'+numBox+'>.NotVeryEffective').remove();
        $('#'+numBox+'>#ineffective').remove();
    }

    if(data.Immune.length != 0){
        for(var i=0; i<data.Immune.length;i++){
            $('#'+numBox+'>.NoEffect').append($('<span/>', {'class' : data.Immune[i].toLowerCase()}));
        }
    }else{
        $('#'+numBox+'>.NoEffect').remove();
        $('#'+numBox+'>#immune').remove();
    }   
}