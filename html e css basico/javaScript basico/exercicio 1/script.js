function livro (nome, ano, autor){
    return{
        nome: nome.toUpperCase(),
        totalAnos: 2022 - ano,
        frase: nome + " por " + autor
    }
};

const livroRetorno = livro ('Adoraveis mulheres', 1868, 'Louisa May Alcott');
console.log(livroRetorno);