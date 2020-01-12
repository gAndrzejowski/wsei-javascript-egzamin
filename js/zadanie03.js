function bigestSumOfTwoElements(arr) {
    if (arr.length === 0) return false;
    if (arr.length === 1) return arr[0];
    const sorted = arr.sort((a,b) => b-a);
    return sorted[0] + sorted[1];
}

console.log(bigestSumOfTwoElements([1,2,3,4])) // => 7
console.log(bigestSumOfTwoElements([])) // => false
console.log(bigestSumOfTwoElements([76])) // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])) // => 68