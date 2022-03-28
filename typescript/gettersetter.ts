class foo {
    private _bar:boolean = false;
  
    get bar():boolean {
      return this._bar;
    }
    set bar(theBar:boolean) {
      this._bar = theBar;
    }
  }

  const myFoo = new foo()
  var myBar = myFoo.bar;  // correct (get)
  myFoo.bar = true;