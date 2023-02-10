// SUM ALL NUMBERS

/* 
Base case: If number = 1
*/

const sumRange = (num) => {
  if (num === 1) return 1;
  else return sumRange(num - 1) + num;
};

//  Power function

/* 
Base case: If exponent is 0, return 1
*/

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  else return power(base, exponent - 1) * base;
};

//  Factorial function

/* 
Base case: If num is 1, return 1
*/

const factorial = (num) => {
  if (num === 1) return 1;
  else return factorial(num - 1) * num;
};

//  Check all values in array function

/* 
Base case: If callback is false
*/

const all = (array, callback) => {
  let copy = array.slice();
  if (copy.length === 0) return true;
  else {
    if (callback(copy[0])) {
      return all(array.slice(1), callback);
    } else return false;
  }
};

const allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

//  Product of an array

/* 
Base case: If array length is 0
*/

const arrayProduct = (array) => {
  if (array.length === 0) return 1;
  else return array[0] * arrayProduct(array.slice(1));
};

//  Search JS object

/* 
Base case: If first level has value
*/

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2"
          }
        }
      }
    }
  }
};

const contains = (object, searchValue) => {
  for (const key in object) {
    if (object[key] === searchValue) return true;
    else if (object[key] instanceof Object)
      return contains(object[key], searchValue);
  }
  return false;
};

let hasIt = contains(nestedObject, "foo2"); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

//  Find total numbers of integer in multi dimensional array

/* 
Base case: If array length 0 return

*/

const totalIntegers = (array) => {
  if (array.length === 0) return 0;

  let total = 0;
  let firstElement = array.shift();
  if (Number.isInteger(firstElement)) {
    total += 1;
  } else if (Array.isArray(firstElement)) {
    total += totalIntegers(firstElement);
  }

  return total + totalIntegers(array);
};

const seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

// Sum squares of numbers in list that may contain more lists.

/* 
Base case: If array length 0 return

*/

const sumSquares = (array) => {
  if (array.length === 0) return 0;
  let total = 0;
  let firstElement = array.shift();
  if (Number.isInteger(firstElement)) total += firstElement * firstElement;
  else if (Array.isArray(firstElement)) total += sumSquares(firstElement);
  return total + sumSquares(array);
};

const sum = sumSquares([10, [[10], 10], [10]]);

// Return array containing repetitions of the number argument.

/* 
Base case: If times argument is negative return empty array.

*/

const replicate = (times, number) => {
  if (times <= 0) return [];

  return [number, ...replicate(times - 1, number)];
};

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
