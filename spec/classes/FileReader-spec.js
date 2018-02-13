var FileReader     = require('../../classes/FileReader.js'),
       Plateau     = require('../../classes/Plateau.js');

describe('FileReader', function () {

    var fileReader = new FileReader();

    it('should return a Plateau object', function () {
        var plateau = fileReader.createPlateau('5 5');
        expect(plateau).toEqual(jasmine.any(Plateau));
    });

    it('should return the same values when recieving them as a string', function () {
        var criteria = {x :'5', y: '3', orientation :'N'};
        expect(fileReader.parseRover(
            Object.values(criteria).join(' '))
        ).toEqual(criteria);
    });

    it('should return an exact error because input is invalid', function () {
        expect(function() { fileReader.createPlateau('abc'); }).toThrow('Plateau couldn\'t be created. Make sure the input is correct.');
    });

    it('should return an exact error because input is invalid', function () {
        expect(function() { fileReader.parseRover('abc'); }).toThrow('Rover couldn\'t be added. Make sure the input is correct.');
    });
});