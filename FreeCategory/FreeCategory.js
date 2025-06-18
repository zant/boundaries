"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeCategory = void 0;
var FreeCategory = function (compose, id) {
    var category = {
        morphisms: { compose: compose, id: id },
    };
    return { compose: category.morphisms.compose, id: category.morphisms.id };
};
exports.FreeCategory = FreeCategory;
