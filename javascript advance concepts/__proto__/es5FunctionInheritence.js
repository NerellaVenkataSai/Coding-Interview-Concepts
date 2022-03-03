function car(brand) {
    this.brand = brand

    this.present = function(){
        return `I have ${this.brand}`
    }
}

function model(model, brand) {
    //to initialize superclass-derived members.
    car.call(this, brand);

    this.model = model
}

console.log(new model('mustang','ford'))