let varA = 'a'
let varB: string = 'b';


//Funcion debe llevar el tipo de dato en los parametros - Any acepta cualquier tipo
const funcionA = (dato: any) => {

    console.log(dato);

}

funcionA(1);
funcionA('a');
funcionA(true);
funcionA({
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0,
    opcional: ""
});

//Funcion con tipo de entrada especifico
const funcionB = (dato1: string, dato2: object) => {

    console.log(dato1);
    console.log(dato2);

}

//Error
//funcionB(1,1);
//funcionB('a', 1);
//funcionB(true);

//OK
funcionB('a', {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0,
    opcional: ""
});

//Funcion con parametros opcionales
const funcionC = (dato1: string, dato2?: object) => {

    console.log(dato1);
    console.log(dato2);

}

//Error
//funcionC(1,1);
//funcionC(true);
//funcionC('a',null);

//OK
funcionC('a');
funcionC('a', undefined);
funcionC('a', {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0,
    opcional: ""
});

//Funcion con tipo de retorno
//Deben tener un return
const funcionD = (dato1: string, dato2?: object): string => {

    console.log(dato1);
    console.log(dato2);

    return 'x';

}

//Error
//funcionD(1,1);
//funcionD(true);
//funcionD('a',null);

//OK
funcionD('a');
funcionD('a', undefined);
funcionD('a', {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0,
    opcional: ""
});


//Si un parametro es tipo object arroja error si se quiere acceder a sus propiedades
//Debe declararse un type
const funcionE = (dato1: string, dato2?: object): string => {

    console.log(dato1);
    console.log(dato2);

    //Error
    //return dato2.id;
    return 'x'

}

funcionE('a', {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0,
    opcional: ""
});

//Debe declararse un type

type Producto = {
    id: number,
    nombre: string,
    descripcion: string,
    existencia: number,
    opcional?: (string | number | boolean)
}

const funcionF = (dato1: string, dato2: Producto): string => {

    console.log(dato1);
    console.log(dato2);

    //ok
    return dato2.nombre;

}

funcionF('a', {
    id: 0,
    nombre: "",
    descripcion: "",
    existencia: 0,
    opcional: ""
});
