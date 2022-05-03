const fs = require('fs');

let archivoTareas = {
  archivo: './data/tareas.json',
  leerJSON: function () {
    return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
  },

  // Desafio 2.1 Escribir metodo, escribirJSON, para escribir archivo JSON
  // ----
  // 1. El metodo debe recibir un parametro, que será un array tareas
  // 2. Pasar array a String con JSON.stringify
  // 3. Utilizar fs.writeFileSync() y escribir sobre tareas.json
  
escribirJSON: function(array) {
  return fs.writeFileSync(this.archivo,JSON.stringify(array));
},

  // Desafio 2.2 Escribir metodo, guardarTarea, recibe un objeto tarea.
  // -- 
  // 1. usar leerJSON para obtener tareas actuales
  // 2. Hacer push de la nueva tarea al array actual
  // 3. Guardar array actualizado en tareas.json usando “escribirJSON”

guardarTarea: function (tarea){
let tareas = this.leerJSON();
tareas.push(tarea)
return this.escribirJSON(tareas) 
},


  // Desafio 3 Filtrar tareas por estado, "leerPorEstado", que reciba un estado como parametro
  // Obtener todas las tareas con this.leerJSON
  // Usar .filter para obtener las tareas con estado ingresado
  // Retornar nuevo array con tareas ya filtradas.

leerPorEstado: function(parametroEstado)  {
let tareas = this.leerJSON();
let tareasFiltradas = tareas.filter(function (unEstado){
  return unEstado.estado === parametroEstado;
});
  return tareasFiltradas;
}
}

module.exports = archivoTareas;