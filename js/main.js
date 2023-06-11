/*
Ejercicio1: Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y 
alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/

let colaOrigical = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];

function dividirCola(cola){
    let cola1 = new Colas();
    let cola2 = new Colas();
    console.log(cola);
    cola.forEach((element,index) =>{
        index % 2 === 0 ? cola1.enqueue(element): cola2.enqueue(element);
    });
    return [cola1, cola2];
}

let [cola1, cola2] = dividirCola(colaOrigical);
console.log(cola1);
console.log(cola2);

/*
Ejercicio2: Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por
esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
Cola: [
{ user:‘User1’, ticket:true },
{ user:‘User2’, ticket:true },
{ user:‘User3’, ticket:false },
{ user:‘User4’, ticket:true },
{ user:‘User5’, ticket:false },
{ user:‘User6’, ticket:false },
{ user:‘User7’, ticket:true },
{ user:‘User8’, ticket:true },
{ user:‘User9’, ticket:true },
{ user:‘User10’, ticket:false },
{ user:‘User11’, ticket:true },
];
*/
let colaInicial = [
    { user:"User1", ticket:true },
    { user:"User2", ticket:true },
    { user:"User3", ticket:false },
    { user:"User4", ticket:true },
    { user:"User5", ticket:false },
    { user:"User6", ticket:false },
    { user:"User7", ticket:true },
    { user:"User8", ticket:true },
    { user:"User9", ticket:true },
    { user:"User10", ticket:false },
    { user:"User11", ticket:true },
    ];

console.log(colaInicial);

function verificarCola(cola){
    let cola1 = new Colas();
    let cola2 = new Colas();
    cola.forEach((element) => {
        element.ticket === true ? cola1.enqueue(element): cola2.enqueue(element);
    })
    return [cola1, cola2];
}

let [colaSinColados, colaColados] = verificarCola(colaInicial);

console.log("Cola Inicial");
console.table(colaInicial);
console.log("Cola de colados eliminados");
console.table(colaColados.queue);
console.log("Cola Final de usuarios con Tickets");
console.table(colaSinColados.queue);