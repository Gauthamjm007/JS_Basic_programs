//Sum of positive numbers in an array

const positiveSum1 = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);