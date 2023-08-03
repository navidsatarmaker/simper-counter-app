let countEl = document.getElementById('current-position-el')
let count = 0;

let historyEl = document.getElementById('history-el')

function incrementor() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    historyEl.textContent = historyEl.textContent + " " + count + " - ";
    count = 0;
    countEl.innerText = count;
}

function reset() {
    historyEl.innerHTML = `<div id="history-el" class="count-history-el">History : </div>`;
    count = 0;
    countEl.innerText = count;
}

