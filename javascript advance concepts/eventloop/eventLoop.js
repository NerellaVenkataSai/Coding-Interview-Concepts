/**
 *  event loop
 *  
 *  
 *   concepts:
 *   1. callStack (this is only JS Engine all operation will be executed) Global Execution Context(GEC).
 *   2. web APIS(setTimeOut, DOM APIS, fetch(), console) all these are out of JS.
 *   3. Event loop 
 *      (1. will be monitoring continously between callStack and (callBack QUEUE, microstack QUEUE
 *       2. If once callStack queue is empty it will check 
 *          First for MicroStack QUEUE if there is any it will push to callStack
 *          Once MicroStack QUEUE is done it will check for callBack QUEUE if there is any 
 *          it will push into callStack)
 *   4. callBack Queue (apart Micro Stack queue web APIS all goes into callBack QUEUE)
 *   5. MicroStack QUEUE (only for promises(fetch), mutation observer(DOM Mutation)) 
 * 
 *  Example 1
 *  console.log('start');
 *  setTimeout(() => {console.log('callBack)}, 5000)
 *  console.log('end');
 * 
 *  callStack []
 *  web Apis                event loop(running continously)
 *  microStack QUEUE[]
 *  callBack queue[]
 * 
 *  //step1
 *  callStack [GEC]
 *  web Apis                event loop(running continously)
 *  microStack QUEUE[]
 *  callBack queue[]
 * 
 *  //step2
 *  callStack ['start',GEC]
 *  web Apis                event loop(running continously)
 *  microStack QUEUE[]
 *  callBack queue[]
 *  O/p: 'start'
 * 
 *  //step3
 *  callStack [GEC]
 *  web Apis setTimeout CB(5000)(once setTimeout expires it will push into callBack QUEUE)
 *  event loop(running continously)
 *  microStack QUEUE[]
 *  callBack queue[]
 *  O/p: 'start'
 * 
 *  //step4
 *  callStack ['end',GEC]
 *  web Apis
 *  event loop(running continously)
 *  microStack QUEUE[]
 *  callBack queue[setTimeout CB(5000)]
 *  O/p: 'start', 'end', 
 * 
 *  //step5
 *  callStack [] // once call stack is empty it will push callback queue operations
 *  web Apis
 *  event loop(running continously)
 *  microStack QUEUE[]
 *  callBack queue[setTimeout CB(5000)]
 *  O/p: 'start', 'end', 
 * 
 *  //step5
 *  callStack [setTimeout CB(5000)]
 *  web Apis
 *  event loop(running continously)
 *  microStack QUEUE[]
 *  callBack queue[]
 *  O/p: 'start', 'end',
 * 
 *   //step6
 *  callStack []
 *  web Apis
 *  event loop(running continously)
 *  microStack QUEUE[]
 *  callBack queue[]
 *  O/p: 'start', 'end', 'callback'
 *  
 * 
 * 
 * 
 */