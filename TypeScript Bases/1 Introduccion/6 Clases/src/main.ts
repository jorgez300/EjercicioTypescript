//Clases

//Solo permite un constructor por clase
// orden propiedades, constructor, metodos
// Por defecto las propiedades son publicas

class Presentacion {
    id: number
    descripcion: string//Asi se asigna un valor por defecto

    constructor() {
        this.id = 0;
        this.descripcion = '';
    }


}

class PrincAct {
    id: number
    descripcion: string//Asi se asigna un valor por defecto

    constructor() {
        this.id = 0;
        this.descripcion = '';
    }


}

class Producto {
    id: number
    descripcion: string = '' //Asi se asigna un valor por defecto
    cantidad: number
    opcional?: string //Asi se asigna un valor opcional (undefined)
    presentaciones?: Presentacion[] //Asigna una lista del tipo Presentacion
    private visible?: boolean //Propiedades privadas
    protected instancia?: boolean //Propiedades protected
    readonly vigente: boolean //Propiedades readonly

    constructor() {
        this.id = this.obtieneId(); // Usar this para usar los metodos o propiedades de la clase
        this.cantidad = 0;
        this.visible = true;
        this.vigente = true;
    }

    public obtieneId(): number {
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
    public get Visibilidad(): boolean {
        return (this.visible) ? this.visible : false;
    }
    public set Visibilidad(valor: boolean) {
        this.visible = valor;
    }

    private CambiarVisibilidad() {
        this.visible = !this.visible;
    }

    public Imprimir() {
        console.log(this.cantidad);
    }

    //Error
    /* // No se puede cambiar la vigencia fuera del constructor por ser readonly
    private CambiarVigente() {
        this.vigente= !this.vigente;
    }
    */
}

//Herencia

class Medicina extends Producto {
    princAct?: PrincAct[] //Asigna una lista del tipo Principio activo

    constructor() {
        super();
        this.id = 100
        this.descripcion = 'nueva medicina'
        this.cantidad = 0
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

// Implement
// Usar interfaces con herencia

interface Usuario {
    id: string
    nombre: string
    correo: string

    formatea(separador: any): any
}


// Error - Si no se respeta las reglas de la interfaz da error
/*
class Administrador implements Usuario {
    codInterno: string = ''

}
*/

//Ok
class Administrador implements Usuario {
    id: string
    nombre: string
    correo: string
    codInterno: string = ''


    constructor() {
        this.id = 'id';
        this.nombre = 'nombre';
        this.correo = 'Correo';

    }

    public formatea(separador: any) {

        console.log(this.id + separador + this.nombre + separador + this.correo)

    }

}


//Constructor con parametros de inicializacion

let admin = new Administrador();
admin.formatea(' - ');

class PisoVenta implements Usuario {
    id: string
    nombre: string
    correo: string
    codInterno: string = ''

    //Parametros con tipo
    constructor(_id: string, _nombre: string, _correo: string) {
        this.id = _id;
        this.nombre = _nombre;
        this.correo = _correo;

    }

    public formatea(separador: any) {

        console.log(this.id + separador + this.nombre + separador + this.correo)

    }

}

let pisoventa = new PisoVenta('piso venta', 'jorge', 'xxx@xx.com');
pisoventa.formatea(' - ');

//Clases Estaticas

class Textos {

    static UnirTexto(a: string, b: string) {

        console.log(a + b);

    }

    static UnirTextoInvertido(a: string, b: string) {

        console.log(b + a);

    }

}

Textos.UnirTexto('a', 'b');
Textos.UnirTextoInvertido('a', 'b');