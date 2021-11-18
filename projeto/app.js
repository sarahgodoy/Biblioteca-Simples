const livros = require('./database')

//input
const read = require('readline-sync')
const entrada = read.question('Deseja buscar um livro? S/N ')

if (entrada.toLocaleUpperCase()==='S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('> Ficcao', '> Infanto juvenil', '> Historia', '> Tecnologia', '> Estilo de Vida')

    const entradaCategoria = read.question('Insira a categoria que deseja escolher: ')
    const retorno = livros.filter(livro => livro.categoria.toLowerCase() === entradaCategoria.toLowerCase())
    
    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todas as opções de livro disponíveis: ')
    console.table(livrosOrdenados)
}