// let message = 'Hi Bagas'

// function say(){
//     let message= 'Hello'
//     console.log(message)
// }

// say();
// console.log(message);

// let greeting = 'Say Hi';
// let hello = 'Hello';

// function newFunction() {
//     let hello = 'Zufar '
//     return hello;
// }

// console.log(newFunction());

// function greeting(){
//     let greeting = 'Welcome';
//     let time = 3;
//     let hello3 = 'Selamat Sore';
//     let hello2 = 'Selamat Sore';

//     if(time == 3){
//         console.log(hello3);
//     }else if( time == 2){
//         console.log(hello2)
//     }
//     return `${hello2}, ${hello3}`
// }

// console.log(greeting())

// function testConvert(){
//     // let x = 10;
//     // let y = +x;

//     // let weight = 90;
//     // weight = ++weight + 5;

//     // let weight = 90;
//     // weight = weight ++;

//     // let f = false, t = true;
//     // return +f;
// }

// console.log(testConvert())

// let counter = '100'

// if(counter == 100){
//     console.log('sama')
// }else{
//     console.log('beda')
// }

// let age = 15;
// let state = 'JPN';

// if(state == 'JPN'){
//     if(age >= 16){
//         console.log('You can in the room');
//     }else {
//         console.log('You can`t in the room');
//     }
// }

// let weight = 70; //kg
// let height = 1.72; //meter

// let bmi =  weight / (height * height);

// let weightStatus;

// if(bmi < 18.5) {
//     weightStatus = 'Underweight';
// }else if(bmi >= 18.5 && bmi <= 24.9) {
//     weightStatus = 'Helthy Weight';
// }else if(bmi >= 25 && bmi <= 29.9) {
//     weightStatus = 'Overweight';
// }else{
//     weightStatus = 'Obesity';
// }

// console.log(weightStatus)

// let nilai = 69;

// if(nilai >= 90 && nilai <= 100){
//     console.log('Grade A')
// }else if(nilai >= 80 && nilai <= 89){
//     console.log('Grade B+')
// }else if(nilai >=75 && nilai <= 79){
//     console.log('Grade B')
// }else if(nilai >=60 && nilai <= 69 ){
//     console.log('Grade C+')
// }else if(nilai >=50 && nilai <=59){
//     console.log('Grade C')
// }else {
//     console.log('Grade D')
// }

//Ternary Operator
// let age = 18;
// let message;

// age >= 16 ? (message = 'You can drive') : (message = 'You cannot drive.');

// console.log(message);

// let speed = 130;

// let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'Ok';
// console.log(message);

// if(speed >= 120){
//     console.log('Too Fast')
// }else if( speed >= 80){
//     console.log('Fast')
// }else{
//     console.log('Ok')
// }

// Latihan Convert To Switch Case

// let weight = 55; //kg
// let height = 1.85; //meter

// let bmi =  weight / (height * height);

// switch(true){
//     case bmi < 18.5 :
//         console.log('Underweight')
//         break;
//     case bmi >= 18.5 && bmi <= 24.9 :
//         console.log('Helthy Weight')
//         break;
//     case bmi >= 25 && bmi <= 29.9 :
//         console.log('Overweight');
//         break;
//     default:
//         console.log('Obesity')
// }


// let nilai = 89;
// switch(true){
//     case nilai >= 90 && nilai <= 100 :
//         console.log('Grade A');
//         break;
//     case nilai >= 80 && nilai <= 89 :
//         console.log('Grade B+');
//         break;
//     case nilai >=75 && nilai <= 79 :
//         console.log('Grade B');
//         break;
//     case nilai >=60 && nilai <= 69 :
//         console.log('Grade C+');
//         break;
//     case nilai >=50 && nilai <-59 :
//         console.log('Grade C');
//         break;
//     default :
//         console.log('Grade D');
// }