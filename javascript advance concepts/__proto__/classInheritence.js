class Car {
    constructor(brand) {
        this.brand = brand
    }

    present() {
        return `I have ${this.brand}`
    }
}

class model extends Car {
    constructor(brand, model) {
        // super to get access to parent
        super(brand)
        this.model = model
    }

    presetCar() {
        return `${this.present()} ${this.model}`
    }
}

const ins = new model('ford', 'mustang');
console.log(ins.presetCar())