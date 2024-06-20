/*
APRENDIZAJE INTERACTIVO 
*/
let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

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
//////////////////////////////






/*
Aprendizaje activo: completar una lista de invitados

En este ejercicio, queremos que tome una lista de nombres almacenados en una matriz y los coloque en una lista de invitados. 

No queremos dejar entrar a Phil y Lola porque son codiciosos y groseros, ¡y siempre se comen toda la comida! Tenemos dos listas, una para que los invitados admitan y otra para que los invitados rechacen.

refused.textContent +=- el comienzo de una línea que concatenará algo al final de refused.textContent.
admitted.textContent +=- el comienzo de una línea que concatenará algo al final de admitted.textContent.

*/

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
;
// loop starts here
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Phil" || people[i] === "Lola") {
            refused.textContent += people[i] + ", ";

    } else {
        admitted.textContent += people[i] + ", ";
    }
}

// arreglar para que al final de la lista haya un punto final. // ojoooooooooooooooooooooooo

// refused.textContent += ;
// admitted.textContent += ;
/////////////////////////////






// TEST YOUR SKILLS - LOOPS
/* EXERCISE 1 USING FOR OF - LOOP
In our first looping task we want you to start by creating a simple loop that goes through all the items in the provided myArray 
and prints them out on the screen inside list items (i.e., <li> elements), which are appended to the provided list.

*/
const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here

for (let value of myArray) {
    list.innerHTML += `<li>${value}</li>`
}

// Don't edit the code below here!
// const section = document.querySelector('section');
section.appendChild(list);

//////////////////////////////






/* EXERCISE 2 USING FOR - LOOP
In this next task, we want you to write a simple program that, given a name, searches an array of objects containing names
and phone numbers (phonebook) and, if it finds the name, outputs the name and phone number into the paragraph (para) 
and then exits the loop before it has run its course.

You are given three variables to begin with:

name — contains a name to search for
para — contains a reference to a paragraph, which will be used to report the results
phonebook - contains the phonebook entries to search.
*/

const name = 'Mustafa';
// const para = document.createElement('p');

const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

// Add your code here 

for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
        para.textContent = `${phonebook[i].name}: ${phonebook[i].number}`;
        break
    }
}

// Don't edit the code below here!
// const section = document.querySelector('section');
section.appendChild(para);






/*
En esta tarea final, se le proporciona lo siguiente:

i— comienza con un valor de 500; destinado a ser utilizado como iterador.
para— contiene una referencia a un párrafo que se utilizará para informar los resultados.
isPrime()— una función que, cuando se pasa un número, devuelve true si el número es primo y falsesi no.


Debe utilizar un bucle para recorrer los números del 2 al 500 hacia atrás (1 no se cuenta como número primo) 
y ejecutar la isPrime()función proporcionada en ellos. Para cada número que no sea primo, continúe con la 
siguiente iteración del ciclo. Por cada uno que sea número primo, agrégalo al del párrafo textContentjunto con algún tipo de separador.

Deberías usar un tipo de bucle que no hayas usado en las dos tareas anteriores.
*/

let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

// Add your code here

while (i >= 2) {
    isPrime(num);
    if (true) {
        para.textContent += `${i}`;
    }
    i--;
}

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);