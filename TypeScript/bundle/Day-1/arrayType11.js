"use strict";
{
    // let arrayName: []=[] jika dideklrasi tanpa type maka tidak bisa asign value arraynya
    //;et arrayName: any[]
    let arrayName;
    arrayName = [1, 2];
    arrayName[2] = 3;
    arrayName.push(4); // nambah di index paling akhir
    arrayName.pop(); // hapus di index paling akhir
    arrayName.unshift(5); // nambah paling depan
    arrayName.shift(); // hapus paling depan
    console.log(arrayName.length);
    console.log(arrayName);
    console.log(typeof (arrayName));
    console.log(typeof arrayName);
}
