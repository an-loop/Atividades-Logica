let pesoPeca = 170;
let numeroPeca = 17;
let nomePeca = "Volante";


if(pesoPeca > 100) {
    console.log("Pode-se cadastrar a peça.")
} 
    else {
    console.log("Impossivél cadastrar, peça com peso insuficiente.")
}

if(numeroPeca >= 10) {
    console.log("Número de peças excedido. Não será possível cadastrar.")
} 
    else {
    console.log("Cadastro permitido.")
}

if (nomePeca.length < 3) {
    console.log("Número de caracters insuficientes. Insira ao menos três caracters.")
}
    else {
        console.log("Cadastro concluído.")
    }