// let buah = ['Mangga', 'Jambu', 'Jeruk', 'Anggur']
// buah.push('Durian') // push untuk menambah di index terakhir
// console.log(buah)
// buah.pop() // menghapus di index terakhir
// buah.shift() // menghapus di index paling awal
// console.log(buah)
// buah.unshift('Durian') // menambah di index paling awal
// console.log(buah) 
// buah[1] = 'Durian' // menambah di index yang dipilih
// console.log(buah) 

// let buah = ['Mangga','Jeruk', 'Anggur']
// let buahNew2 = buah.slice(0,2)
// console.log(buah.toString()); // default menggunakan koma
// console.log(buah.join(":"));
// console.log(buahNew2);

let person = [
    {
        nama:"Zufar",
        alamat:"KulonProgo"  
    },
    {
        nama:"Bagas",
        alamat:"Depok"
    },
    {
        nama:"Dhani",
        alamat:"Depok"
    },
    {
        nama:"Ikhsan",
        alamat:"Puwokerto"
    },
    {
        nama:"Farel",
        alamat:"Citayam"
    },
]

// person.push({nama:"Vendy", alamat:"Nias"})
// console.log(person);
// person.pop();
// console.log(person);
// person.unshift({nama:"Vendy", alamat:"Nias"})
// console.log(person);

// person.forEach((value, index) => {
//     console.log(index+1, ".",value);
// })

// const personNew=person.map((value, index)=>{
//     return `${index+1} . ${value.nama}`
// })
// console.log(personNew);


//filter digunakan untuk mengambil data setelah melakukan delete
const personFilter=person.filter(value=>{
    return value.nama!='Zufar'
})
// console.log(personFilter)
// console.log(personFilter.join(' '))

// find digunakan untuk mencari data
const personFind=person.find(value=>{
    return value.nama=='Bagas'
})
// console.log(personFind)
