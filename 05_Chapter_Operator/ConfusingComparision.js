
console.log(""  == 0); // true (loose comparison)
console.log(""  == "0"); // false as "0" contains a character and "" is empty string hence it is false


console.log(0 == "0"); // true (loose comparison)
console.log(0  === "0"); //false (strict comparison)
console.log(""  === 0); // false (strict comparison)