let nomeJogador= "João";
let pontuacao = placarComparativo(2008, 10);

if (pontuacao <=10){
    nivel = "Ferro";
} else if (pontuacao >= 11 && pontuacao <= 20){
    nivel = "Bronze";
}else if (pontuacao >= 21 &&pontuacao <= 50){
    nivel = "Prata";
}else if (pontuacao >= 51 &&pontuacao <= 80){
    nivel = "Ouro";
}else if (pontuacao >= 81 &&pontuacao <= 90){
    nivel = "Diamante";
}else if (pontuacao >= 91 &&pontuacao <= 100){
    nivel = "Lendário";
} else {
    nivel = "Imortal";

}

console.log("O Herói " + nomeJogador + " tem um saldo de " + pontuacao + " e está no nível: " + nivel);


function placarComparativo(vitJogador, derrJogador){
    let placar = vitJogador - derrJogador;
    return placar

}