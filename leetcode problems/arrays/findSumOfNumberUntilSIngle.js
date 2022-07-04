// Javascript program to find sum of
// digits of a number until
// sum becomes single digit.
	let n = 1234;
	//Function to get sum of digits
	function getSum(n) {
		let sum = 0;
		while (n > 0 || sum > 9) {
			if(n == 0) {
				n = sum;
				sum = 0;
			}
			sum = sum + n % 10;
			n = Math.floor(n / 10);
		}
		return sum;
	}
//function call
	getSum(n)
	
//This code is contributed by Surbhi Tyagi
