fibonacci.forEach(function (el) {
    console.log(el);
});

function each(arr, cb) {
    for (var index = 0; index < arr.length; index++) {
        cb(arr[index], index)
    }
}

each(fibonacci, function (el, i) {
    console.log(el, i);
})

