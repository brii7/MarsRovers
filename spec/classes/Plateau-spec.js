var Plateau     = require('../../classes/Plateau.js');

describe('Plateau', function () {

    it('should add a rover to the rovers array', function () {
        var plateau = new Plateau(10, 10);
        plateau.addRover({x: 5, y: 5, orientation: 'N'});
        expect(plateau.getRovers().length).toBe(1);
    });

    it('should add and validate that the rover is in place', function () {
        var plateau     = new Plateau(10, 10),
            roverParams = {x: 6, y: 2, orientation: 'N'};

        plateau.addRover(roverParams);

        var addedRover = plateau.getRovers()[0];
        expect(addedRover.getCurrentPosition()).toEqual(roverParams);
    });

    it('should move/rotate the rover according to the command', function () {
        var plateau     = new Plateau(10, 10),
            roverParams = {x: 1, y: 2, orientation: 'E'};

        plateau.addRover(roverParams);
        plateau.executeCommand('MLRM');
        expect(plateau.getRoversPosition()).toEqual([{x: 3, y: 2, orientation: 'E'}]);
    });

    it('should return true because there are no rovers and it is inside the map', function () {
        var plateau     = new Plateau(10, 10),
            desiredPos  = {_x: 5, _y: 5};
        expect(plateau.isPositionOk(desiredPos)).toBe(true);
    });

    it('should return false as we are not sending anything', function () {
        var plateau     = new Plateau(10, 10);
        expect(plateau.isPositionOk()).toBe(false);
    });

    it('should return false because desiredPos is out of bounds', function () {
        var plateau     = new Plateau(10, 10),
            desiredPos  = {_x: 11, _y: 1};
        expect(plateau.isPositionOk(desiredPos)).toBe(false);
    });

    it('should not add the rover because we would have two identic rovers', function () {
        var plateau     = new Plateau(10, 10),
            roverParams = {x: 1, y: 2, orientation: 'E'};

        plateau.addRover(roverParams);
        plateau.addRover(roverParams);
        expect(plateau.getRovers().length).toBe(1);
    });

});