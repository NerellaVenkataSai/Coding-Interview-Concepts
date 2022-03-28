/**
 *   immutable objects in typecript (readonly)
 * 
 *   How to implement class constants in typescript
 */
 interface Coordinate {
    readonly x: number;
    readonly y: number;
 }

 let c:Coordinate = {x:3, y:5};
 // it's readonly property we can edit it
//  c.x = 


type Coordinates = {
    readonly x: number;
    readonly y: number;
 }

let co:Coordinates = {x:3, y:5};
 // it's readonly property we can edit it
//  c.x = 10

/**
 * In TypeScript, the const keyword cannot be used to declare class properties.
 *  Doing so causes the compiler to an error with
 * "A class member cannot have the 'const' keyword." TypeScript 2.0 has the readonly modifier:
 */

 class constVar {
    readonly name1 = 'har';

    constructor() {
        console.log('name----', this.name1)
    }

}

const obj = new constVar();
// cannot assign value to readonly property
// obj.name1 = 'har2'