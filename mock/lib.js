const { readFile, writeFile } = require("fs");
const writeFileWithPromise = (filePath, data) => {
    return new Promise (res => {
        writeFile(filePath, data, err => {
            res(err);
        });
    });
};
const readFileWithPromise = filePath => {
    return new Promise (res => {
        readFile(filePath, (err, data) => {
            res(data.toString());
        });
    });
};
module.exports = { 
    readFileWithPromise 
};