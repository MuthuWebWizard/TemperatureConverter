let inputValue = document.getElementById('input');
let resultValue = document.getElementById('result');

function convertToFah() {
    let celVal = document.getElementById('input').value;
    let fahVal = (9 / 5 * celVal) + 32;
    let result = fahVal.toFixed(2) + " " + "Fahrenheit";
    document.getElementById('result').textContent = result;
}

function convertToCel() {
    let fahVal = document.getElementById('input').value;
    let celVal = (fahVal - 32) * 5 / 9;
    let result = celVal.toFixed(2) + " " +"Celsius";
    document.getElementById('result').textContent = result;
}

function convertToKel() {
    let celVal = document.getElementById('input').value;
    let kelVal = parseFloat(celVal) + 273.15;
    let result = kelVal.toFixed(2) + " " + "Kelvin";
    document.getElementById('result').textContent = result;
}