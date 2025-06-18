"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FreeCategory_1 = require("./FreeCategory/FreeCategory");
function main() {
    var composeNumber = function (g, f) { return function (a) { return g(f(a)); }; };
    var g = function (b) { return b * 2; };
    var f = function (a) { return a * 2; };
    var idNumber = function (a) { return a; };
    var NumberFreeCategory = (0, FreeCategory_1.FreeCategory)(composeNumber, idNumber);
    // aliasing makes it look better whithout losing verbosity
    var compose = NumberFreeCategory.compose;
    console.log(compose(g, f)(2));
}
main();
