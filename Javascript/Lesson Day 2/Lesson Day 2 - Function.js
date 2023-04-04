
/*----REGULAR FUNCTION-----*/

/* FUNCTION VOID */
// VOID TIDAK MEMILIKI RETURN
/*
function greetings(){
    let msg = "Hallo Javascript"
    console.log(msg);
}
greetings()
*/

/* FUNCTION RETURN */
// MEMILIKI RETURN
/*
function greetings(){
    let msg = "Hallo Javascript"
    return msg
}
let result = greetings();
console.log(result)
console.log(greetings())
*/

/* Contoh Function Regular */
/*
function penambahan(x,y){
    return x+y
}
console.log(penambahan(6,5))
*/

/* Contoh Arrow Function */
/*
const penambahan = (x,y) =>{
    return x +y 
}
console.log(penambahan(6,5))
*/


/*----- ARROW FUNCTION ------*/
/*
const namaFunction=()=>{
    //isi
}
*/


/* ------ CALL BACK FUNCTION -------*/
// Function yang dijadikan parameter

/*
const startEngine=()=>{
    console.log('Engine Start...')
}

const changeCars=(gear)=>{
    console.log(`Masukan Gigi ${gear} untuk menjalankan mobil`)
}

const goCar=()=>{
    console.log('Mobil Berjalan')
}

const stopCar=()=>{
    console.log('Mobil Berhenti')
}

const shutDownEngine=()=>{
    console.log('Mesin mobil dimatikan')
}

const DriveCar=(cb)=>{
    cb(); //callback
    changeCars(1);
    goCar();
    stopCar();
    shutDownEngine();
}

DriveCar(startEngine)
*/


/* ------ANONYMOUS FUNCTION------- */
// Menjalannya tanpa harus di panggil (for In,ForEach , For map ,setTimeout)

//Anonymous Fucntion menggunakan setTimeout
/*
setTimeout(()=>{console.log('Engine Start...')},1000)
setTimeout((gear)=>{console.log(`Masukan Gigi ${gear} untuk menjalankan mobil`)},2000,5)
setTimeout(()=>{ console.log('Mobil Berjalan')},3000)
setTimeout(()=>{console.log('Mobil Berhenti')},4000)
setTimeout(()=>{console.log('Mesin mobil dimatikan')},5000)
*/