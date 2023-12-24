let nivel
let  vitoria = 50
let derrota = 23

switch (true) {
    case vitoria < 10:
        nivel = "Ferro";
        break;
    case vitoria > 10 && vitoria <= 20:
        nivel = "Bronze";
        break;
    case vitoria > 20 && vitoria <= 50:
        nivel = "Prata";
        break;
    case vitoria > 50 && vitoria <= 80:
        nivel = "Ouro";
        break;
    case vitoria > 80 && vitoria <= 90:
        nivel = "Diamante"
        break;
    case vitoria > 90 && vitoria <= 100:
        nivel = "Lendário";
        break;
    case vitoria > 100:
        nivel = "Imortal";
    
}

function Calculo (vitoria,derrota){
    let saldo;
    saldo = vitoria - derrota;
    console.log(`O herói tem saldo de ${saldo} está no nível ${nivel} `);
}

Calculo(vitoria,derrota)