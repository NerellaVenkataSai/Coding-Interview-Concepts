/**
 *   promise.all
 *   
 *   accepts array of promises/normal values and return values of array in same order of promises array
 * 
 *   If any promise got rejected it will return error
 * 
 *   so usage if we want all promises values or none then we can use promise.all
 */

const promise1 = Promise.resolve(3)

const promise2 = 'normal';

const promise3 = new Promise((res,rej) => {
    setTimeout(() => {res('setTimeout')}, 1000)
})

const values = Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

// polyfill

Promise.mypromise = function pAll(promisesArr) {

    return new Promise((resolve, reject) => {
        let results = []
        let completed = 0
    
        promisesArr.forEach((promiseValue, i) => {
            Promise.resolve(promiseValue).then((resp) => {
                results[completed] = resp;
                completed++

                if(completed === promisesArr.length) {
                    // console.log(results)
                    resolve(results)
                }
            }).catch(err => reject(err))
        })
    })
}

Promise.mypromise([promise1, promise2, promise3]).then(values => console.log('in poly',values))

Promise.mypromise([promise1, promise2, promise3, Promise.reject('bar')])
                                            .then(values => console.log('in poly',values))
                                            .catch(err => console.log('in poly reject', err))


