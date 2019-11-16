var num = 5,
    result;

function factorial(num) {
    var mass = [];
    for (var i = 0; i < num; i++) {
        mass.push(num - i);
    };
    console.log(mass);
    var res = 1;
    for (var j = 0; j < mass.length; j++) {
        res = res * mass[j];
        console.log(res);
    }     
    return res;
};

result = factorial(num);
console.log("Факториал числа " + num + " равняется " + result);
