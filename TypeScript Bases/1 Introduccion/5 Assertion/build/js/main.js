"use strict";
let code = 123;
let employeeCode = code;
console.log(typeof (employeeCode)); //Output: number
let persona = {};
persona.name = "a"; // OK
persona.code = 1; // OK
let empleado = {};
empleado.name = "b"; // OK
empleado.code = 2; // OK
//Assertion
//Crear variables sin definicion y luego definir
//Sin Assertion
let otraPersona1 = empleado;
console.log(typeof (empleado));
console.log(typeof (otraPersona1));
//Con Assertion
let otraPersona2 = {}; //Objeto inferido
console.log(typeof (otraPersona2));
otraPersona2 = empleado;
console.log(typeof (otraPersona2));
otraPersona2 = persona;
console.log(typeof (otraPersona2));
//Assertion permite cambiar el tipo a un objeto no inferido
empleado = persona;
console.log(typeof (empleado));
//Assertion sirve para el DOM
//El document.querySelector no es un objeto valido de TypeScript
//Se debe indicar que tipo de elemento html es
let parrafo1 = document.getElementById('parrafo');
//Error TypeScript no sabe que tipo de elemento html es
//parrafo1.textContent = 'hola mundo'
//Ok - Se indica una clase que corresponde al tipo de elemento html
const parrafo2 = document.getElementById('parrafo');
parrafo2.textContent = 'hola mundo';
console.log(parrafo2);
