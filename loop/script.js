var customNum,
    maxNum = 10,
    minNum = 1,
    randomNum = Math.round(Math.random() * (maxNum-minNum) + minNum),
    ref = "google.com",
    tryAmount = 0,
    maxTryAmount = 10;

do {
    customNum = prompt("Попробуйте отгадать число от " + minNum + " до " + maxNum);
    tryAmount ++;
} while (customNum !== null && +customNum !== randomNum && tryAmount < maxTryAmount);

if (customNum == null) {
    console.log("Попробуйте другие наши игры, перейдя по ссылке " + ref);
} else if (tryAmount >= maxTryAmount) {
    console.log("Вы исчерпали количество попыток. Обновите страницу и сыграйте еще!")
} else console.log("Поздравляеем! Вы выиграли! Обновите страницу и сыграйте еще!");

console.log("Ваше число - " + customNum);
console.log("Cлучайное число - " + randomNum);

