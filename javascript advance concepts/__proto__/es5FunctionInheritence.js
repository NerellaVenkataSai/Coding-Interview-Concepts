/**
 * 
 * https://medium.com/@dange.laxmikant/simplified-inheritance-in-js-es5-way-60b4ff19b008
 */

// Basic Example without prototype
function car(brand) {
    this.brand = brand

    this.present = function(){
        return `I have ${this.brand}`
    }
}

function model(model, brand) {
    //to initialize superclass-derived members. same as super in constructor
    car.call(this, brand);

    this.model = model
}

console.log(new model('mustang','ford'))

// Example with proptypal(functional) inheritance in es5 
function person(fistName, lastName) {
    this.firstName = fistName;
    this.lastName = lastName;
}

person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

const pObj = new person('harsha', 'nerella');
console.log(pObj.getFullName())

// emp inherits person
function empDetails(empId, firstName, lastName) {
    person.call(this, firstName, lastName)
    this.empId = empId  
    console.log(this.lastName)
}

// to inherit prototype propertiess from parent
empDetails.prototype = Object.create(person.prototype)
// As we copied prototype from parent class(person) we lost constructor of child class(empDetails)
// to recreate constructor for child do below line
empDetails.prototype.constructor = empDetails;

empDetails.prototype.getEmpDetails = function() {
    return [this.empId, this.firstName, this.lastName]
}

const empO = new empDetails(1, 'h1', 'n1')

console.log(empO.getFullName())
console.log(empO.getEmpDetails())

