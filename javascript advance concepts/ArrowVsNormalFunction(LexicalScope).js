/**
 *    Arrow vs normal Function(Lexical Scope)
 * 
 *   Main Difference:
 *   Normal Function : Scope changes based on function where it's being called.
 * 
 *   Arrow Function: Scope wont change it remains same where the function is defined
 */

class LexiaclScope {
    constructor() {
        this.name = 'harsha'
    }

    printNameArrow() {
        console.log(this)
        setTimeout(() => {
            console.log(this)
            console.log('in Arrow:', this.name)
        },1000)
    }

    printNameFunction() {
        console.log(this)
        setTimeout(function() {
            console.log(this)
            console.log('in Function:', this.name)
        },1000)
    }
}

const scope = new LexiaclScope();

// for arrow function scope is the function where it's defined
console.log(scope.printNameArrow())

//here printNameFunction will get the global scope where name is not available
console.log(scope.printNameFunction())