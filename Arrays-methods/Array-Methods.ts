// Sample array for demonstration
var sampleArray: number[] = [1, 2, 3, 4, 5];

// indexOf() - Returns the index of the first occurrence of a specified element in the array.
const indexOfResult: number = sampleArray.indexOf(3);
console.log("indexOf Result:", indexOfResult); // Output: 2

// lastIndexOf() - Returns the index of the last occurrence of a specified element in the array.
const lastIndexOfResult: number = sampleArray.lastIndexOf(3);
console.log("lastIndexOf Result:", lastIndexOfResult); // Output: 2

// concat() - Combines two or more arrays.
const concatResult: number[] = sampleArray.concat([6, 7]);
console.log("concat Result:", concatResult); // Output: [1, 2, 3, 4, 5, 6, 7]

// join() - Joins all elements of an array into a string.
const joinResult: string = sampleArray.join("-");
console.log("join Result:", joinResult); // Output: "1-2-3-4-5"

// push() - Adds one or more elements to the end of an array.
sampleArray.push(6);
console.log("push Result:", sampleArray); // Output: [1, 2, 3, 4, 5, 6]

// pop() - Removes the last element from an array.
const poppedElement: number | undefined = sampleArray.pop();
console.log("pop Result:", poppedElement, sampleArray); // Output: 6 [1, 2, 3, 4, 5]

// reverse() - Reverses the elements of an array.
const reversedArray: number[] = sampleArray.reverse();
console.log("reverse Result:", reversedArray); // Output: [5, 4, 3, 2, 1]

// shift() - Removes the first element from an array.
const shiftedElement: number | undefined = sampleArray.shift();
console.log("shift Result:", shiftedElement, sampleArray); // Output: 5 [4, 3, 2, 1]

// unshift() - Adds one or more elements to the beginning of an array.
sampleArray.unshift(0);
console.log("unshift Result:", sampleArray); // Output: [0, 4, 3, 2, 1]

// slice() - Extracts a portion of an array into a new array.
const slicedArray: number[] = sampleArray.slice(1, 3);
console.log("slice Result:", slicedArray); // Output: [4, 3]

// splice() - Changes the contents of an array by removing or replacing elements.
const splicedArray: number[] = sampleArray.splice(1, 2, 8, 9);
console.log("splice Result:", splicedArray, sampleArray); // Output: [4, 3] [0, 8, 9, 2, 1]

// toString() - Converts an array to a string.
const arrayToString: string = sampleArray.toString();
console.log("toString Result:", arrayToString); // Output: "0,8,9,2,1"

// filter() - Creates a new array with elements that pass a test.
const filteredArray: number[] = sampleArray.filter((num) => num > 5);
console.log("filter Result:", filteredArray); // Output: [8, 9]

// map() - Creates a new array with the results of calling a provided function on every element in the array.
const mappedArray: number[] = sampleArray.map((num) => num * 2);
console.log("map Result:", mappedArray); // Output: [0, 16, 18, 4, 2]

// every() - Checks if all elements in an array pass a test.
const everyResult: boolean = sampleArray.every((num) => num < 10);
console.log("every Result:", everyResult); // Output: true

// reduceRight() - Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.
const reduceRightResult: number = sampleArray.reduceRight((acc, num) => acc - num, 0);
console.log("reduceRight Result:", reduceRightResult); // Output: -14

// reduce() - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const reduceResult: number = sampleArray.reduce((acc, num) => acc + num, 0);
console.log("reduce Result:", reduceResult); // Output: 33

// some() - Checks if at least one element in the array passes a test.
const someResult: boolean = sampleArray.some((num) => num > 10);
console.log("some Result:", someResult); // Output: false

// sort() - Sorts the elements of an array.
const sortedArray: number[] = sampleArray.sort((a, b) => a - b);
console.log("sort Result:", sortedArray); // Output: [0, 1, 2, 8, 9]
