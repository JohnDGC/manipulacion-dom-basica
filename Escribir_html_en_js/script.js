const h1 = document.querySelector('h1');
console.log(h1);

const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
// const parrafito = document.getElementsByClassName('parrafito');
const pid = document.querySelector('#pid');
// const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
  h1,
  p,
  parrafito,
  pid,
  input
});

h1.innerHTML = 'Patito';
h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute("pantalla"));
// h1.setAttribute('class', 'rojo')

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = 'perro'

// document.createElement('img');
// console.log(document.createElement('img'))
const img = document.createElement('img');
img.setAttribute(
  "src",
  "https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png"
);
console.log(img);

// pid.innerHTML = '';
pid.replaceWith(img);
// pid.append(img);