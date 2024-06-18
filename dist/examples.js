"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAverage = void 0;
function findAverage(array) {
    // your code here
    if (array.length < 1) {
        return 0;
    }
    var valor = array.reduce(function (a, v) { return a + v; }, 0);
    console.log(valor);
    return valor / array.length;
}
exports.findAverage = findAverage;
console.log(findAverage([88, 63, 98, 42, 29, 84, 8, 93, 64, 65, 82, 11, 30, 84, 44]));
