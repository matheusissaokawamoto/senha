alert("BOas -Vindas ao Jogo do Número Secreto")
let numeroSecreto = 2;
let chute;
let tentativas =1;
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número de 1 a 10?");

if(chute == numeroSecreto){
    console.log(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`)
}
else{
    if(numeroSecreto> chute){
        alert(`O número secreto é maior que ${chute}`)

    } else{
        alert(`O número secreto é menor que ${chute}`)
    }
}
}