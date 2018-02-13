var Rover     = require('../../classes/Rover.js').constr;

describe('Rover', function () {

    it('should return the same values we used for instantiation', function () {
        var rover = new Rover(1, 2, 'N');
        expect(rover.getCurrentPosition()).toEqual({x: 1, y: 2, orientation: 'N'});
    });

    it('should increase x or y depending on orientation', function () {
        var rover = new Rover(1, 2, 'E');
        rover.moveForward();
        expect(rover.getCurrentPosition()).toEqual({x: 2, y: 2, orientation: 'E'});
    });

    it('should increase return the expected new position', function () {
        var rover = new Rover(4, 4, 'S');
        expect(rover.futureMove()).toEqual({_x: 4, _y: 3});
    });

    it('should rotate right depending on orientation', function () {
        var rover = new Rover(4, 4, 'S');
        var nextR = rover._rotationState.nextR;
        rover.rotateRight();
        expect(rover.getCurrentPosition()).toEqual({x: 4, y: 4, orientation: nextR});
    });

    it('should rotate left depending on orientation', function () {
        var rover = new Rover(4, 4, 'S');
        var nextL = rover._rotationState.nextL;
        rover.rotateLeft();
        expect(rover.getCurrentPosition()).toEqual({x: 4, y: 4, orientation: nextL});
    });
});