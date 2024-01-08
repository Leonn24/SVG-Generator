const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

// array of Questions //
const question = [
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose which shape you would like!',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Please choose which color you would like!',
        choices: 'Red, Blue, Green',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please type in THREE(3) characters you would like to use!'
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Please type in what color you would like the text to be!',
    }
]

// renders and sets shape and text elements for logo //
class Svg {
    constructor(){
        this.textEl = '';
        this.shapeEl = '';
    }
    render(){
        return `<svg version="1.5.3" xmlns="http://www.w3.org/2000.svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
    setTextEl(text,color){
        if(text.length > 3 && text.length < 1) {
            throw new Error('Please input between 1-3 characters please.')
        }

        this.textEl = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeEl(shape){
        this.shapeEl = shape.render();
    }
}

// function to initialize app //
function init() {
    inquirer.prompt(question)
    .then((data) => {
        const logoText = data.text;
        const svg = new Svg();
        let userShape = '';
        if(data.shape === 'Circle'){
            userShape = new Circle();
        } else if (data.shape === 'Square') {
            userShape = new Square();
        } else if (data.shape === 'Triangle'){
            userShape = new Triangle();
        } else {
            console.log('Please go back and select a valid shape')
        }

        userShape.setColor(data['shape-color', 'shape']);
        svg.setTextEl(logoText, data['text-color']);
        fs.writeFileSync(`${data.shape}.svg`, svg.render());
    })
}

init();
