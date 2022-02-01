// In function 

function MyClass () { // constructor function
    var privateVariable = "foo";  // Private variable 
  
    this.publicVariable = "bar";  // Public variable 
  
    this.privilegedMethod = function () {  // Public Method
      alert(privateVariable);
    };
  }
  
  // Instance method will be available to all instances but only load once in memory 
  MyClass.prototype.publicMethod = function () {    
    alert(this.publicVariable);
  };
  
  // Static variable shared by all instances
  MyClass.staticProperty = "baz";
  
  var myInstance = new MyClass();

  /**
   *  staticProperty is defined in the MyClass object (which is a function) and 
   *  has nothing to do with its created instances, 
   *  JavaScript treats functions as first-class objects, 
   *  so being an object, you can assign properties to a function.
   */

  //static property
  console.log(MyClass.staticProperty)

  // es6 classes

  class MyClass1 {
    // class constructor, equivalent to
    // the function body of a constructor
    constructor() {
      const privateVariable = 'private value'; // Private variable at the constructor scope
      this.publicVariable = 'public value'; // Public property
  
      this.privilegedMethod = function() {
        // Public Method with access to the constructor scope variables
        console.log(privateVariable);
      };
    }
  
    // Prototype methods:
    publicMethod() {
      console.log(this.publicVariable);
    }
  
    // Static properties shared by all instances
    static staticProperty = 'static value';
  
    static staticMethod() {
      console.log(this.staticProperty);
    }
  }
  
  // We can add properties to the class prototype
  MyClass1.prototype.additionalMethod = function() {
    console.log(this.publicVariable);
  };
  
  console.log(MyClass1.staticProperty)
  console.log(MyClass1.staticMethod())

  var myInstance = new MyClass1();
  myInstance.publicMethod();       // "public value"
  myInstance.additionalMethod(); // "public value"
  myInstance.privilegedMethod(); // "private value"
  MyClass1.staticMethod(); 

