"use strict";
//Arreglos no tipados - inferidos
//infiere : string[]
let Arreglo = ['a', 'b', 'c'];
//infiere : (string | number)[]
let Arreglo2 = ['a', 'b', 1];
//infiere : (string | number | boolean)[]
let Arreglo3 = ['a', true, 1];
//Arreglos tipados
let TArreglo = ['a', 'b', 'c'];
let TArreglo2 = ['a', 'b', 1];
let TArreglo3 = ['a', true, 1];
//ok
Arreglo = TArreglo;
Arreglo2 = TArreglo2;
Arreglo3 = TArreglo3;
Arreglo3 = TArreglo;
Arreglo3 = TArreglo2;
//Error
//Arreglo = TArreglo2;
//Arreglo = TArreglo3;
//Tupla
let tupla = ['a', 1, true];
let tupla2 = ['b', 2, true];
//Ok son dos tuplas
tupla = tupla2;
tupla = ['a', 1, true];
let ArregloNoTupla = ['a', 'b', 1];
let ArregloNoTupla2 = ['a', true, 1];
//Error no se puede asignar un arreglo (inferido o no) a una tupla
//tupla = ArregloNoTupla;
//tupla = ArregloNoTupla2;
//ok -Solo se puede asignar valores correspondientes al tipo
tupla[0] = 'e';
tupla[1] = 2;
tupla[2] = false;
//Error - No se pueden asignar valores de tipo diferente al orden
//tupla[0] = false;
//tupla[1] = 'a';
//Objetos
let x = {
    prop1: 'a',
    prop2: 1,
    prop3: false,
    prop4: ['a', 'b', 'c'],
    prop5: {
        subprop1: 'a1',
        subprop2: 2
    }
};
let ObjArreglo = [x, x, x];
let ObjProducto = {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0,
    opcional: ""
};
//obtiene tipo por consola
console.log(typeof ObjProducto);
let ObjProducto2 = {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0
};
//Los opcionales arrojan advertencia cuando se intentan ocupar
// Se debe usar el ? para indicar que adminite undefined
const BuscaProducto = (prd) => {
    var _a;
    console.log(prd, (_a = prd.opcional) === null || _a === void 0 ? void 0 : _a.toString());
};
BuscaProducto(ObjProducto2);
let ObjProducto3 = {
    id: 0,
    nombre: ""
};
ObjProducto = ObjProducto2;
//Enum
var Lista;
(function (Lista) {
    Lista[Lista["A"] = 2] = "A";
    Lista[Lista["B"] = 4] = "B";
    Lista[Lista["C"] = 6] = "C";
    Lista[Lista["D"] = 8] = "D";
    Lista[Lista["E"] = 10] = "E";
})(Lista || (Lista = {}));
console.log(Lista.A);
console.log(Lista.A.valueOf());
console.log(Lista.B);
console.log(Lista.B.valueOf());
console.log(Lista.E);
console.log(Lista.E.valueOf());
