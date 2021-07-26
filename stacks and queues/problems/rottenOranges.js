/**
 *  Rotten oranges problem 
 * 
 *  USE BFS process to solve this problem;
 */

function rottenOranges(grid) {
   // basic condition
   if(grid.length === 1 && grid[0].length === 1) {
     if(grid[0][0] === 1) return -1;
     else return 0;
   }
   
   // get all the rotten oranges indexes in queue [row, column, id]
   let queue = [];
   // Increment fresh oranges when value is 1
   let fresh = 0;
   let id = 0;
   let result;

   for(let row = 0; row < grid.length; row++) {
     for(let column = 0; column < grid[0].length; column++) {
       if(grid[row][column] === 2) queue.push([row, column, id]);
       if(grid[row][column] === 1) fresh++
     }
   }

   console.log(queue)

   while(queue[0]) {
     console.log(queue[0])
     let [row, column, id] = queue.shift();

     if(grid[row - 1] && grid[row - 1][column] === 1) {
      grid[row - 1][column] = 2;
      queue.push([row - 1, column, id+1])
      fresh--
     }

     if(grid[row + 1] && grid[row + 1][column] === 1) {
      grid[row + 1][column] = 2;
      queue.push([row + 1, column, id+1])
      fresh--
     }

     if(grid[row] && grid[row][column - 1] === 1) {
      grid[row][column - 1] = 2;
      queue.push([row, column - 1, id+1])
      fresh--
     }

     if(grid[row] && grid[row][column + 1] === 1) {
      grid[row][column + 1] = 2;
      queue.push([row, column + 1, id+1])
      fresh--
     }

    result = id
   }

   return fresh === 0 ? result : -1

}


 /**
  *  In a given grid, each cell can have one of three values:
      the value 0 representing an empty cell;
      the value 1 representing a fresh orange;
      the value 2 representing a rotten orange.

      Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
      Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1 instead.
  *  
      Positive I/p [[2,1,1],[1,1,0],[0,1,1]]
      [[2,1,1]
       [1,1,0]
       [0,1,1]
      ]

      Negative I/P [[2,1,1], [0,1,0], [0,0,1] ]
      [
        [2,1,1]
        [0,1,0]
        [0,0,1]
      ]
  */

  console.log(rottenOranges([[2,1,1],[1,1,0],[0,1,1]]))
