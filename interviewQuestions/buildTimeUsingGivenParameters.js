/**
 * Given four digits, count how many valid times can be displayed on a digital clock (in 24 hour format) using those digits.
 * The earliest time is 00:00 and the latest time is 23:59.
 * Write a function
 * function solution(A, B, C, D);
 * That, given four integers A, B, C and D (describing the four digits),
 * returns the number of valid times that can be displayed on a digital clock.
 *
 * Example -
 *
 * Given A = 1, B = 8, C = 3, D = 2, the function should return 6. The valid times are :
 * 12:38, 13:28, 18:23, 18:32, 21:38 and 23:18
 *
 * Given A = 2, B = 3, C=3, D=2, the function should return 3. The valid times are: 22:33, 23:23 and 23:32
 *
 * Given A = 6, B = 2, C = 4, D = 7, the function should return 0. It is not possible to gisplay any valid time using the given digits.
 *
 * Assume that A,B,C,D are integers within the range [0…9]
 *
 */

 function solution(A, B, C, D) {
  const arr = [A, B, C, D];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const num = arr[i] + "" + arr[j];
      const num2 = arr[j] + "" + arr[i];
      if (num < 59 && arr2.indexOf(num) === -1) {
        arr2.push(num);
      }
      if (num2 < 59 && arr2.indexOf(num2) === -1) {
        arr2.push(num2);
      }
    }
  }
  const hrs = arr2.filter((h) => h <= 23);
  const min = arr2.filter((m) => m <= 59);
  // console.log(hrs, min);
  let count = 0;
  for (let h = hrs.length - 1; h >= 0; h--) {
    for (let m = min.length - 1; m >= 0; m--) {
      if (
        (hrs[h] + min[m])
          .split("")
          .sort((a, b) => a - b)
          .join("") == arr.sort((a, b) => a - b).join("")
      ) {
        count++;
      }
    }
  }
  console.log(count);
}

 solution(1,8,3,2); // 6
 solution(2,3,3,2); // 3
 solution(6,2,4,7); // 0
