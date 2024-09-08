function calculateBMI() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const bmi = (weight / (height * height)).toFixed(2);
    
    const resultElement = document.getElementById('result');
    
    let category = '';
    let className = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        className = 'underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        className = 'normal';
    } else if (bmi < 29.9) {
        category = 'Overweight';
        className = 'overweight';
    } else {
        category = 'Obesity';
        className = 'obesity';
    }
    
    resultElement.innerText = `Your BMI is ${bmi} (${category})`;
    resultElement.className = `result ${className}`;
    resultElement.style.display = 'block';
}
