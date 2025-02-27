document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addBtn").addEventListener("click", function() { calculate('+'); });
    document.getElementById("subBtn").addEventListener("click", function() { calculate('-'); });
    document.getElementById("mulBtn").addEventListener("click", function() { calculate('*'); });
    document.getElementById("divBtn").addEventListener("click", function() { calculate('/'); });
    document.getElementById("clearBtn").addEventListener("click", clearFields);
});

function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultText = document.getElementById("calcResult");

    if (isNaN(num1) || isNaN(num2)) {
        resultText.innerText = "❌ Please enter valid numbers!";
        resultText.style.color = "red";
        return;
    }

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if (num2 === 0) {
                resultText.innerText = "❌ Cannot divide by zero!";
                resultText.style.color = "red";
                return;
            }
            result = num1 / num2;
            break;
    }

    resultText.innerText = `✅ Result: ${result.toFixed(2)}`;
    resultText.style.color = "green";
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("calcResult").innerText = "";
}
