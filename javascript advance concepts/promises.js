/**
 *   promise
 * 
 *   forEach won't take async/await so don't do promises in forEach
 * 
 *   for sequential promises use for loop
 * 
 *   for concurrent promises use promise.all or promise.allSettled
 * 
 *   The latest async/await will execute promises in sequential
 * 
 *   To get true parllelism we need to go back to use promises .then 
 */

// import axios from 'axios';

const ids = [1,2,3,4,5,6,7,8,9]

// const getPosts = async (id) => {
//     return await(await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
// }

// for resolving apis in sequence

// const getPostsSerialized = async(ids) => {

//     for(let i=0; i < ids.length; i++) {
//         console.log(await getPosts(ids[i]))
//     }

//     for(let i of ids) {
//         console.log(await getPosts(id))
//     }

//     //in Es6 way
//     await ids.reduce((acc, id) => {
//         //wait for previous item to complete
//         await acc;
//         // get the next item
//         const post = await getPosts(id);
//         console.log(post);
//     }, Promise.resolve())
// }


// for resolving apis in concurent
// promiseAll will fail if any of api fails
// const getPostsConcurrently = async(ids) => {
//     const posts = await Promise.all(ids.map(id => getPosts(id)))

//     //will return all apis with status property with failed or success
//     const postsAllSettled = await Promise.allSettled(ids.map(id => getPosts(id)))
// }

function wait() {
    const random = Math.random(5);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Resolved after ${random*1000} seconds`)
        }, random*1000)
    })
}

// serial

const aSyncAwait = async() => {

    const wait1 = wait
    const wait2 = wait

    // here wait2 need to wait until wait1 got resolved
    console.log(await wait1())
    console.log(await wait2())
}

await aSyncAwait();

// promises in parallel
const promiseCallBacks = () => {
    const wait1 = wait
    const wait2 = wait

    wait1().then((res) => {console.log(res)})

    wait2().then((res) => {console.log(res)})
}

promiseCallBacks()
