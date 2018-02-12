'use strict';

var FileReader = require('./classes/FileReader.js');
var fs         = require('fs');
var fileReader = new FileReader();

fileReader.readFile('./input.txt').then(function(data){

    var inputData  = data.split('\r\n'); // Using '\r\n' instead of '\n' because of Windows
    var plateau    = fileReader.createPlateau(inputData.shift());

    while(plateau && inputData.length > 0){

        var roverProp = fileReader.parseRover(inputData.shift());
        plateau.addRover(roverProp);
        plateau.executeCommand(inputData.shift());

    }

    console.log('____OUTPUT____');
    plateau.getRoversPosition().forEach(function (roverPos){
        console.log(roverPos.x, roverPos.y, roverPos.orientation);
    });


}).catch(function(err){
    var now = new Date();
    fs.appendFile('./logs/errors.log', '\n'+now.toLocaleString()+' - '+err, function(error){
        if(error) throw Error('There was an error, could not write log file.')
    });
    console.log('There was an error.');
});
