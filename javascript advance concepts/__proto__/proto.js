/**
 *   prototypal inheritence and proto chain 
 * 
 *   ES6 introduced classes which is mordern way to build objects and inheritence
 * 
 *   No circular references allowed (person.__proto__) can't be gutarist
 *   An object can only directly inherit from another object
 * 
 */

// Examples
/**
 *   Object literals
 */

const person = {
    alive: true
}

const musician = {
    plays: true
}

// before inheriting
console.log(musician.alive)
//inheriting using __proto__
musician.__proto__ = person
console.log(musician)
// first it loof for alive property in musician object if it's not present it goes up and look in __proto__ where it got inherited from person
console.log(musician.__proto__)
console.log(musician.alive)


// JS have setPrototypeOf and getPrototypeOf instead of using __proto__
person.id = 1;
Object.setPrototypeOf(musician, person)
console.log(Object.getPrototypeOf(musician))
console.log(Object.getPrototypeOf(musician) === musician.__proto__)

const guitarist = {
    strings: 6
}
Object.setPrototypeOf(guitarist, musician);
console.log(Object.getPrototypeOf(guitarist))
// it goes up and up to proto chain until in finds proto and finally i reaches javascript obj __proto__
console.log(guitarist.alive)
console.log(guitarist.id)
console.log(guitarist.plays)
console.log(guitarist.strings)


// Example 2

let car = {
    doors: 2,
    seats: "vinyl",

    get seatMaterial() {
        return this.seats;
    },

    set seatMaterial(material) {
        this.seats = material
    }
}

let luxaryCar = {}
Object.setPrototypeOf(luxaryCar, car);
console.log(luxaryCar)
console.log(Object.getPrototypeOf(luxaryCar));

//usage of this in below example
luxaryCar.seatMaterial = "leather"; 
// here this points to luxaryCar object so seats property will be only updated in luxaryCar
console.log(luxaryCar)
console.log(car)
console.log(luxaryCar.seats)
console.log(Object.getPrototypeOf(luxaryCar))

//Example 3
// looping through keys in object
// differences between Object.keys and for in loop

// Object.keys will loop only own properties of object

Object.keys(luxaryCar).forEach(key => {console.log(key)})

// But in for in loop it will get inherited properties as well
for(let key in luxaryCar) {
    console.log(key)
}


//Example 4 
//Object constrctors

function Animal(species) {
    this.species = species,
    this.eats = true
}
Animal.prototype.walks = function() {
    return `This ${this.species} will walk`
}

let bear = new Animal("Bear")
console.log(bear)
console.log(bear.__proto__)
console.log(bear.__proto__ === Animal.prototype)
console.log(bear.walks())

//Example 5 
// ES6 classes syntax sugar for inheritence

class Vehicle {
    constructor(){
        this.wheels = 2
        this.motorized = true
    }

    ready() {
        return 'ready to go'
    }
}

class Bike extends Vehicle {
    constructor() {
        super();
        this.wheels = 4
    }

    wheelie() {
        return 'On onw wheel now'
    }
}

const myBike = new Bike();
console.log(myBike)
console.log(Object.getPrototypeOf(myBike))
console.log(myBike.wheels)
console.log(myBike.motorized)
console.log(myBike.wheelie())
console.log(myBike.ready())

