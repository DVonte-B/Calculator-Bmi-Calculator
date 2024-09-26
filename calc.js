const myDisplay = document.getElementById('myDisplay');



function appendToDisplay(input) {
    myDisplay.value += input;
}

function clearDisplay() {
    myDisplay.value = '';
}

function calculateDisplay() {
    myDisplay.value = eval(myDisplay.value)
}


//clear display: complete
//append to the display: 
//calculate the display: 



function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

  let bmi = (weight / (height * height) * 703).toFixed(2);
  let h2 = document.createElement('h2');
  document.getElementById('your-bmi').innerHTML = `Your BMI is: ${bmi}`

    if (bmi <= 24.9) {
        document.getElementById('message').innerHTML = "You're UnderWeight!"
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = "You're Healthy!"
    } else if (bmi > 30) {
        document.getElementById('message').innerHTML = "You're OverWeight"
    } else {
        document.getElementById('message').innerHTML = "Enter a Value"
    }
}

function clearBMI() {
    window.location.reload()
};