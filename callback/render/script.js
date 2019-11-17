
var lab_scheme = {
    'NO': ['###', '###', '###'],
    'LR': ['###', '   ', '###'],
    'LT': ['# #', '  #', '###'],
    'BR': ['###', '#  ', '# #'],
    'LB': ['###', '  #', '# #'],
    'TR': ['# #', '#  ', '###']
};



function render([firstBlock, secondBlock]) {
        console.log(firstBlock);
        console.log(secondBlock);
        console.log(lab_scheme.NO[0]);
        for (var key in lab_scheme) {
            if (lab_scheme.hasOwnProperty(key)) {
                var result = lab_scheme[key];
                console.log(result);
            }
        }
        console.log(firstBlock[0]);
        console.log(secondBlock[0]);
};


render([
    ['NO', 'BR', 'LR', 'LB', 'NO'],
    ['LR', 'LT', 'NO', 'TR', 'LR']
]);