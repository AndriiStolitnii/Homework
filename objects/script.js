var amountWord = 100,
    minChars = 2,
    maxChars = 10,
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    amountChars,
    dictionary = {};

function random(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}

for (var i = 0; i < amountWord; i++) {
    var word = '';
    amountChars = random(maxChars, minChars);
    for (var j = 0; j < amountChars; j++) {
        var charIndex = random(0, alphabet.length - 1);
        word += alphabet[charIndex];
    }
    if (!dictionary[amountChars]) {
        dictionary[amountChars] = [];
    }
    dictionary[amountChars].push(word);
}

for (var key in dictionary) {
    console.log("Создано " + dictionary[key].length + " слов по " + key + " букв в слове");
}
