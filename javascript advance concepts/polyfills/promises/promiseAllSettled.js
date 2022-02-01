/**
 *  Promise All Settled
 * 
 *  It will return all promises values by resolving with status fillfilled or rejected
 */

 const promise1 = Promise.resolve(3)

 const promise2 = 'normal';
 
 const promise3 = new Promise((res,rej) => {
     setTimeout(() => {res('setTimeout')}, 1000)
 })

 Promise.allSettled([promise1, promise2, promise3]).then(values => console.log(values))

 Promise.myAllSettled = function(promisesArr) {

        return new Promise((res, rej) => {
            let results = [];
            let completed = 0;

            promisesArr.forEach((promiseValue, i) => {
                Promise.resolve(promiseValue).then(value => {
                    results[completed] = {status: 'fulfilled', value}
                    completed++
                    if(results.length === promisesArr.length) {
                        res(results)
                    }
                }).catch(err => {
                    results[completed] = {status: 'rejected', value: err}
                    completed++
                    if(results.length === promisesArr.length) {
                        res(results)
                    }
                })
            })
        })

 }

 Promise.myAllSettled([promise1, promise2, promise3]).then(values => console.log('poly', values))

 Promise.myAllSettled([promise1, promise2, promise3, Promise.reject('bar')]).then(values => console.log('poly', values))