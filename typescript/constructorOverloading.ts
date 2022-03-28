// class Box {
//     public x: number;
//     public y: number;
//     public height: number;
//     public width: number;

//     // default parameters
//     constructor(obj : IBox = {x:0,y:0, height:0, width:0}) {    
//         this.x = obj.x;
//         this.y = obj.y;
//         this.height = obj.height;
//         this.width = obj.width;
//     }   
// }

//using union types

class U {
    private _name: any;
    constructor(name: string | number) {
        this._name = name;
    }
}
var f1 = new U("bar");
var f2 = new U(1);