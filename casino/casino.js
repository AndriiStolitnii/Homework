const values = [1, 2, 3, 4, 5];

var casino = {
    lines: [],
    result: null,
    resultAll: null,
    resuktLine: null,
    createRandomLineFrom: (arr) => {
        return arr.map(() => {
            return Math.ceil(Math.random() * (arr.length - 1));
        });
    },
    fillLines: (linesAmount, fromArray) => {
        casino.lines = Array(linesAmount).fill(1).map(() => {
            return casino.createRandomLineFrom(fromArray);
        })
    },
    checkMainLine: () => {
        var lineIndex = (casino.lines[0].length - 1) / 2, 
            value = casino.lines[0][lineIndex];
        return casino.result = casino.lines.every((line) => {
            return line[lineIndex] === value;
        })
    },
    checkLines: (lineIndex) => {
        var value = casino.lines[0][lineIndex];
        return casino.resultLine = casino.lines.every((line) => {
            return line[lineIndex] === value;
        })
    },
    checkAllLines: () => {
        casino.resultAll = casino.lines[0].every((el, i) => {
            return casino.checkLines(i);
        })
    }
}