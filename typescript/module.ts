module Vehicle {
    export class Car {
        constructor (
            public make: string, 
            public model: string) { }
    }
    var audiCar = new Car("Audi", "Q7");
}

// This works now after exporting class from module
var fordCar = new Vehicle.Car("Ford", "Figo");
