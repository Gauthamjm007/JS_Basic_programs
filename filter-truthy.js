/*
Title: Filter Values
Total Test Cases: 3


Body:

 Write a JavaScript function to filter false, null, 0 and blank values from an array. 

Test Data :
filterValues([58, '', 'abcd', true, null, false, 0]);
[58, "abcd", true]
*/

const filterValues= (arr =>arr.filter(a=>a))
console.log(filterValues([58, '', 'abcd', true, null, false, 0]))