/* Coversion implicit langsung mengubah nilai didalam kodingan.
 Ekplisit mengubah nilai melalui parse method */

 /* CONTROL FLOW */
 
/*
 let age = 16
 let state = 'CA'
 if ( state =='CA' && age == 16){
    console.log('You Can Drive')
 } else {
    console.log("You Can't Drive")
 }
 */

 /* NESTED LOOP HARUS DI HINDARI
 if (state == 'CA'){
    if (age == 16){
        console.log('You Can Drive')
    }
 }
 */

 /*
 let weight  = 70
 let height = 1.72
 let bmi = weight /(height*height)

 let weightStatus;

 if(bmi < 18.8){
    weightStatus = 'Underweight';
 }else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = 'Healthly Weight'; 
 } else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = 'Over Weight'; 
 }else {
    weightStatus = 'Obesity';
 } 
 console.log(weightStatus);
 */



 /* TERNARY OPERATOR (Alternatif penulisan IF ELSE)
 // condition ? expressionIfTrue : expressionIfFalse 
 */

 /*-----CONTOH 1-------*/
 /*
 let age = 16;
 let message;
 age >=16 ? (message = ' You Can Drive') : (message = "You Can't Drive" )
console.log(message)
*/

// /*----CONTOH 2-----*/
/*Bentuk Ternary*/
/*
let speed = 90;
let notif = speed >=120 ? 'To Fast' : speed >= 80 ? 'Fast' : 'OK';
console.log(notif);
*/

/*----Bentuk If Else dari Ternary diatas-----*/

/*
if ( speed >= 120){
    notif='To Fast';
}else if ( speed >= 80){
    notif='Fast'
}else{
    notif='OK'
}
console.log(notif);
*/


/* ------SWITCH CASE-----*/

/*
 let weight  = 70
 let height = 1.72
 let bmi = weight /(height*height)

 let weightStatus;

 switch(true){ //boolean
    case bmi < 18.8:
        console.log('Underweight');
    break;
    case bmi >= 18.5 && bmi <= 24.9 :
        console.log('Healty weight');
    break;
    case bmi >= 25 && bmi <= 29.9 :
        console.log('Over weight');
    break;
    default:
        console.log('Obesity');
 }
 */


 /* CONTOH MENAMPILKAN HARI */

 /*
 let day =3;
 switch (day) {
	case 0:
		console.log("Sunday");
		break;
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	default:
		console.log("Something went horribly wrong...");
}
*/



