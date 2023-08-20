let code: any = 123;
let employeeCode = <number>code;
console.log(typeof (employeeCode)); //Output: number

//Error no se puede definir propiedades a un objeto que no este definida en su declaracion
/*
let employee = {};
employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'
*/

type Persona = {
    name: string;
    code: number;
}

let persona = <Persona>{};
persona.name = "a"; // OK
persona.code = 1; // OK

interface Empleado {
    name: string;
    code: number;
}

let empleado = <Empleado>{};
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
otraPersona2 = <Empleado>empleado;
console.log(typeof (otraPersona2));
otraPersona2 = <Persona>persona;
console.log(typeof (otraPersona2));

//Assertion permite cambiar el tipo a un objeto no inferido
empleado = <Persona>persona;
console.log(typeof (empleado));


//Assertion sirve para el DOM
//El document.querySelector no es un objeto valido de TypeScript
//Se debe indicar que tipo de elemento html es
let parrafo1 = document.getElementById('parrafo');
//Error TypeScript no sabe que tipo de elemento html es
//parrafo1.textContent = 'hola mundo'

//Ok - Se indica una clase que corresponde al tipo de elemento html
const parrafo2 = document.getElementById('parrafo') as HTMLParagraphElement;
parrafo2.textContent = 'hola mundo';

console.log(parrafo2)