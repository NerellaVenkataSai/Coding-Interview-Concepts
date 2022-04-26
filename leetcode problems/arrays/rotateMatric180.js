
function reverseRow(data,index)
{
	let cols = data[index].length;
	for(let i = 0; i < cols / 2; i++)
	{
		let temp = data[index][i];
		data[index][i] = data[index][cols - i - 1];
		data[index][cols - i - 1] = temp;
	}
}

/**
* Print Matrix data
* @param data matrix
*/
function printMatrix(data)
{
	for(let i = 0; i < data.length; i++)
	{
		for(let j = 0; j < data[i].length; j++)
		{
			document.write(data[i][j] + " ");
		}
		document.write("<br>");
	}
}

/**
* Rotate Matrix by 180 degrees
* @param data matrix
*/
function rotateMatrix180(data)
{
	let rows = data.length;
	let cols = data[0].length;

	if (rows % 2 != 0)
	{
		
		// If N is odd reverse the middle
		// row in the matrix
		reverseRow(data, Math.floor(data.length / 2));
	}

	// Swap the value of matrix [i][j]
	// with [rows - i - 1][cols - j - 1]
	// for half the rows size.
	for(let i = 0; i <= (rows/2) - 1; i++)
	{
		for(let j = 0; j < cols; j++)
		{
			let temp = data[i][j];
			data[i][j] = data[rows - i - 1][cols - j - 1];
			data[rows - i - 1][cols - j - 1] = temp;
		}
	}
}

// Driver code
let data = [ [ 1, 2, 3, 4, 5 ],
			[ 6, 7, 8, 9, 10 ],
			[ 11, 12, 13, 14, 15 ],
			[ 16, 17, 18, 19, 20 ],
			[ 21, 22, 23, 24, 25 ] ];
// Rotate Matrix
rotateMatrix180(data);

// Print Matrix
printMatrix(data);
