function isAnoBissexto(ano: number): boolean {
  // Declara uma função chamada isAnoBissexto que recebe um número (ano) como entrada e retorna um booleano.
  // O tipo 'number' especifica que o argumento 'ano' deve ser um número inteiro.
  // O tipo 'boolean' especifica que a função retornará um valor verdadeiro ou falso.

  if (ano % 4 !== 0) {
    // Verifica se o ano não é divisível por 4.
    // O operador '%' calcula o resto da divisão. Se o resto não for 0, o ano não é divisível por 4.
    return false;
    // Se o ano não for divisível por 4, ele não é bissexto, então a função retorna 'false'.
  } else if (ano % 100 === 0 && ano % 400 !== 0) {
    // Verifica se o ano é divisível por 100 MAS NÃO é divisível por 400.
    // '&&' é o operador lógico "e". Ambas as condições devem ser verdadeiras para que este bloco seja executado.
    return false;
    // Se o ano for divisível por 100 mas não por 400, ele não é bissexto, então a função retorna 'false'.
  } else {
    // Se as condições anteriores não forem atendidas, o ano é bissexto.
    return true;
    // A função retorna 'true' indicando que o ano é bissexto.
  }
}

// Exemplos de uso da função:
const ano1 = 2024;
// Declara uma constante chamada 'ano1' e atribui o valor 2024 a ela.
const resultado1 = isAnoBissexto(ano1);
// Chama a função 'isAnoBissexto' com 'ano1' como argumento e armazena o resultado na constante 'resultado1'.
console.log(`${ano1} é bissexto? ${resultado1}`);
// Imprime no console se o ano 2024 é bissexto ou não. A interpolação de string (template literal) é usada para formatar a saída.

const ano2 = 1900;
// Declara uma constante chamada 'ano2' e atribui o valor 1900 a ela.
const resultado2 = isAnoBissexto(ano2);
// Chama a função 'isAnoBissexto' com 'ano2' como argumento e armazena o resultado na constante 'resultado2'.
console.log(`${ano2} é bissexto? ${resultado2}`);
// Imprime no console se o ano 1900 é bissexto ou não.

const ano3 = 2000;
// Declara uma constante chamada 'ano3' e atribui o valor 2000 a ela.
const resultado3 = isAnoBissexto(ano3);
// Chama a função 'isAnoBissexto' com 'ano3' como argumento e armazena o resultado na constante 'resultado3'.
console.log(`${ano3} é bissexto? ${resultado3}`);
// Imprime no console se o ano 2000 é bissexto ou não.

const ano4 = 2023;
// Declara uma constante chamada 'ano4' e atribui o valor 2023 a ela.
const resultado4 = isAnoBissexto(ano4);
// Chama a função 'isAnoBissexto' com 'ano4' como argumento e armazena o resultado na constante 'resultado4'.
console.log(`${ano4} é bissexto? ${resultado4}`);
// Imprime no console se o ano 2023 é bissexto ou não.