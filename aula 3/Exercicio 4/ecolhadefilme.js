

let tempodofilme = 120; // Duração do filme em minutos
let tempolivre = 90; // Tempo que temos livre em minutos

if (tempodofilme % tempolivre == 0) {
    console.log('Temos tempo ainda para assistir um filme');
} else {
    console.log('Não temos tempo para ver um filme');
}