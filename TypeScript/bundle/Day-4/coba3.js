"use strict";
const sumDigit = (n) => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {
        //kondisi jika nilai n bukan angka
        if (isNaN(n)) {
            throw new Error(`${n} is not a number try again...`);
        }
        //kondisi jika n lebih besar atau sama dengan 10000
        else if (n >= 10000) {
            throw new Error(`${n} harus lebih kecil dari 10000...`);
        }
        else {
            let total = 0;
            for (let i of n) {
                // total += +i; //convert string to number
                total = total + +i;
                // console.log(total);
            }
            return total;
        }
    }
    catch (error) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message;
    }
};
console.log(sumDigit(1234));
;
