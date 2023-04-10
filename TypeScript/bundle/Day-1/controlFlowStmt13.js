"use strict";
{
    let weight = 70; //kg
    let height = 1.72; //meter
    let bmi = weight / (height * height);
    let weightStatus;
    if (bmi < 18.5) {
        weightStatus = 'Underweight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        weightStatus = 'Helthy Weight';
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        weightStatus = 'Overweight';
    }
    else {
        weightStatus = 'Obesity';
    }
    console.log(weightStatus);
}
