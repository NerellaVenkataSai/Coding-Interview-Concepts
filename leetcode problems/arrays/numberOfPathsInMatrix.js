function paths(m,n){
    // Reference table to store subproblems.
    let dp = Array.from({length: m}, ()=> Array(n).fill(0))                 
    
    // Paths to reach a cell in column 1.
    for (let i = 0; i < m; i++) {   
        dp[i][0] = 1; 
    }

    // Paths to reach a cell in row 1.
    for (let j = 0; j < n; j++) {   
        dp[0][j] = 1; 
    }       
    console.log(dp)
    // Bottom up approach.
    for (let i = 1; i < m; i++) {   
        for (let j = 1; j < n; j++) { 
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];  
        }
    } 

    // Returning answer.
    return dp[m - 1][n - 1];        
}


    const m=5;
    const n=3;
    console.log(paths(m,n))
