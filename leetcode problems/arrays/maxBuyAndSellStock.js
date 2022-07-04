/**
 *   buy and sell stock and get max out
 * 
 *   [7,1,5,3,6,4] R < L -> R++ and L++; R > L --> Math.max(result, R-l) and R++
 *   
 *   let result = 0;
 *   [7,1,5,3,6,4]
 *    L R
 * 
 *   [7,1,5,3,6,4] R < L --> L++ R++
 *    L R
 * 
 *   [7,1,5,3,6,4] R > L --> result = Math.max(result, R-L)//4; R++
 *      L R
 * 
 *   [7,1,5,3,6,4] R > L --> result = Math.max(result, R-L)//4; R++
 *      L   R
 * 
 *   [7,1,5,3,6,4] R > L --> result = Math.max(result, R-L)//5; R++
 *      L     R
 * 
 *   [7,1,5,3,6,4] R > L --> result = Math.max(result, R-L)//3; R++
 *      L       R
 * 
 *   //R reaches end max sell is 5 (6-1)
 * 
 */

 function maxProfit(prices , size) {
 
    // maxProfit adds up the difference between
    // adjacent elements if they are in increasing order
    var maxProfit = 0;
    var days = [];
    
    // The loop starts from 1
    // as its comparing with the previous
    for (i = 1; i < size; i++)
        if (prices[i] > prices[i - 1]) {
            if(!Array.isArray(days[days.length-1])) days.push([i-1]);
            maxProfit += prices[i] - prices[i - 1]; 
        } else {
            days[days.length-1].push(i-1)
            days.push([i]);
        }
    if(days[days.length-1].length == 1) days[days.length-1].push(i-1)
    console.log(days);
    return maxProfit;
}

// Driver code
 
    // stock prices on consecutive days
    var price = [ 2, 30, 15, 10, 8, 25, 80 ];
    var n = price.length;

    // function call
    maxProfit(price, n);