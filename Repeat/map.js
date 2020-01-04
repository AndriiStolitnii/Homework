function myMap(arr, cb) {
    if (!cb) return arr.slice();
    var newArr = [];
    for (var index = 0; index < arr.length; index++) {
        var result = cb(arr[index], index, arr);
        newArr[index] = result;
    }
    return newArr;
}

var powFour = powTwo.map(function (value) {
    return value ** 2;
});

console.log(powFour);

var powEight = myMap(powTwo, function (value) {
    return value ** 3;
})

console.log(powEight);