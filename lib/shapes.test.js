// imports shapes from shapes.js //
const {Circle, Square, Triangle} = require('./shapes');

// tests whether the shapes will render //
describe('Circle', () => {
    test('will render right', () =>{
        const shape = new Circle();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.redner()).toEqual(`<circle cx="50%" cy="50%" r="100" height="75" width="75%" fill="${color}">`)
    });
});

describe('Square', () => {
    test('will render right', () =>{
        const shape = new Square();
        var color = ('red');
        shape.setColor(color);
        expect(shape.redner()).toEqual(`<rect x="50" height="100" width="100" fill="${color}">`)
    });
});

describe('Triangle', () => {
    test('will render right', () =>{
        const shape = new Triangle();
        var color = ('green');
        shape.setColor(color);
        expect(shape.redner()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`)
    });
});

