//* null VS undefined
console.log(null == undefined); // true (loose comparison)
console.log(null === undefined); // false (strict comparison) different data type hence it is false
console.log(null == null); // true (loose comparison)
console.log(null == 0); // false (loose comparison) as null is not equal to 0 hence it is false
console.log(null >= 0); // true
console.log(null > 0); //false
console.log(undefined == undefined); // true (loose comparison)
console.log(null === null); // true (strict comparison)
console.log(undefined === undefined); // true (strict comparison)