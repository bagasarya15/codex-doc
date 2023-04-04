// let counter = null;
// console.log(typeof counter);

// console.log(null = undefined); //true

// counter ='JavaScript';
// console.log(typeof counter);

// counter =false;
// console.log(typeof counter);


// let messageWithSingleQuote= 'I\'m also a valid string'
// let messageWithDoubleQuote = "I'm also a valid string"
// console.log(messageWithSingleQuote)
// console.log(messageWithDoubleQuote)

// let messageWithBacktick = `Hai Im a String`
// console.log(`${messageWithBacktick} Not a number`)

/* STRING METHOD */

// let str = 'JavaScript';
// str += ' String'; //str = str + "string"
// str += ' Fundamental';
// console.log(str.length); //membaca panjang string
// console.log(str.charAt(0)); //membaca index ke 0 
// console.log(str[0]); //membaca index ke 0 (simple way)
// console.log(str[str.length-1]) //membaca index terakhir

/* Untuk mengambil no Index dari Yu
let str = "I'm Yuda"
console.log(str.indexOf('Yu'))
*/

// let str = 'Java Script';
// let newstr = str.substring(0,4) // dimulai dari index 0 sampai index ke 4, but index 4 notinclude
// console.log(newstr)

// let rawString = '   Hi Javascript    '
// let strippedString = rawString.trim(); //untuk menghapus spasi depan dan belakang
// console.log(strippedString)

// let str = 'Java Script';
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());


// let str = 'this is a test of search'
// let pos = str.search(/is/)
// console.log(pos)

// let str="the Baby Kick the Ball"
// let newstr=str.replace(/the/g,"a") // jika /the/ hanya kata yang pertama , jika /the/g semua kata yang bersangkutan akan di replace
// console.log(newstr)

// console.log(Boolean('Hi'))//ture
// console.log(Boolean(''))//false

// console.log(Boolean(20))//true
// console.log(Boolean(Infinity))//true
// console.log(Boolean(0))//false

// console.log(Boolean({foo : 100}))//true
// console.log(Boolean(null))//false

/*untuk mengecek data kosong atau tidak*/
// let str="the Baby Kick the Ball"
// if(str){
//     console.log("True , data tidak kosong")}
//     else{
//         console.log("False, data kosong")
//     }

/* OBJECT */

// let emptyObject ={} //membuat new object
/* object mempunya key dan value */
// let person ={
//     firstName : 'John',
//     lastName : 'Doe',
//     'building no' : 300,  // hanya bisa di baca oleh [ ] (kurung siku)
//     address : {
//         street : 'Haji',
//         state : 'depok'
//     },
//     car :[ 'bmw' , 'lexus' , 'lambo']
// };


// console.log(person.address.street)
// console.log(person.address['street'])
// console.log(person["building no"])
// console.log(person.car[1])

// let person ={
//         firstName : 'John',
//         lastName : 'Doe'
//     }

// person.ssn='8092292929' //untuk menambahkan object
// person.firstName ='Zabuza'
// console.log(person)