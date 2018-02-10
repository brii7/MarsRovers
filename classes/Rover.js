'use strict';

const rotations = {
    N : {
        nextR : 'E',
        nextL : 'W',
        move  : function (rover){
            rover._y++;
        }
    },
    E : {
        nextR : 'S',
        nextL : 'N',
        move  : function (rover){
            rover._x++;
        }
    },
    S : {
        nextR : 'W',
        nextL : 'E',
        move  : function (rover){
            rover._y--;
        }
    },
    W : {
        nextR : 'N',
        nextL : 'S',
        move  : function (rover){
            rover._x--;
        }
    }
};

module.exports = {constr : function(x, y, orientation) {

    this._x = x;
    this._y = y;
    this._orientation = orientation;
    this._rotationState = rotations[orientation];

    this.getCurrentPosition = function(){
        return {
            x  : this._x,
            y  : this._y,
            orientation : this._orientation
        }
    };

    this.moveForward = function(){
        this._rotationState.move(this);
    };

    this.futureMove = function(){
        var pos = {
            _x : this._x,
            _y : this._y
        };
        this._rotationState.move(pos);
        return pos;
    };

    this.rotateRight = function(){
        this._orientation = this._rotationState.nextR;
        this._rotationState = rotations[this._orientation];
    };

    this.rotateLeft = function(){
        this._orientation = this._rotationState.nextL;
        this._rotationState = rotations[this._orientation];
    };

}, rotations : rotations};