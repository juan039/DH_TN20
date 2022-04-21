// Variables (var, let, const)
let nombre = "Juan";
nombre = "Maria";
let edad;
let Edad; // JS es sensible a MAYUS
edad = 33;
{
  let nombre = "Andres"
  console.log(nombre); // Andres
}
console.log(nombre)  // Maria
const PI = 3.1416;
const MAYORIA_EDAD = 18

// camelCase: JS
// snake_case: JS
// kebab-case: CSS
// PascalCase: Vue, React, Angular

// let declarar varaible dentro de un bloque, dentro de unas llaves {}
// const declarar varaible constante
// var declarar 

// Tipos de datos
// numero, string, booleano, array, objeto literal

// Numero: operaciones matematicas, enteros (Integers), decimal (Float) seprados con punto
let numeroDeLaSuerte = 7;

// String: Alfanumerico dentro de comillas dobles o simplres
let nombreCancion = '"Canción & Tabaco"'
// let nombreCancion = "\"Canción & Tabaco\""  // Opcion 2
let nombreBanda = "([{'Banda de Zarabanda'}])"
console.log(nombreCancion)

// Boolean: verdadero o Falso
let verdadero = true;
let falso = false;
let esPar = true;
let esMayorDeEdad = false;

// Array: lista de datos
let paises = ["Argentina", "Colombia", "Brasil", "Mexico"]
paises[2] // Brasil
paises[1] = "CO"
paises[4] = "UY"
// Todos los elementos sean del mismo tipo de dato
// En los arrays comenzamos a contar la posicion desde 0;

// Objeto: coleccion de datos, especificar claves(keys), atributos(attributes) - valor(value)
let persona = {
  nombre: "Luz",
  correo_electronico: "luz@mail.com",
  series_favoritas: ["GOT", "Gotham"],
  saludar: function() { console.log('Hola!') }
}
persona.nombre // Luz
persona["correo_electronico"] // luz@mail.com

persona.nombre = "Luz Antonini"
persona["correo_electronico"] = "luz@gmail.com"

let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  }
]
estudiantes[1].nombre

// NaN, null, undefined
// NaN No es un numero
// null no sabes que tipo de dato ni valor, se define a proposito
// undefined no esta definido no sabes que tipo de dato
let dni;
console.log(dni) // undefined

// Operadores
// Asignación, el =, asignar valores a variable
// Aritméticos, operaciones matematicas +,-,*,/,%(modulo): obtiene el resto de una división, incremento ++, decremento --
// Comparación, <, >, comparacion estricta ===, comparación simple ==, desigual != | !==
// Lógicos: &&, comparar dos condiciones booleanas, ||, not ! al inicio de un booleano
// (cond1 && (cond2 || (cond3 && cond4)))
// (cond1 && cond2) || (cond3 && cond4)
// Concatenar + encadenar texto, transforma tipo de datos sting+numero = string, int + float = float. 

// Funciones
// bloques de codigo, que nos permiten ejecutar una secuencia de codigo

// Definición de Funcion
//Funcion declarada
function nombreFuncion(var1) {
  // devuelve un valor
  // todo el codigo a ejecutar
  if(condicion) {
    //hacemos algo
    return true
  }
  // algo más
  console.log('final de la funcion')
}
// Expresada
let correr = function(var2) {
  console.log("Ruuuun")
}

// Ejecucion de la función
nombreFuncion("2")
correr("Juan")

// Condicionales
// Evaluar una considcion y denpendiedo el resultado realice una u otra acción
// solo se realiza una de las tres bloques de codigo.
if(condicion) {
  //hacemos algo
} else if(condicion2) {
  //hacemos otra cosa
} else {
  // hacemos algo totalmete distinto.
}

// Arrays
//push, pop, shift, unshift, indexOf, includes, joind
// Se activan con el nombre del array y punto
// length para conocer la longitud del arreglo
// push agrega al final del array un elemento y devuelve la longitud nueva
// pop elimina el último elemento y devuevle el elemto borrado
// shift elimina el primer elemento y devuevle el elemto borrado
// unshift agrega al principio del array un elemento y devuelve la longitud nueva
// indexOf saber el indicie del elemenot si lo encuentra, sino -1
// lastIndexOf saber el indicie del elemento arrancando por el final si lo encuentra, sino -1
// includes retorna boolean,  si se encuentra el elemento dentro del array
// join  juntar en un string todos los elementos, separando lo eleemtos con el parametro