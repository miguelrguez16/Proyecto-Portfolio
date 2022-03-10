// probando tipado de datos
// ! String
var cadena: string = "miguelucu";
// ! number
var edad: number = 43;
// !  --> cualquier valor;
var ok: boolean = true;

// ! ANY --> cualquier valor;
var cualquiera: any = "hola";

// ! ARRAYS
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

var years: number[] = [1, 2, 3, 4, 5];
var anio: any[] = [1, 2, "PHP", 4, "PHP"];

// ! Varios Tipos
var cadenaNumero: string | number = "miguelucu";
cadenaNumero = 3;

// ! Definicion de nuevos tipos
type nuevoTipo = string | number;

var casa: nuevoTipo = "hola";
casa = 2;
