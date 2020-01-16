let string = ['a', 'b', 'c'];

function number(args) {
    let result = [...args];
    let map = new Map;
    for (let i = 0; i < result.length; i++) {
        map.set(i+1, result[0]);
    }
    return map;
}

let res = number(string);
// let myMap = new Map;
// myMap.set(1, res[0])

console.log(res);
