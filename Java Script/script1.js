// Considere:
['1', '2', '3'].map(parseInt);
// Enquanto era de se esperar [1, 2, 3]
// O resultado atual é [1, NaN, NaN]

// parseInt é normalmente usado com apenas um argumento, mas ele possui dois.
// O primeiro é uma expressão, e o segundo o radical.
// Para a função callback, o Array.prototype.map repassa 3 argumentos:
// o elemento corrente, o indice e o array original
// O terceiro argumento é ignorado pelo parseInt, mas o segundo não, o que certamente gerou o comportamento inesperado. Veja o post para maiores detalhes

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// O resultado atual é um array de números (como esperado)

// Bonus: Um jeito mais simples de conseguir o mesmo resultado sem nenhuma "pegadinha do Malandro":
['1', '2', '3'].map(Number); // [1, 2, 3]