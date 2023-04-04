// let a = BigInt(1000000001);
// let b = BigInt(1000000002);
// let c = BigInt(1000000003);
// let d = BigInt(1000000004);
// let e = BigInt(1000000005);

// let hasil = a + b +c+ d +e;
// console.log(hasil)

/*
let sum =0
let numbers = [1000000001,1000000002,1000000003,1000000004,1000000005];

for ( let value of numbers){
    sum += value;}

console.log(sum)
*/


let arrayAngka = [1000000001,1000000002,1000000003,1000000004,1000000005];

const hasil = arrayAngka.reduce((nilaiSebelumnya,nilaiSaatIni) =>{
    return nilaiSebelumnya + nilaiSaatIni;
});

console.log(hasil);




