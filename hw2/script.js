var num;
var clientNum;
var num1;
var num2;
var average;
var numbers; 


clientNum = Number(prompt('Отгадай число от 1 до 5'));
num = Math.round(Math.random() * (5 - 1) + 1);
if (num === clientNum) {
document.write('Отлично! Угадал (-а)!');
}
else {
document.write('Неправильный ответ! Задуманое число было ' + num);
}
num1 = Number(prompt('Введите первое число для вычисления среднего арифметического'));
num2 = Number(prompt('Введите второе число для вычисления среднего арифметического'));
document.write('Введенные числа ' + num1 + ' ' + num2);
average = (num1 + num2) / 2;
document.write(' Среднее арифметическое ' + average);
numbers = prompt('А теперь введите два числа для вычисления среднего арифметического через запятую');
numbers.split(',');
average = (+(numbers[0]) + +(numbers[1])) / 2;
document.write(' Среднее арифметическое двух чисел через запятую  ',average);