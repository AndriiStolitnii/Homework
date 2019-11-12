var guess = +prompt("Введите число, кратные которому вывести"),
    amountNum = +prompt("Введите количество кратных чисел, которые необходимо вывести");

for (var i = 1; i <= (amountNum * guess); i++) {
    if (i % guess) continue;
    console.log(i);
 } 


