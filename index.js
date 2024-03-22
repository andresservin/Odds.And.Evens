const state = {
    numbers: [],
    odds: [],
    evens: [],
};

const numberBank = document.querySelector("#numberBank");
const odds = document.querySelector("#odds");
const evens = document.querySelector("#evens");
const form = document.querySelector("form");
const sortOne = document.querySelector("#sortOne");
const sortAll = document.querySelector("#sortAll");

form.addEventListener('submit', addNumber);
sortOne.addEventListener('click', sortOneNumber);
sortAll.addEventListener('click', sortAllNumbers);

function render (){
    numberBank.querySelector('output').innerHTML = '';
    
    state.numbers.forEach(number => {
        const span = document.createElement('span');
        span.style.marginRight = '20px';
        span.textContent = number;
        numberBank.querySelector('output').appendChild(span);
    });

    odds.querySelector('output').innerHTML = '';
    evens.querySelector('output').innerHTML = '';

    state.odds.forEach((number) => {
        const span = document.createElement('span');
        span.style.marginRight = '20px';
        span.textContent = number;
        odds.querySelector('output').appendChild(span);
     });
     state.evens.forEach((number) => {
        const span = document.createElement('span');
        span.style.marginRight = '20px';
        span.textContent = number;
        evens.querySelector('output').appendChild(span);
     });
    }

    function addNumber(event){
    event.preventDefault();
    const number = parseInt(event.target.number.value);
    if (!isNaN(number)) {
        state.numbers.push(number);
        console.log(state.numbers);

        const span = document.createElement('span');
        span.style.marginRight = '20px';
        span.textContent = number;
        numberBank.querySelector('output').appendChild(span);

    //clears input box
    event.target.number.value = ''

    }
}

function sortOneNumber(){
    const number = state.numbers.shift();
    if (number % 2 === 0){
        state.evens.push(number);
    } else {
        state.odds.push(number);
    }
    render();
}

function sortAllNumbers(){
    state.numbers.forEach((number) =>{
        if(number % 2 === 0){
            state.evens.push(number);
        }else {
            state.odds.push(number);
        }
    });
    state.numbers = [];
    render();
}