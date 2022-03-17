
//console.log(calc(4).add(2).val()) //6
//console.log(calc(4).sub(2).val()) //2
//console.log(calc(4).mult(2).add(2).val()) //10
//console.log(calc(4).mult(2).add(2).div(2).val()) //5

function calcOperation(num) {
    let number = num;
    return {
        mult: (param) => {
            number *= param
            return {...calcOperation(number)}
        },
        add: (param) => {
            number += param
            return {...calcOperation(number)}
        },
        div: (param) => {
            number = number / param;
            return {...calcOperation(number)}
        },
        val: () => number
    }
}

function clac(mainNumber) {
    return {
        ...calcOperation(mainNumber)
    }
}

console.log(clac(4).mult(2).add(2).mult(2).mult(3).div(2).add(10).val())