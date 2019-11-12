var age = Number(prompt('Введите ваш возраст'));
var validAge = 18;
var minAge = 12;
var notnumber = 'Введенное значение не является числом';
var otherService = 'Ваш возраст ниже минимального. Рекомендуем воспользоваться сервисом https://junioruni.goethe.de';
var accept = 'Доступ предоставлен. ';
var midAge = 'Подождите ' + (validAge - age) + ' лет';
var exp = Number(prompt('Введите ваш опыт работы с JS'));
var minWorkAge = 30;
var minExp = 5;
var expJQuery = confirm('Если у вас есть опыт использования jQuery более 5 лет, нажмите ОК');
var driveDocs = confirm('Если у вас есть водительские права на управление самолетом, нажмите ОК');
var approved = ' Вы приняты. Принесите трудовую книжку, копию диплома и военного билета';
var rejected = ' На данный момент у нас нет вакансий для вас, но мы верим что в будущем вы сможете у нас работать';

switch (true) {
    case age > validAge:
        document.write(accept);
        break;
    case age < minAge:
        document.write(otherService);
        break;
    default:
        document.write(midAge);
        break;  
}

((age >= minWorkAge) && (expJQuery) && (driveDocs) && (exp >= minExp)) ? 
document.write(approved) : 
document.write(rejected);