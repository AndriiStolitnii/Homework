var age = Number(prompt('Введите ваш возраст'));
var validAge = 18;
var minAge = 12;
var otherService = 'Ваш возраст ниже минимального. Рекомендуем воспользоваться сервисом https://junioruni.goethe.de';
var accept = 'доступ предоставлен. ';
var midAge = 'подождите ' + (validAge - age) + ' лет';
var exp = Number(prompt('Введите ваш опыт работы с JS')); 
var minWorkAge = 30;
var minExp = 5;
var expJQuery = confirm('Если у вас есть опыт использования jQuery более 5 лет, нажмите ОК');
var driveDocs = confirm ('Если у вас есть водительские права на управление самолетом, нажмите ОК'); 

if (typeof(age) === 'number') {
   if (age > validAge) {
   document.write(accept);
   } else if (age < minAge) {
   document.write(otherService);
   } else {
   document.write(midAge);
   }
} else {
   document.write('введенное значение не является числом') ;
}

if ((age >= minWorkAge) && (expJQuery) && (driveDocs) && (exp >= minExp)) {
   document.write('Вы приняты. Принесите трудовую книжку, копию диплома и военного билета');
}