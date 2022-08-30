const h1 = document.querySelector("h1");
const form = document.querySelector('#form');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector('#btnCalcular');
const pRes = document.querySelector('#result');

form.addEventListener('focus', sumarInputValue)

function sumarInputValue(event) {
  // console.log({ event });
  event.preventDefault();
  const sum = parseInt(input1.value) + parseInt(input2.value);
  pRes.innerText = "Resultado: " + sum;
  // alert('virus');
}