var nomeDoHeroi = "Hero";
var experienciaDoHeroi = 998;


var nivel;

switch (true) {
    case (experienciaDoHeroi < 1000):
        nivel = "Ferro";
        break;
    case (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000):
        nivel = "Bronze";
        break;
    case (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000):
        nivel = "Prata";
        break;
    case (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000):
        nivel = "Ouro";
        break;
    case (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000):
        nivel = "Platina";
        break;
    case (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000):
        nivel = "Ascendente";
        break;
    case (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000):
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}


console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);
