/*
1.Create different variables, each containing either an array or a non-array value.
2.Now use isArray to check if each variable is an array.
3.Print a message to the console indicating whether each variable is an array or not.
*/
const arrayValue = [1, 2, 3];
const nonarrayValue = 'I am non-array';

console.log(Array.isArray(arrayValue));

console.log(Array.isArray(nonarrayValue));
