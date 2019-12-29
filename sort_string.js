/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

*/

function sortArr(a) {

    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a.length - i - 1; j++) {
            if (a[j].length > a[j + 1].length) {
                let temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
            }
        }
    }
    return a
}

function sortByLength2(array) {
    return array.sort((a, b) => a.length - b.length);
};
console.log(sortArr(["Telescopes", "Glasses", "Eyes", "Monocles"]))
console.log(sortByLength2(["Telescopes", "Glasses", "Eyes", "Monocles"]))