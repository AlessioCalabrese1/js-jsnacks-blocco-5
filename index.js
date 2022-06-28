/* 
 * Crea 10 oggetti che rappresentano un peperone, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutti i peperoni.
 */

const peperoni = [];
const peperoniTipi = ["Peperone Rosso", "Peperone Giallo", "Peperone Verde"];
let minPeso = 3;
let maxPeso = 10;
let minLunghezza = 20;
let maxLunghezza = 50;
let minTipo = 0;
let maxTipo = 2;

for (let index = 0; index < 10; index++) {
    peperoni[index] = {
        "varietà" : peperoniTipi[randomTipi(minTipo, maxTipo)],
        Peso : randomPeso(minPeso, maxPeso),
        lunghezza : randomLunghezza(minLunghezza, maxLunghezza)
    }
}

let pesoTotale = 0;
for (let index = 0; index < peperoni.length; index++) {
    pesoTotale = pesoTotale + peperoni[index].Peso;
    
}
console.log(peperoni);
console.log(pesoTotale);

function randomPeso(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function randomLunghezza(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function randomTipi(min, max) {
    return Math.floor((Math.random() * max) + min);
}