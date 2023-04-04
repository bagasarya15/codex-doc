/* Latihan 1 Menggunakan TRY CATCH*/
/*
const getNilai=(nilaiMurid)=>{
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
    console.log("Validation Error : " + e)
}
}
getNilai('90')
*/


/* ------ DIAGONAL GANJIL DENGAN FOR ------ */
/*
const diagonal=(input)=>{
   for (let i = 1 ; i <= input ; i++) {
      let line = "";
      for (let j = input; j > 0; j--) {
      if (i % 2 == 1 ){
         line += j == i ? j : " *";
   }
      }
      console.log(line);
    }
  }
  diagonal(13)
  */

 
 // CARA LAINNYA
 /*
var s = '';
var input = 9;
for(var i = 1; i <= input; i++){
 for(var j = 1; j <= input - i; j++){
  s += '  ';
 }
   if(i % 2== 1){
  s += i;}
 s += '\n';   
}
console.log(s);
*/



/* ----- DIAGONAL GANJIL DENGAN WHILE ----- */
/*
const diagonal2=(input)=>{
let i = 0;
while(i <= input ) {
i++
let j = input;
let line=''
if (i % 2 == 1 ){
while (j > 0) {
   line += j == i ? j : "  ";
   j--   
}
console.log(line);
}
}
}
diagonal2(13)
*/

// let star="*"
// let space = " "
// console.log(space.repeat(1) + star.repeat(5) + star.repeat(6))
// console.log(space.repeat(2) + star.repeat(4) + star.repeat(5))
// console.log(space.repeat(3) + star.repeat(3) + star.repeat(4))
// console.log(space.repeat(4) + star.repeat(2) + star.repeat(3))
// console.log(space.repeat(5) + star.repeat(1) + star.repeat(2))
// console.log(space.repeat(6) + star.repeat(1))


/*
let space =''
for(let i = 1 ; i <= 5 ; i++){
  let star =''
for (let j = 5 ; j >= 1 ; j--){
   star += "*"
   console.log(star)
  }

}
*/
