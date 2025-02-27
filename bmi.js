document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcBMI").addEventListener("click", calculateBMI);
});

function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let resultText = document.getElementById("bmiResult");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultText.innerHTML = "❌ Please enter valid height and weight!";
        resultText.style.color = "red";
        return;
    }

    let bmi = weight / (height * height);
    let category = "";
    let className = "";
    let iconSrc = "";

    if (bmi < 18.5) {
        category = "Wasted";
        className = "wasted";
        iconSrc = "https://img.icons8.com/ios/50/4A90E2/sad.png"; // Blue sad face
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
        className = "normal";
        iconSrc = "https://img.icons8.com/ios/50/4CAF50/happy.png"; // Green happy face
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        className = "overweight";
        iconSrc = "https://img.icons8.com/ios/50/FFD700/neutral.png"; // Yellow neutral face
    } else if (bmi >= 30 && bmi <= 39.9) {
        category = "Obese";
        className = "obese";
        iconSrc = "https://img.icons8.com/ios/50/FF8C00/sad.png"; // Orange sad face
    } else {
        category = "Extremely Obese";
        className = "extremely-obese";
        iconSrc = "https://img.icons8.com/ios/50/D32F2F/angry.png"; // Red angry face
    }

    resultText.innerHTML = `BMI: ${bmi.toFixed(2)} - 
        <span class="bmi-category ${className}">${category}</span>
        <img src="${iconSrc}" class="icon" alt="Icon">`;
    resultText.style.color = "black";
}
