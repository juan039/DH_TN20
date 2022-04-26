const fs = require('fs');
let tareasJSON = fs.readFileSync('./data/tareas.json', 'utf-8');
let tareas = JSON.parse(tareasJSON)

module.exports = tareas;