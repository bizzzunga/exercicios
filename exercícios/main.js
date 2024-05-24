// 1) Encontre os múltiplos
/**Escreva um programa que imprima os número de 1 a 100.
* Mas para os múltiplos de 3 substitua por "Linkou" em vez do número e para múltiplos de 5 imprima "Checkout".
* E para números múltiplos de 3 e 5 ao mesmo tempo imprima "LinkouCheckout".*/

/*for ( i = 1; i <= 100; i++) {
    if ( i % 3 == 0){
        console.log('Linkou')
    } else if ( i % 5 == 0){
        console.log('Checkout')
    } else if ( i % 3 == 0 && i % 5 == 0){
        console.log('LinkouCheckout')
    } else {
        console.log(i)
    }
}

 
// 2) Quem é o mais novo
/**Dada a função chamada findAge(pessoas, x), que recebe um array de objetos contendo as propriedades 'name' e 'age'
* que possuem o nome de uma pessoa e a idade dela, respectivamente,
* e recebe uma idade x como segundo parâmetro para filtragem.
* A função deve retornar a quantidade e os nomes das pessoas com idade abaixo de x anos,
* conforme exemplo de input e output abaixo:
*/
//INPUT
/*const pessoas = [
  { name: "Felipe", age: 65 },
  { name: "Bonezi", age: 32 },
  { name: "Luís", age: 21 }
];
const idade = 70;
//OUTPUT
const retorno = "1 Pessoa(s): Luís";

const resultado = pessoas.filter((object) => object.age < idade)
console.log(`${resultado.length} Pessoa(s): ${resultado.map((object) => object.name)}`)*/



 
// 3) Função do search
/** Dada uma lista de lojistas, faça a função onSearch que retorna os ids dos lojistas com o sobrenome pesquisado:*/

/*
const lojistas = [
  { id: 102, name: "Justo Silva", status: true, createDate: "2023-02-01" },
  { id: 343, name: "Mariana Silva", status: false, createDate: "2020-02-01" },
  { id: 576, name: "Justina Pereira", status: true, createDate: "2022-01-17" },
  { id: 685, name: "Roberto Justos", status: true, createDate: "2021-01-10" },
  { id: 967, name: "Fausto Silva", status: false, createDate: "2019-01-01" }
];


function onSearch(lojistas, sobrenome) {
    // criar um array para armazenar os ids dos lojistas encontrados
    const idsEncontrados = [];
    
    // itera sobre cada lojista na lista
    for (let lojista of lojistas) {
        // verifica se o sobrenome do lojista atual corresponde ao sobrenome pesquisado
        if (lojista.name.split(' ')[1] === sobrenome) {
            // se corresponder, adicionar o id do lojista ao array de ids encontrados
            idsEncontrados.push(lojista.id);
        }
    }

console.log(onSearch(lojistas, "Silva"));


 
// 4) Palavra mais longa (OPCIONAL)
/**Faça com que a função longestWord(str) pegue o parâmetro str passado e retorne a palavra mais longa na string.
*  Se houver duas ou mais palavras com o mesmo comprimento, retorne a primeira palavra da string com esse comprimento.
* Ignore a pontuação e assuma que ela não estará vazia. As palavras também podem conter números, por exemplo,
* conforme exemplo de input e output abaixo: */
//INPUT: "fun&!! time"
//OUTPUT time
//tem menu de contexto

function maiorPalavra(str) {
    // remover todos os caracteres que não são letras nem números
    const caracteresLimpos = str.replace(/[^\w\s]/g, '');
    
    // dividir a string em um array de palavras
    const palavras = caracteresLimpos.split(' ');
    
    // criar variáveis para guardar a palavra mais longa e seu comprimento
    let palavraMaisLonga = '';
    let comprimentoMaisLongo = 0;
    
    // iterar sobre todas as palavras = percorrer e identificar
    for (let palavra of palavras) {
        // verificar se o comprimento da palavra atual é maior que o comprimento máximo encontrado até agora
        if (palavra.length > comprimentoMaisLongo) {
            // se sim, atualizar a palavra mais longa e seu comprimento máximo
            palavraMaisLonga = palavra;
            comprimentoMaisLongo = palavra.length;
        }
    }
    
    // retornar a palavra mais longa encontrada
    return palavraMaisLonga;
}

// teste
console.log(maiorPalavra("fun&!! time"));


// quando recebe uma notificacao de pix, o meu  nome esta sendo enviado com todas as letras maiusculas, 
// mas eu gostaria de corrigir isso no código e enviar apenas a primeira letra de nome e 
// sobrenomes em maiuscula e o resto minuscula.

//usar slice, depois substring

// function corrigirFormatação(nomeCompleto)
// let partes = nomeCompleto.split(' ');


// for(let i = 0; i < partes.length; i++){
 //   let parte = partes[i];
 // partes[i] = parte.slice(0, 1).toUpperCase() + parte.substring(1).toLowerCase();
// }


//let nomeFormatado = partes.join(' ');

// return nomeFormatado;
// }

//let nomeOriginal = "JOÃO SILVA DE SOUZA";
// let nomeFormatado = corrigirFormatação(nomeOriginal);

// console.log(nomeFormatado);  // Saída: "João Silva De Souza"