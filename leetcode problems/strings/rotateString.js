// rorate string
//https://leetcode.com/problems/rotate-string/

// formula Input String = Input String + Input String
// search in above string if you find rotated string return true else false
// If you don't want to use includes method we can use sliding window technique

function rotateString(str, goal) {
    if(str.length !== goal.length) return false
    str = str + str
    return str.includes(goal);
}

console.log(rotateString('abcde', 'cdeab'))

// sliding window
function rotateStringSlidingWindow(str, goal) {
    if(str.length !== goal.length) return false

    str = str + str

    console.log(str)
    if(str.slice(0, str.slice(0,goal.length)) === goal) return true

    for(let i = goal.length; i < str.length; i++) {
        console.log(str.slice(i - goal.length + 1, i+1))
        if(str.slice(i - goal.length + 1, i+1) === goal) return true
    }
    return false;
}

console.log(rotateStringSlidingWindow('abcde', 'cdeab'))


console.log('abcdeabcde'.slice(0,5))

/**
 *        abcdeabcde   i - g.l + 1
 *            
 */