
console.log('Hello World');

//Primitive types: string, number, boolean, undefined, null
let variable = 1
variable = 2

const constant = 1

let clearValue = null;

let defaultUndefined;
let defaultVal = undefined;

//Dynamic typing

console.log(typeof variable) //number

variable = true

console.log(typeof variable) //boolean
console.log(typeof defaultUndefined) //undefined

console.log(typeof clearValue) //object

//Reference types: Object, Array, Function
let person = {
    name: 'Shashank',
    age: '26'
}

console.log(person.name)
person.name = 'Hiremath'
console.log(person['name']) //If can only know what property during runtime

let colours = ['red', 'blue', 1]
colours[6] = false
console.log(colours)    //(7) ['red', 'blue', 1, empty × 3, false]

console.log(colours.length) //Inherently an object with multiple attributes


function greet(name, lastName){
    console.log('Greetings '+name + ' ' + lastName);
}

greet('Shashank', 'Hiremath');
greet('Shashank'); //Greetings Shashank undefined