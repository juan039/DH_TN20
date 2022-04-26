

// console.log(tareasJSON)
// console.log('------------------');
// console.log(JSON.parse(tareasJSON))
// console.log('------------------');

let tareas = require('./funcionesDeTareas')

let listarTareas = () => {
  let texto = ''
  for (let i = 0; i < tareas.length; i++) {
    texto = texto + (i+1) + ".- " + tareas[i].titulo + "\n";
  }
  return texto;
}

let listarTareas2 = () => {
  for (let i = 0; i < tareas.length; i++) {
    let texto = (i+1) + ".- " + tareas[i].titulo;
    console.log(texto)
  }
}

let listarNoTerminadas = param => {
  for (let i = 0; i < param.length; i++) {
    const tarea = param[i];
    if(tarea.estado !== 'terminada') {
      let texto = (i+1) + ".- " + param[i].titulo;
      console.log(texto)
    }
  }
}

// console.log(listarTareas());
// console.log('-----');
// listarTareas2()
let accion = process.argv[2];

switch (accion) {
  case "listar":
    listarTareas2();
    break;
  case "pendiente":
    listarNoTerminadas(tareas);
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
      console.log("No entiendo qué quieres hacer.");
    break;
}