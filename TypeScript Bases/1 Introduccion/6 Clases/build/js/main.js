"use strict";
//Clases
//Solo permite un constructor por clase
// orden propiedades, constructor, metodos
// Por defecto las propiedades son publicas
class Presentacion {
    constructor() {
        this.id = 0;
        this.descripcion = '';
    }
}
class PrincAct {
    constructor() {
        this.id = 0;
        this.descripcion = '';
    }
}
class Producto {
    constructor() {
        this.descripcion = ''; //Asi se asigna un valor por defecto
        this.id = this.obtieneId(); // Usar this para usar los metodos o propiedades de la clase
        this.cantidad = 0;
        this.visible = true;
        this.vigente = true;
    }
    obtieneId() {
        return 1;
    }
    //No existe polimorfismo
    //Error
    /*
    public obtieneId(valor:number): number {
        return 1;
    }
    */
    //Getter Setter - Encapsulamiento
    //Permiten acceder a propiedades privadas y solo modificarlos con lo contenido en estos metodos
    get Visibilidad() {
        return (this.visible) ? this.visible : false;
    }
    set Visibilidad(valor) {
        this.visible = valor;
    }
    CambiarVisibilidad() {
        this.visible = !this.visible;
    }
    Imprimir() {
        console.log(this.cantidad);
    }
}
//Herencia
class Medicina extends Producto {
    constructor() {
        super();
        this.id = 100;
        this.descripcion = 'nueva medicina';
        this.cantidad = 0;
        //this.visible = true; //Al ser privada solo se puede acceder en la clase original
        //this.vigente = true; //Al ser read only solo se puede definir en el constructor de la clase original
    }
}
let prd = new Producto();
prd.Imprimir();
prd.cantidad = 5;
prd.Imprimir();
let med = new Medicina();
med.Imprimir();
med.cantidad = 5;
med.Imprimir();
// Error - Si no se respeta las reglas de la interfaz da error
/*
class Administrador implements Usuario {
    codInterno: string = ''

}
*/
//Ok
class Administrador {
    constructor() {
        this.codInterno = '';
        this.id = 'id';
        this.nombre = 'nombre';
        this.correo = 'Correo';
    }
    formatea(separador) {
        console.log(this.id + separador + this.nombre + separador + this.correo);
    }
}
//Constructor con parametros de inicializacion
let admin = new Administrador();
admin.formatea(' - ');
class PisoVenta {
    //Parametros con tipo
    constructor(_id, _nombre, _correo) {
        this.codInterno = '';
        this.id = _id;
        this.nombre = _nombre;
        this.correo = _correo;
    }
    formatea(separador) {
        console.log(this.id + separador + this.nombre + separador + this.correo);
    }
}
let pisoventa = new PisoVenta('piso venta', 'jorge', 'xxx@xx.com');
pisoventa.formatea(' - ');
//Clases Estaticas
class Textos {
    static UnirTexto(a, b) {
        console.log(a + b);
    }
    static UnirTextoInvertido(a, b) {
        console.log(b + a);
    }
}
Textos.UnirTexto('a', 'b');
Textos.UnirTextoInvertido('a', 'b');
