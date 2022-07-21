
	function getFrequencyMap(arr) {
		var hashMap = {};
		for (var i = 0; i < arr.length; i++) {
		if (hashMap.hasOwnProperty(arr[i])) {
			hashMap[arr[i]] = hashMap[arr[i]] + 1;
		} else {
			hashMap[arr[i]] = 1;
		}
		}
		return hashMap;
	}

	// Function that returns true if the passed digit is present
	// in the map after decrementing it's frequency by 1
	function hasDigit(hashMap, digit) {
		// If map contains the digit
		if (hashMap.hasOwnProperty(digit) && hashMap[digit] > 0) {
		// Decrement the frequency of the digit by 1
		hashMap[digit] = hashMap[digit] - 1;

		// True here indicates that the
		// digit was found in the map
		return true;
		}

		// Digit not found
		return false;
	}

	// Function to return the maximum
	// possible time in 24-Hours format
	function getMaxTime(arr) {
		var hashMap = getFrequencyMap(arr);
		var i;
		var flag;
		var time = "";

		flag = false;

		// First digit of hours can be from the range [0, 2]
		for (i = 2; i >= 0; i--) {
		if (hasDigit(hashMap, i)) {
			flag = true;
			time += i;
			break;
		}
		}

		// If no valid digit found
		if (!flag) {
		return "-1";
		}

		flag = false;

		// If first digit of hours was chosen as 2 then
		// the second digit of hours can be
		// from the range [0, 3]
		if (time[0] === "2") {
		for (i = 3; i >= 0; i--) {
			if (hasDigit(hashMap, i)) {
			flag = true;
			time += i;
			break;
			}
		}
		}

		// Else it can be from the range [0, 9]
		else {
		for (i = 9; i >= 0; i--) {
			if (hasDigit(hashMap, i)) {
			flag = true;
			time += i;
			break;
			}
		}
		}
		if (!flag) {
		return "-1";
		}

		// Hours and minutes separator
		time += ":";

		flag = false;

		// First digit of minutes can be from the range [0, 5]
		for (i = 5; i >= 0; i--) {
		if (hasDigit(hashMap, i)) {
			flag = true;
			time += i;
			break;
		}
		}
		if (!flag) {
		return "-1";
		}

		flag = false;

		// Second digit of minutes can be from the range [0, 9]
		for (i = 9; i >= 0; i--) {
		if (hasDigit(hashMap, i)) {
			flag = true;
			time += i;
			break;
		}
		}
		if (!flag) {
		return "-1";
		}

		// Return the maximum possible time
		return time;
	}

	// Driver code
	var arr = [0, 0, 0, 9];
	console.log(getMaxTime(arr));