var number = (['a', 'b', 'c']),
    result = [];

for (var key in number) {
    if (number.hasOwnProperty(key)) {
        var string;
        string = +key + 1 + ": " + number[key];    
        result.push(string);
    }
}

console.log(result);
