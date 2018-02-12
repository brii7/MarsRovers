'use strict';

var fs        = require('fs');
var Plateau   = require('./Plateau.js');
var rotations = require('./Rover').rotations;

module.exports = function() {

    this.readFile = function(file){
        return new Promise(function(fulfill, reject){
            fs.readFile(file, 'utf8', function(err, data){
                if(err)reject();
                else fulfill(data);
            });
        });
    };

    this.createPlateau = function (line){
        var values = line.split(' ');
        if(values.length === 2 && !isNaN(values[0]) && !isNaN(values[1])){
            return new Plateau(values[0], values[1]);
        } else {
            throw Error("Plateau couldn't be created. Make sure the input is correct.");
        }
    };

    this.parseRover = function(line){
        var values = line.split(' ');
        if(values.length === 3 && !isNaN(values[0]) && !isNaN(values[1]) && Object.keys(rotations).includes(values[2])){
            return {
                x : values[0],
                y : values[1],
                orientation : values[2]
            }
        } else {
            throw Error("Rover couldn't be added. Make sure the input is correct.");
        }
    };
};