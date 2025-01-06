/*Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas) 

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 




*/

let nivel = "";



function calcularPontosDePartida(vitorias , derrotas){
    let saldoRankeada = vitorias - derrotas;
    

    if(vitorias < 10){
        nivel = "Ferro"
    }else if(vitorias <= 20){
        nivel ="Bronze"
    }else if(vitorias <= 50){
        nivel ="Prata"
    }else if(vitorias <= 80){
        nivel ="Ouro"
    }else if(vitorias <= 90){
        nivel ="Diamante"
    }else if(vitorias <= 100){
        nivel ="Lendário"
    }else{
        nivel ="Imortal"
    }


    return saldoRankeada;
}

let ranking = calcularPontosDePartida(81, 1);


console.log(`O Herói tem de saldo ${ranking} e está no nivel: ${nivel}`);
