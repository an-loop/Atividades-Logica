let mostrar = require('prompt-sync')();
console.log("Faça o cadastro do seu evento!");


let contador = 0;

while (contador < 1){

    let = DataAtual = new Date(2022, 06, 20);
    let DataEvento = new Date((mostrar("Informe a data do evento: ")));


if (DataEvento > DataAtual) {
    console.log("Data válida, continue o cadastro.")
    

} else {
    console.log("A data do seu evento está vencido, tente novamente.")
    break

}


let idade = mostrar("Digite sua idade: ");
    if (idade >= 18) {

        console.log("Idade válida, continue.");

    } else {

        console.log("Não foi possivél cadastrar, idade insuficiente. Tente novamente.");
        break

    }



participantes = parseInt(mostrar("Insira a quantidade de partcipantes: "));
if (100 >= participantes) {

    console.log("Cadastro realizado com sucesso!");

} else {

    console.log("Quantidade de participantes excedida, tente novamente.");
    break

}

contador++
}



