// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//   case "Free":
//     console.log("Solo puedes tomar los cursos gratis");
//     break;
//   case "Basic":
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//     break;
//   case "Expert":
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//     break;
//   case "ExpertPlus":
//     console.log(
//       "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
//     );
//     break;
// }


// const tipoDeSuscripcion = 'Free';

// if (tipoDeSuscripcion == 'Free') {
//   console.log('Solo puedes tomar los cursos gratis')
// } else if (tipoDeSuscripcion == 'Basic'){
//   console.log('Puedes tomar casi todos los cursos de Platzi durante un mes')
// } else if (tipoDeSuscripcion == 'Expert') {
//   console.log('Puedes tomar casi todos lo cursos de Platzi durante un año')
// } else if (tipoDeSuscripcion == 'Expert +') {
//   console.log('Tú y alguien más pueden tomar Todos los cursos de platzi durante un año')
// } else {
//   console.log('Subscripción invalida')
// }

// for (let i = 0; i < 5; i++) {
//   console.log("El valor de i es: " + i);
// }

// let i=0;
// while (i < 5) {
//   console.log('El valor de i es: ' + i);
//   i++;
// }

// for (let i = 10; i >= 2; i--) {
//   console.log("El valor de i es: " + i);
// }

// let i = 10;
// while (i>=2) {
//   console.log('El valor de i es: ' + i);
//   i--;
// }

// const prompt = require('prompt-sync')({ sigint: true})
// let respuesta = parseInt(prompt('¿Cuanto es 2 + 2?'));

// while (respuesta != 4) {
//   console.log('intenta de nuevo');
//   respuesta = parseInt(prompt('Cuanto es 2+2'));
// }
// console.log('Correcto');

// var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa'];
// function leerFrutas(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// leerFrutas(frutas);

var frutas = {
  fruta: 'manzana',
  marca: 'wey',
};

// function leerFruta(object) {
//   Object.values(object).forEach(element => {
//     console.log(element)
//   });
// }
// leerFruta(frutas)

function imprimir(fruta) {
  // for (let i in fruta) {
  //   console.log(fruta[i])
  // }

  for (let i = 0; i < fruta.length; i++) {
    console.log(fruta[i]);    
  }
}
imprimir(frutas)