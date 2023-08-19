"use strict";
let nombre = 'nombre';
//Error error TS2322: Type 'number' is not assignable to type 'string'.
//nombre = 1;
//ok 
nombre = 'Jorge';
console.log(nombre);
let a = 1;
const b = 'a';
//Numericos alojan decimales 
let numerico = 42;
numerico = 4;
console.log(numerico);
numerico = 4.5;
console.log(numerico);
let booleano = true;
booleano = false;
console.log(booleano);
//Las funciones se deben declarar con tipo en los parametros
const sum = (a, b) => {
    console.log(a + b);
};
sum(1, 1);
//Las funciones pueden llevar tipo de retorno pero el return es obligatorio
const sum2 = (a, b) => {
    console.log(a + b);
    return a + b; //obligatorio
};
sum2(1, 1);
//Tipos dinamicos
let ejemplo1;
ejemplo1 = 1;
console.log(ejemplo1);
ejemplo1 = 'jorge';
console.log(ejemplo1);
//Otros tipos
let re = /\w+/g;
//Cualquier tipo incluso objetos
let ejemplo2;
ejemplo2 = 1;
console.log(ejemplo2);
ejemplo2 = 'jorge';
console.log(ejemplo2);
ejemplo2 = /\w+/g;
console.log(ejemplo2);
ejemplo2 = {
    dato1: 'a',
    dato2: 1,
    dato3: /\w+/g
};
console.log(ejemplo2);
