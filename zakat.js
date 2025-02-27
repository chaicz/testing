document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcZakat").addEventListener("click", calculateZakat);
});

function calculateZakat() {
    let income = parseFloat(document.getElementById("income").value);
    let resultText = document.getElementById("result");

    if (isNaN(income) || income <= 0) {
        resultText.innerHTML = "❌ Please enter a valid yearly income!";
        resultText.style.color = "red";
        return;
    }

    let zakat = income * 0.025;  // 2.5% Zakat
    resultText.innerHTML = `✅ Zakat Amount: RM ${zakat.toFixed(2)}`;
    resultText.style.color = "green";
}
