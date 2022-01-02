let name = {
  firstName: 'harsha',
  lastName: 'nerella',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(name.fullName())



/**
 * function borrowing(call, apply, bind)
 * passing reference of an object to already defined function
 */

// console.log(name.fullName.call(name2))
// console.log(fullName.call(name2))

/**
 * bind 
 * return bounded function which we can call later
 */

 //normal bind

//  let printName = fullName.bind(name2);
//  console.log(printName())

// bind polyfill

let name2 = {
  firstName: 'Madhhavi',
  lastName: 'nerella',
}

function fullName(state, city, country) {
  console.log(this, state, city, country)
  return `${this.firstName} ${this.lastName}`;
}

// console.log(fullName.call(name2))
// var o = fullName.call(name2);
// console.log(o)

Function.prototype.myBind = function(...args) {
  let obj = this;
  const params = args.slice(1)
  console.log(args)
  return function(innerArgs) {
    obj.apply(args[0], [...params, innerArgs])
  }

}

let myBound = fullName.myBind(name2, 'ts', 'hyd')
console.log(myBound("India"));



