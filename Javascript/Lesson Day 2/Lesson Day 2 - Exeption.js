/* ------EXCEPTION------ */
/* TRY-CATCH*/
/* Agar sistem terus berjalan walupun ada eror */
/*
try{
    penambahan();
    console.log(hasil);

}catch(e){
    console.log(e.name,":", e.message);
}

console.log("Silahkan Coba Lagi")
*/

/* WITH THROW */
/*
let angka = 20
try{
    if(angka==="") 
    throw new ReferenceError ("Silahkan fungsinya dibuat terlebih dahulu")
    console.log("umur anda :" + angka);


}catch(e){
    console.log(e.name,":" ,e.message );
}
*/

/*CONTOH 2*/
/*
let angka = 20
try{
    if(angka==="") 
    throw new ReferenceError ("Tidak boleh kosong")
    if(typeof angka != 'number')
    throw new ReferenceError ("Harus angka")
    console.log("umur anda :" + angka);


}catch(e){
    console.log(e.name,":" ,e.message );
}
*/

/* MENGGUNAKAN FUNCTION */
/*
const errorCustomHandling=(nama,msg)=>{
    return {name:nama,message:msg}
}

let angka = 20
try{
    if(angka==="") 
    throw errorCustomHandling ("Validation Eror","Tidak boleh kosong")
    if(typeof angka != 'number')
    throw errorCustomHandling ("Validation Eror","Harus angka")
    console.log("Umur Anda :" + angka);


}catch(e){
    console.log(e.name,":" ,e.message );
}
*/


/* LATIHAN */
/*
let nilaiMurid = 49
try{
    if(nilaiMurid ==="") throw "Nilai tidak boleh kosong"
    if(typeof nilaiMurid != 'number') throw "Nilai harus angka"

    if(nilaiMurid >= 90 && nilaiMurid <= 100 ){
        nilaiResult = 'Grade : A';
     }else if ( nilaiMurid >= 80 && nilaiMurid <= 89) {
        nilaiResult = 'Grade : B+'; 
     } else if (nilaiMurid >= 75 && nilaiMurid <= 79) {
        nilaiResult = 'Grade : B'; 
     }else if (nilaiMurid >= 70 && nilaiMurid <= 74) {
        nilaiResult = 'Grade : C+'; 
     } else if (nilaiMurid >= 60 && nilaiMurid <= 69) {
        nilaiResult = 'Grade : C'; 
     }else if (nilaiMurid >= 50 && nilaiMurid <= 59) {
        nilaiResult = 'Grade : D'; 
     }else{
        nilaiResult = 'Grade : E';
     }
    
 console.log(nilaiResult)

}catch(e){
    console.log("Validation Error " + e)

}
*/
