const myFilter = (arr, cb) => {
    var newArr = [];
    for (var index = 0; index < arr.length; index++) {
        if (cb(arr[index], index, arr)) {
            newArr.push(arr[index]);
        } 
    }
    return newArr;
}

