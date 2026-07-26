// comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.

/*console.log(10 == 10); // true
console.log(10 != 20); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
console.log(10 == 10); // true (loose comparison)
console.log(10 == '10'); // true (loose comparison)
console.log(10 == "10"); // true (loose comparison)
console.log(10 === 10); // true (strict comparison)
console.log(10 === '10'); // false (strict comparison)*/

// not character comparison, it check value and data type as well. If both are same then it will return true otherwise false.
// true (10 is not equal to 20 which is true)
console.log(10 !== 20); // true
// true (10 is not equal to '10' which is true cuz the data type is different 10-> number and other "10"-> string hence it is not equal)
console.log(10 !== '10');

console.log(10 == 10); // false (10 is equal to 10 which is false)
console.log(10 !== 10);

console.log(10 == "10"); // loss comparison (true) 10 is equal to "10" which is true
console.log(10 !== "10"); //when we add not equal to operator it will strictly check the value and data type as well. If both are same then it will return true otherwise false. (false) 10 is equal to 10 which is false