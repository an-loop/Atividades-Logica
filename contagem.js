let listadealunos = ["Camile", "João", "Rosa", "Duda", "Mateus", "Davi"]; 

for(let numero = 1; numero < listadealunos.length; numero++) {
    if(numero == 0){

        console.log("o numero é ZERO");

    }  else if (numero % 2 == 0) {

        console.log(`o número é ${numero} é PAR`);

    } else if (numero % 2 == 1) {

        console.log(`o número ${numero} é IMPAR`);
    }

}