/**
 * WebWorker
 * https://www.youtube.com/watch?v=EiPytIxrZtU&t=2s
 * https://gist.github.com/prof3ssorSt3v3/afaba6d4477946ab04087e5b6b0351a2
 * https://gist.github.com/prof3ssorSt3v3/e753976dc5cc4d9607e67b64e0ac0ae7
 * 
 * Web Workers are a way that JavaScript has to start running tasks on a new thread. 
 * This helps to offload some heavy processing for your web pages.
   There are really only two things you need for web workers.

   We can do heavy calculations or we can access navigator object or we can do fetch calls
   based on request from DOM and process the request and send back to the DOM


   limitations of webworkers
   we cant access DOM from Web Workers

   Example
   self.addEventListener('message', (ev)=>{
       logic on listner ....
   })

   In Script
   worker = new Worker('web-work.js');
   worker.addEventListener('message', workerMessaged);
   worker.postMessage('Other'); // This will trigger webWorker to process some logic in other thread
 */

   https://www.freecodecamp.org/news/how-webworkers-work-in-javascript-with-example/#:~:text=Common%20examples%20of%20web%20workers,huge%20files%20from%20the%20server