'use strict';

var Rover = require('./Rover.js');

module.exports = function(xSize,ySize) {

    var plateau = this;

    this._x = xSize;
    this._y = ySize;
    this._rovers = [];
    this._currentRover = 0;

    this.addRover = function(x, y, orientation){
        if(this.isPositionOk({_x : x, _y : y})){
            this._rovers.push(new Rover(x, y, orientation));
        }
    };

    this.executeCommand = function(commandString){

        var currentRover = this._rovers[this._currentRover];
        if(currentRover){
            commandString.split('').map(function(command){
                switch(command){
                    case 'L':
                        currentRover.rotateLeft();
                        break;
                    case 'R':
                        currentRover.rotateRight();
                        break;
                    case 'M':
                        if(plateau.isPositionOk(currentRover.futureMove())){
                            currentRover.moveForward();
                        }
                        break;
                    default:
                        break;
                }
            });
            this._currentRover++;
        }
    };

    this.getRoversPosition = function(){
        return this._rovers.reduce(function(positions, rover){
            positions.push(rover.getCurrentPosition());
            return positions;
        },[]);
    };

    this.isPositionOk = function(desiredPos){
        if(desiredPos._x <= plateau._x || desiredPos._y <= plateau._y){
            return !this.getRoversPosition().some(function(existingRover){
                return existingRover.x === desiredPos._x && existingRover.y === desiredPos._y;
            });
        } else {
            return false;
        }
    };

};