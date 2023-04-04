/* ----SCOPE VARIABLE---- */
/* Let bisa dirubah , 
Kalau Const tidak bisa dirubah.
Var selalu bersifat Global ,akan menimpa var yang diatas nya ,
kalau Let tidak menimpa atas ny jika di deklarsi lagi dengan Let
*/ 

/*
let str = 'Hi' //deklarisi secara global

function say(){
    str = 'Hello' // deklarsi hanya untuk di dalam block , jika menggunakan let akan di anggap berbeda
    console.log(str);//Hello

}

say();
console.log(str)//Hello
*/

/*
let str = 'Hi' //deklarisi secara global

function say(){
    let str = 'Hello' // deklarsi hanya untuk di dalam block , jika menggunakan let akan di anggap berbeda
    console.log(str); // Hello

}
say();
console.log(str)//Hi
*/


/*
let greeting = "say Hi"
let times = 4
if ( times > 3) {
    let hello = "say Hello instead"
    console.log(hello);//say Hello instead
}
console.log(hello)//hello is not defined (Akan eror karna hello bukan deklari global)
*/