const { readFile } = require("fs");
const readFileWithPromise = filePath => {
    return new Promise (res => {
        readFile(filePath, (err, data) => {
            res(data);
        });
    });
};
module.exports = { 
    readFileWithPromise 
};