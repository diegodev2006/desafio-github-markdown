// Receita Estrogonoff de Filé de Mignon

let fileMignon = "800g de filé mignon cortado em cubinhos"
let farinhadeTrigo = "2 colheres de sopa de farinha de trigo"
let ketchup = "3 colheres de sopa"
let molhoIngles = "1 colher de sopa"
let aguaFervente = "3 copos"
let cremeDeLeite = "1 lata"
let cebola = "grande e ralada"
let chadeMostarda = "2 colheres"
let margarina = "3 colheres de sopa"
let cogumelos = "1 vidro"
let lista = [fileMignon, farinhadeTrigo, ketchup, molhoIngles, aguaFervente, cremeDeLeite, cebola, chadeMostarda, margarina, cogumelos]

console.log("Ingredientes para o Estrogonoff de Filé de Mignon:")
for (let i = 0; i < lista.length; i++) {
    console.log("- " + lista[i])
}   