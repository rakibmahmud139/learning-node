//Local modules

const { a, add } = require("./local-1");
const { a: a2, add: add2 } = require("./local-2");


console.log(add2(1, 2, 3));



//Built-in-modules

const path = require("path");

console.log(path.dirname("C:/Appolo-Level-2/learning-node/index.js"));