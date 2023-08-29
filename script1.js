const myInput = document.getElementById('myInput');
const output = document.getElementById('output');
const option = document.getElementById('o1');
const welcome = 'Thanks for choosing    ';
myInput.addEventListener('input', updateDisplay);
function updateDisplay() {
    if (myInput.value == '$5-$89') {
        output.textContent = welcome + 'SILVER_PACKAGE';
    }
    else if (myInput.value === '$90-$150') {
        output.textContent = welcome + 'GOLD_PACKAGE';
    }
    else {
        output.textContent = welcome + '  PREMIUM_PACKAGE';
    }
}
