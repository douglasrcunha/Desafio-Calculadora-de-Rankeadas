let rankeada = {
	vitorias: 101,
    derrotas: 20
}

function saldoVitorias(rankeada){
	let soma = rankeada.vitorias - rankeada.derrotas;
    return soma;
}

let saldo = saldoVitorias(rankeada);
let nivel;

function nivelAtual(saldo){	
    if(saldo < 10){
          nivel = "Ferro";
    }else if(saldo >= 11 && saldo <= 20){
        nivel = "Bronze";
    }else if(saldo >= 21 && saldo <= 50){
        nivel = "Prata";
    }else if(saldo >= 51 && saldo <= 80){
        nivel = "Ouro";
    }else if(saldo >= 81 && saldo <= 90){
        nivel = "Diamante";
    }else if(saldo >= 91 && saldo <= 100){
        nivel = "Lendário";
    }else if(saldo >= 101){
        nivel = "Imortal";	
    }
    return nivel;
}

console.log("O Herói tem de saldo de " + saldoVitorias(rankeada) + " vitórias e está no nível de " + nivelAtual(saldo) + ".");