//return response
fetch("https://opentdb.com/api.php?amount=10&category=18")
.then(response => response.json())
.then(data => console.log(data));

let clockId;
let time = 60;
let banner = document.querySelector('.banner');
let clock = document.querySelector('#time');
document.getElementById('start').addEventListener('click',handleStart);

function handleStart() {
    clockId = setInterval(handleClock,1000);
    banner.innerHTML = `<div><h1>${questions[1].question}</h1></div> `
};

function handleClock() {
    clock.innerText = time;
    if (time<1) {
        clock.innerText = 0;
        return clearInterval(clockId);
    };
    time--;
};