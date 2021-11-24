"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operaciones = void 0;
var Operaciones = /** @class */ (function () {
    function Operaciones(a, b) {
        this.resultado = 0;
        this.resultado = a + b;
    }
    Operaciones.prototype.ver = function () {
        return this.resultado;
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
