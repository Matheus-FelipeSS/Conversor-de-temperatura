const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const formula = document.getElementById('formula');

window.addEventListener('load', () =>{
    celsius.focus();
})

celsius.addEventListener('input', () => {
    if (celsius.value.match(/[^0-9.]/g)) {
        celsius.value = celsius.value.replace(/[^0-9.]/g, '');
    }
    
    if (celsius.value.split('.').length > 2) {
        celsius.value = celsius.value.slice(0, -1);
    }

    if (celsius.value !== "") {
        fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
        
        formula.textContent = `${celsius.value} °C * 9/5 + 32 = ${fahrenheit.value} °F`;
    } else {
        fahrenheit.value = "";
        formula.textContent = "";
    }
});

fahrenheit.addEventListener('input', () => {
    if (fahrenheit.value.match(/[^0-9.]/g)) {
        fahrenheit.value = fahrenheit.value.replace(/[^0-9.]/g, '');
    }

    if (fahrenheit.value.split('.').length > 2) {
        fahrenheit.value = fahrenheit.value.slice(0, -1);
    }

    if (fahrenheit.value !== "") {
        celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
        
        formula.textContent = `${fahrenheit.value} °F - 32 * 5/9 = ${celsius.value} °C`;
    } else {
        celsius.value = "";
        formula.textContent = "";
    }
});
