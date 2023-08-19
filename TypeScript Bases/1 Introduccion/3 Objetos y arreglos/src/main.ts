//Arreglos no tipados - inferidos
//infiere : string[]
let Arreglo = ['a', 'b', 'c'];
//infiere : (string | number)[]
let Arreglo2 = ['a', 'b', 1];
//infiere : (string | number | boolean)[]
let Arreglo3 = ['a', true, 1];


//Arreglos tipados
let TArreglo: string[] = ['a', 'b', 'c'];
let TArreglo2: (string | number)[] = ['a', 'b', 1];
let TArreglo3: (string | number | boolean)[] = ['a', true, 1];


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

let tupla: [string, number, boolean] = ['a', 1, true];
let tupla2: [string, number, boolean] = ['b', 2, true];

//Ok son dos tuplas
tupla = tupla2;
tupla = ['a', 1, true];

let ArregloNoTupla = ['a', 'b', 1];
let ArregloNoTupla2: (string | number | boolean)[] = ['a', true, 1];

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
}

let ObjArreglo: object[] = [x, x, x];

//Clases
// se define el nombre de la propiedad con ? para definir como opcional
type Producto = {
    id: number,
    nombre: string,
    descripcion: string,
    existencia: number,
    opcional?: (string | number | boolean)
}

let ObjProducto: Producto = {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0,
    opcional: ""
};

//obtiene tipo por consola
console.log(typeof ObjProducto)

let ObjProducto2 = {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0
};


//Los opcionales arrojan advertencia cuando se intentan ocupar
// Se debe usar el ? para indicar que adminite undefined

const BuscaProducto = (prd: Producto) => {
    console.log(prd, prd.opcional?.toString());
}
BuscaProducto(ObjProducto2);



let ObjProducto3 = {
    id: 0,
    nombre: ""
};

ObjProducto = ObjProducto2;

//Error - Debe cumplir con las propiedades o definir las restantes como opcionales
//ObjProducto = ObjProducto3;


//Interfaces

interface IProducto {
    id: number,
    nombre: string,
    descripcion: string,
    existencia: number,
    opcional?: (string | number | boolean)
}


//Enum

enum Lista {
    A = 2,
    B = 4,
    C = 6,
    D = 8,
    E = 10
}

console.log(Lista.A)
console.log(Lista.A.valueOf())

console.log(Lista.B)
console.log(Lista.B.valueOf())

console.log(Lista.E)
console.log(Lista.E.valueOf())

