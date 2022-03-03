/**
 *   https://stackoverflow.com/questions/60069612/difference-between-iife-and-regular-function-example
 * 
 *   It executes immediately after it’s created and avoid polluting global namespace
 */

//best example in old javascript
// if we inspect below example it will give typeof as string
// as it pollutes window.name property 
var name = 5
console.log(typeof name)

// solution for above is
// either change var to let or wrap it in IIFE

(
    () => {
        var name = 5;
        console.log(typeof name);
    }
)()