let s ='10'
console.log(+s) //untuk mengkonvert number dari string menggunakan +x (unary plus)


/* Jika tidak menggunakan "Unary Plus" maka yang di tampilkan pada console adalah False/True,
Jika menggunakan Unary Plus akan di konvert menjadi number 0/1 */
let f = false
t = true
console.log(+f) 
console.log(+t)

/* 
++X > Prefix(Akan ditambah dulu) , X++ postfix (Akan ditambah jika operasi ny sudah selesai)
*/
let weight = 90
newweight = weight++ + 5
console.log(newweight)
console.log(weight)


let name1 = 'alice'
 name2 = 'bob'
 let result = name1 < name2;  //Membandingkan berdasarkan jumlah ASCII nya
 console.log(result)

 