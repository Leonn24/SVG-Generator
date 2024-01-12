// imports shapes from shapes.js //
const {Circle, Square, Triangle} = require('./shapes');

// tests whether the shapes will render //
describe('Circle', () => {
    test('will render right', () =>{
        const shape = new Circle();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="75" width="75%" fill="${color}"></circle>`)
    });
});

describe('Square', () => {
    test('will render right', () =>{
        const shape = new Square();
        var color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"></rect>`)
    });
});

describe('Triangle', () => {
    test('will render right', () =>{
        const shape = new Triangle();
        var color = ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`)
    });
});

