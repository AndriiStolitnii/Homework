const some = (arr, cb) => {
    for (var index = 0; index < arr.length; index++) {
        if (cb(arr[index], index, arr)) {
            return true;
        }    
    }
    return false;
}





