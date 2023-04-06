/* ----- CONTOH ----- */
// const buah =['Mangga','Jambu','Jeruk','Anggur']
// let buahNew=buah.slice(1,2)
// console.log(buahNew)
// console.log(buah.join(":"))//bisa custom 
// console.log(buah.toString())//default dipisahkan koma

// buah[1] ='durian' // untuk update array index 1
// buah.push('Durian') // push untuk menambahkan data ke array di index terakhir
// console.log(buah) // durian di tambahkan

// buah.pop()// untuk menghapus index terakhir
// console.log(buah) // durian di hapus

// buah.unshift('Jagung') // menambahkan array di paling depan
// console.log(buah) // jagung di tambah di pling depan

// buah.shift() // menghapus paling depan
// console.log(buah) // jagung di hapus


let person = [
        {nama :"Alex",alamat: "bandung"},
        {nama :"Ferguso",alamat: "depok"},
        {nama :"Sir",alamat: "jogja"},
        {nama :"Papa Pep",alamat: "jakarta"},
        {nama :"Alparez",alamat: "malang"}
    
]
// person.push({nama : "Killian",alamat :"Kp Rambutan"})
// console.log(person)
// person.pop()
// console.log(person)

//forEach
//tidak bisa di tampung divariable
/*
person.forEach((value,index)=>{
    console.log(index +1 ,".",value.nama)
})
*/

//map
//bisa ditampung divariable
/*
const personNew=person.map((value,index)=>{
    return `${index+1}.${value.nama}`
})
console.log(personNew)
*/


//slice
//sama seperti substring
// let buahNew=buah.slice(1,2)

//filter
//untuk menghilangkan data yang di pilih
/*
const personFilter = person.filter(value=>{
    return value.nama != 'Alex'
})
console.log(personFilter)
*/

//find
//untuk mengambil data yang di pilih
/*
const personFilter = person.find(value=>{
    return value.nama == 'Alex'
})
console.log(personFilter.join)
*/

//join
//untuk menggabungkan nilai array jadi string
//console.log(buah.join(":"))