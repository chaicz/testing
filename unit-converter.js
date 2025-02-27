document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cmToM").addEventListener("click", function() { convertUnit('cmToM'); });
    document.getElementById("mToCm").addEventListener("click", function() { convertUnit('mToCm'); });
    document.getElementById("mToKm").addEventListener("click", function() { convertUnit('mToKm'); });
    document.getElementById("kmToM").addEventListener("click", function() { convertUnit('kmToM'); });
});

function convertUnit(conversionType) {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let resultText = document.getElementById("result");

    if (isNaN(inputValue) || inputValue <= 0) {
        resultText.innerHTML = "❌ Please enter a valid number!";
        resultText.style.color = "red";
        return;
    }

    let convertedValue;
    switch (conversionType) {
        case 'cmToM': 
            convertedValue = inputValue / 100;
            resultText.innerHTML = `✅ ${inputValue} cm = ${convertedValue.toFixed(2)} m`;
            break;
        case 'mToCm': 
            convertedValue = inputValue * 100;
            resultText.innerHTML = `✅ ${inputValue} m = ${convertedValue.toFixed(2)} cm`;
            break;
        case 'mToKm': 
            convertedValue = inputValue / 1000;
            resultText.innerHTML = `✅ ${inputValue} m = ${convertedValue.toFixed(2)} km`;
            break;
        case 'kmToM': 
            convertedValue = inputValue * 1000;
            resultText.innerHTML = `✅ ${inputValue} km = ${convertedValue.toFixed(2)} m`;
            break;
    }
    resultText.style.color = "green";
}
