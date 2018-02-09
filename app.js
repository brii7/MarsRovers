'use strict';

var Plateau = require('./classes/Plateau.js');

var plateau = new Plateau(5, 5);

plateau.addRover(1, 2, 'N');
plateau.executeCommand('LMLMLMLMM');
plateau.addRover(3, 3, 'E');
plateau.executeCommand('MMRMMRMRRM');

plateau.getRoversPosition().forEach(function (roverPos){
    console.log(roverPos.x, roverPos.y, roverPos.orientation);
});