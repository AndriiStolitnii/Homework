var lessThan100 = fibonacci.every(function(el) {
    return el < 100;
});

var moreThan10 = fibonacci.every(function(el) {
    return el > 10;
});

console.log(lessThan100);
console.log(moreThan10);

function every(arr, cb) {
    for (var index = 0; index < arr.length; index++) {
        if (!cb(arr[index], index, arr)) {
            return false;
        }    
    }
    return true;
}

var lessThan1000 = every(fibonacci, function(el) {
    return el < 1000;
})

var moreThan5 = every(fibonacci, function(el) {
    return el > 5;
})

console.log(lessThan1000);
console.log(moreThan5);