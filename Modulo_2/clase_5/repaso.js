//Retoma de conceptos

const { compileFunction } = require("vm");

// condicionales (If ternario, Switch)
if(num1 < 20){
   console.log('<20');
} else if (num1 < 30){
   console.log('> 20 y < 30');
} else {
   console.log('>=30');
}

num1 < 20 ? console.log('<20') : num1 < 30 ? console.log('>20 y <30'):console.log('>=30');//Mostrar como funciona el ternario y como rapidamente se puede volver una mala práctica.

switch(num1){
   case 20:
      console.log('El número es 20');
      break;
   case 21:
   case 22:
      console.log('El número es 20');
      break;
   default:
      console.log('No entiendo el número');
}

// Objetos literales
let lapicera = {
   color: 'negro',
   tipo_de_mina: '0.7',
   escribir: function() {
      return "Estoy escrbibiendo"
   }
}

// NO PUEDO
escribir()
// Si puedo
lapicera.escribir()

// JSON
// Lenguaje compileFunction, a todos os lenguajes de programación
// manera de escribir y expresar onejtos
// sirve para intercambiar datos entre diferentes sistemas
// comunicacione entre diferente lenguajes de programación
// Texto plano
JSON.stringify(lapicera)
let departamentos = JSON.parse(respuesta)

// Arrow Function
let sumar = (a, b) => a + b
let sumar2 = (a, b) => {return a + b}
let saludar = () => console.log("hola mundo")
let saludar2 = nombre => console.log("hola "+ nombre)

// Ciclos I 
for (let i = 0; i < 5; i++) {
   console.log(i)
}

let series = ["GOT", "BB"]
let estudiantes = [
   {
      nombre: 'Ignacio',
      edad: 25
   },
   {
      nombre: 'Analia',
      edad: 23
   }
]
for (let index = 0; index < series.length; index++) {
   const element = series[index]
   console.log(element);
   
}

for (let i = 0; i < estudiantes.length; i++) {
   const estudiante = estudiantes[i];
   if (estudiante.nombre === "Ignacio") {
      console.log(estudiante.edad)
      // break;
      i = estudiantes.length
   }
}


