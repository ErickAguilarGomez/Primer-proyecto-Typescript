"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertirArray = void 0;
function revertirArray(valor) {
    var newArr = valor.map(function (item) { return item.toString(); });
    return newArr.sort();
}
exports.revertirArray = revertirArray;
