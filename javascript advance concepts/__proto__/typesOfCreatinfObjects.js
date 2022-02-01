/**
 *  Object letrals
 */
 let details = {
    name: 'harsha',
    id: 1
}

/**
 *  The Object.create() method creates a new object, 
 *  using an existing object as the prototype of the newly created object.
 */

const detailsExtension = Object.create(details);

console.log(detailsExtension.__proto__)
console.log(detailsExtension.id)

detailsExtension.address = 'AP'

console.log(detailsExtension)

/**
 *  creating object with constructor
 */

function vehicle() {
    this.name = 'maruthi'
}

const vehicleObj = new vehicle()
console.log(vehicleObj)

/**
 *  es6 class 
 */
class vehicleClass {
  constructor(name) {
      this.name = name
  }

}

const vehicleObjClass = new vehicleClass('maruthi')
console.log(vehicleObjClass)

