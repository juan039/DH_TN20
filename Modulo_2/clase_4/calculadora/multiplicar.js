const multiplicar = function (num1, num2) {
  let resultado;
  if(num1 == 0 || num2 == 0) {
    resultado = 0;
  } else {
    resultado = num1 * num2;
  }
  return resultado;
}

const multiplicar2 = function (num1, num2) {
  let resultado = 0;
  if(num1 !== 0 && num2 !== 0) {
    resultado = num1 * num2;
  }
  return resultado;
}

module.exports = {multiplicar, multiplicar2};