let input = document.querySelector("input");
let texto = document.querySelector("#texto");

input.addEventListener('keyup', getData);

function getData(e){

    let str = e.target.value;
    texto.innerText = str.split('').reverse().join('');
}