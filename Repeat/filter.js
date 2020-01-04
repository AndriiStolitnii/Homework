var even = fibonacci.filter(function(el) {
    return el % 2 === 0;
})

var dividedBy3 = fibonacci.filter(function(el) {
    return el % 3 === 0;
})

console.log(even);
console.log(dividedBy3);

function myFilter (arr, cb) {
    var newArr = [];
    for (var index = 0; index < arr.length; index++) {
        if (cb(arr[index], index, arr)) {
            newArr.push(arr[index]);
        } 
    }
    return newArr;
}

var myEven = myFilter(fibonacci, function(el) {
    return el % 2 === 0;
})

var myDividedBy3 = myFilter(fibonacci, function(el) {
    return el % 3 === 0;
})

console.log(myEven);
console.log(myDividedBy3);

