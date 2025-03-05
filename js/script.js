const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const formula = document.getElementById('formula');

window.addEventListener('load', () => {
    celsius.focus();
});

function processInput(value) {
    value = value.replace(/,/g, '.');
    value = value.replace(/[^0-9.]/g, '');
    
    const parts = value.split('.');
    if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('').slice(0, parts[1].length);
    }

    return value;
}

celsius.addEventListener('input', () => {
    let value = celsius.value;
    value = processInput(value);

    if (value !== "") {
        jSuites.mask.run(parseFloat(value), '0.00');
        fahrenheit.value = ((parseFloat(value) * 9) / 5 + 32).toFixed(2);
        formula.textContent = `${value} °C * 9/5 + 32 = ${fahrenheit.value} °F`;
    } else {
        fahrenheit.value = "";
        formula.textContent = "";
    }

    celsius.value = value;
});

fahrenheit.addEventListener('input', () => {
    let value = fahrenheit.value;
    value = processInput(value);

    if (value !== "") {
        celsius.value = (((parseFloat(value) - 32) * 5) / 9).toFixed(2);
        formula.textContent = `${value} °F - 32 * 5/9 = ${celsius.value} °C`;
    } else {
        celsius.value = "";
        formula.textContent = "";
    }

    fahrenheit.value = value;
});