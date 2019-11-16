var amountWord = 100,
    minChars = 2,
    maxChars = 10,
    alphabet = 'abcdefghijklmnopqrstuvwxyz',
    dictionary = {};


function random(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

function generationWord(amountChars, charContainer) {
    for (var j = 0; j < amountChars; j++) {
        var charIndex = random(0, charContainer.length - 1);
        word = word + charContainer[charIndex];
    }
    return 
}

for (var i = 0; i < amountWord; i++) {
    var word = '';
    var amountChars = random(maxChars, minChars);
    generationWord(amountChars, alphabet);
    if (!dictionary[amountChars]) {
        dictionary[amountChars] = [];
    }
    dictionary[amountChars].push(word);
}

for (var key in dictionary) {
    console.log("Создано " + dictionary[key].length + " слов по " + key + " букв в слове");
}