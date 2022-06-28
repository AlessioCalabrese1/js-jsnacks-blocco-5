/* 
 * Crea 10 oggetti che rappresentano un peperone, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutti i peperoni.
 */

/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const peperoni = [];
const peperoniTipi = ["Peperone Rosso", "Peperone Giallo", "Peperone Verde"];
let minPeso = 3;
let maxPeso = 10;
let minLunghezza = 8;
let maxLunghezza = 25;
let minTipo = 0;
let maxTipo = 2;

let peperoneMin15 = [];
let peperoneMax15 = [];

let listaPeperoniPeso = document.querySelector("ul");

let counterMin = 0;
let counterMax = 0;


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

for (let index = 0; index < peperoni.length; index++) {
    if (peperoni[index].lunghezza <= 15) {
        peperoneMin15[counterMin] = peperoni[index];
        counterMin++;
    } else if(peperoni[index].lunghezza > 15){
        peperoneMax15[counterMax] = peperoni[index];
        counterMax++;
    }
}

console.log(peperoneMin15);
console.log(peperoneMax15);

let pesoPeperoniMin15 = 0;
for (let index = 0; index < peperoneMin15.length; index++) {
    pesoPeperoniMin15 = pesoPeperoniMin15 + peperoneMin15[index].Peso;
}
let liElement = document.createElement("li");
liElement.innerHTML = "Il peso dei peperoni minori e uguali di 15 cm è: " + pesoPeperoniMin15;
listaPeperoniPeso.append(liElement);


let pesoPeperoniMax15 = 0;
for (let index = 0; index < peperoneMax15.length; index++) {
    pesoPeperoniMax15 = pesoPeperoniMax15 + peperoneMax15[index].Peso;
}
liElement = document.createElement("li");
liElement.innerHTML = "Il peso dei peperoni maggiori di 15 cm è: " + pesoPeperoniMax15;
listaPeperoniPeso.append(liElement);








function randomPeso(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function randomLunghezza(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function randomTipi(min, max) {
    return Math.floor((Math.random() * max) + min);
}