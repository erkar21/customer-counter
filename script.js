const titleEl = document.querySelector('.title')
const countEl = document.querySelector('.count')

let greet = 'Have a nice day'
let customerName = 'Erkr !'

function greeting () {
    titleEl.textContent = greet + ' ' + customerName 
}

let count = 0;
countEl.textContent = count;

function increase () {
    count = count + 1;
    countEl.textContent = count;
}

function decrease () {
    count = count - 1;
    countEl.textContent = count;
}