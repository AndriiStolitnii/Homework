var even = powTwo.some(function (el) {
    return el % 2 === 0;
})

var odd = powTwo.some(function (el) {
    return el % 2 !== 0;
})

console.log(even);
console.log(odd);

function some(arr, cb) {
    for (var index = 0; index < arr.length; index++) {
        if (cb(arr[index], index, arr)) {
            return true;
        }    
    }
    return false;
}

var myEven = some(powTwo, function(el) {
    return el % 2 === 0;
})

var myOdd = some(powTwo, function(el) {
    return el % 2 !== 0;
})

console.log(myEven, myOdd);



