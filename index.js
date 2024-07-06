function calculate(e) {
    let clicked = e.target.dataset.value;
    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.','3.14'];
    let res = document.getElementById('res');

    if (num.includes(clicked)) {
        res.firstElementChild.innerHTML += clicked;
    } else if (clicked === 'C') {
        res.firstElementChild.innerHTML = '';
    } else if (clicked === "backspace") {
        let t = res.firstElementChild.innerHTML;
        res.firstElementChild.innerHTML = t.slice(0, t.length - 1);
    } else if (['(', ')'].includes(clicked)) {
        res.firstElementChild.innerHTML += clicked;
    } else if (['+', '-', '*', '/', '%', '^', '!'].includes(clicked)) {
        res.firstElementChild.innerHTML += clicked;
    } else if (clicked === '=') {
        try {
            let expression = res.firstElementChild.innerHTML;
            expression = expression.replace('^', '**');
            expression = expression.replace('!', 'factorial');
            let result = eval(expression);
            res.firstElementChild.innerHTML = result;
        } catch (error) {
            res.firstElementChild.innerHTML = 'Error';
        }
    } else {
        console.log('Invalid input');
    }
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

let columns = document.querySelectorAll('.column');
columns.forEach(element => {
    element.addEventListener('click', calculate);
});
