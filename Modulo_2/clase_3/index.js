let saludo = require('./consola/consola');
const zodiac = require('zodiac-signs')();
const http = require('http');

console.log(saludo);
console.log(zodiac.getSignByDate());
console.log(http)