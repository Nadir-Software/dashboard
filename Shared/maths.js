const inputElement = document.getElementById("maths");
const outputElement = document.getElementById("answer");

function calculate() {
    var input = inputElement.value.replace(/[^+\-*/()^0-9x]/g, '').replace(/\^/g, '**').replace(/x/g, '*');

    if (input == "") {
        outputElement.innerHTML = "";
    }

    else {
        var output = eval(input);
        outputElement.innerHTML = output;
    }
}

const binaryElement = document.getElementById("binary");
const denaryElement = document.getElementById("denary");
const hexadecimalElement = document.getElementById("hexadecimal");

function convertBase(base) {
    if (base === "binary") {
        var binaryInput = binaryElement.value;
        var denaryOutput = parseInt(binaryInput, 2);
        denaryElement.value = denaryOutput;
        var hexadecimalOutput = denaryOutput.toString(16);
        hexadecimalElement.value = hexadecimalOutput;
    }

    else if (base === "denary") {
        var denaryInput = denaryElement.value;
        var binaryOutput = parseInt(denaryInput, 10).toString(2);
        binaryElement.value = binaryOutput;
        var hexadecimalOutput = parseInt(denaryInput, 10).toString(16);
        hexadecimalElement.value = hexadecimalOutput;
    }

    else if (base === "hexadecimal") {
        var hexadecimalInput = hexadecimalElement.value;
        var denaryOutput = parseInt(hexadecimalInput, 16);
        denaryElement.value = denaryOutput;
        var binaryOutput = denaryOutput.toString(2);
        binaryElement.value = binaryOutput;
    }
}