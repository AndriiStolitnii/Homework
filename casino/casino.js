var values = [1, 2, 3, 4, 5];

var casino = {
    lines: [],
    result: null,
    resultAll: null,
    resuktLine: null,
    createRandomLineFrom: function (arr) {
        return arr.map(function () {
            return Math.ceil(Math.random() * (arr.length - 1));
        });
    },
    fillLines: function (linesAmount, fromArray) {
        var self = this;
        this.lines = Array(linesAmount).fill(1).map(function () {
            return self.createRandomLineFrom(fromArray);
        })
    },
    checkMainLine: function () {
        var lineIndex = (this.lines[0].length - 1) / 2, 
            value = this.lines[0][lineIndex];
        return this.result = this.lines.every(function (line) {
            return line[lineIndex] === value;
        })
    },
    checkLines: function (lineIndex) {
        var value = this.lines[0][lineIndex];
        return this.resultLine = this.lines.every(function (line) {
            return line[lineIndex] === value;
        })
    },
    checkAllLines: function () {
        var self = this;
        this.resultAll = this.lines[0].every(function (el, i) {
            return self.checkLines(i);
        })
    }
}