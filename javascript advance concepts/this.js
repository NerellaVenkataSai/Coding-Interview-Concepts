/**
 *  Rules of this
 *  
 *  1. If the new keyword is used when calling the function, 
 *     this inside the function is a brand new object created by the JavaScript engine.
 * 
 *  2. If apply, call, or bind are used to call a function, 
 *     this inside the function is the object that is passed in as the argument.
 * 
 *  3. If a function is called as a method — that is, 
 *     if dot notation is used to invoke the function — this is the object that the function is a property of. 
 *     In other words, when a dot is to the left of a function invocation, this is the object to the left of the dot.
 * 
 *  4. If a function is invoked as a free function invocation, 
 *     meaning it was invoked without any of the conditions present above, 
 *     this is the global object. In a browser, it’s window
 * 
 *  5. When multiple rules apply, the rule higher on the list wins. 
 *     If rules 2 and 3 both apply, rule 2 takes precedence.
 * 
 *  6. for Arrow function all above rule doesn't apply it inherits the scope where it's defined 1 line above of definition.
 */

/**
 *    rule 1
 * 
 */

 function ConstructorExample() {
    console.log(this);
    this.value = 10;
    console.log(this);
}
new ConstructorExample()

let obj = {
    name: 'harsha',
    fName: function() {
        console.log(this)
        return this
    }
}
//multi rule -> rule 1 and 3 applied where highest rule which is 1 gets precedence
// rule 1 and 3
console.log(new obj.fName())
// rule 3
console.log(obj.fName())
// rule 4 window scope as it's free invocation
let fn = obj.fName
console.log(fn())

// rule 2 and 3 -->  2 gets precedence
const obj1 = {
    value: 'hi',
    print: function() {
        console.log(this);
    },
};

const obj2 = { value: 17 };

obj1.print.call(obj2);

// Arrow Function best usecase is non methods
// Edge case Arrow Functions not suited for defining methods example below

//Edge case example
const o = {
    name: 'har',
    // here arrow function get's scope one line above from where it's defined here its window,
    // which results undefined
    fn: () => {
        console.log(this.name)
    }
}

o.fn()

//work around for above example
const o1 = {
    name: 'har',
    fn: function() {
        // here arrow function get's scope from here where this is o when it's called using dot notation
        return () => {
            console.log(this.name)
        }
    }
}
o1.fn()()

// difference between normal and arrow function with above example
const o2 = {
    name: 'har',
    fn: function() {
        return function() {
            console.log(this.name)
        }
    }
}
//// it gives undefined as function return and called freely which gives window scope
o2.fn()()

// work around for this is binding scope for returned function to get access to scope
const bo = o2.fn().bind(o2)
bo()