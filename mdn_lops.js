/*
APRENDIZAJE INTERACTIVO 
*/
let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);

/*
const para = document.createElement('p');— crea un nuevo párrafo.
output.appendChild(para);— añade el párrafo al resultado <div>.
para.textContent =— hace que el texto dentro del párrafo sea igual a lo que coloques en el lado derecho, después del signo igual.
*/

while (i >= 0) {
    const para = document.createElement('p');
    
    if (i === 10) {
        para.textContent = "Countdown " + i;
    } else if (i === 0) {
        para.textContent = "Blast off!";
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
    i--;
}

/*
Aprendizaje activo: completar una lista de invitados

En este ejercicio, queremos que tome una lista de nombres almacenados en una matriz y los coloque en una lista de invitados. 

Pero no es tan fácil: no queremos dejar entrar a Phil y Lola porque son codiciosos y groseros, ¡y siempre se comen toda la comida! Tenemos dos listas, una para que los invitados admitan y otra para que los invitados rechacen.

refused.textContent +=- el comienzo de una línea que concatenará algo al final de refused.textContent.
admitted.textContent +=- el comienzo de una línea que concatenará algo al final de admitted.textContent.

*/

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Phil" || people[i] === "Lola") {
            refused.textContent += people[i] + ", ";

    } else {
        admitted.textContent += people[i] + ", ";
    }
}

// arreglar para que al final de la lista haya un punto final.

// refused.textContent += ;
// admitted.textContent += ;

// TEST YOUR SKILLS - LOOPS
/* EXERCISE 1
En nuestra primera tarea de bucle queremos que comience creando un bucle simple que recorra todos los elementos del archivo proporcionado myArray y los imprima en la pantalla dentro de los elementos de la lista (es decir, <li> elementos), que se adjuntan al archivo list.

*/
const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

let index = 0;

while (index < myArray) {
    index++;
    list.InnerHTML = `list ${myArray[i]}`;
}

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(list);

/* EXERCISE 2
*/


