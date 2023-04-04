function Angka(){
    const errorCustomHandling = (name, msg)=> {
        return {name:name,message:msg}
    }
    let angka =  ''
    try{
        if(angka === '') 
            // throw new Error('Angka tidak boleh kosong')
            throw errorCustomHandling('ValidasiError', 'Angka tidak boleh kosong')
            
        if(typeof angka != 'number')
            // throw new Error('Input hanya berupa angka')
            throw errorCustomHandling('ValidasiError', 'Hanya Boleh Angka')

            console.log(`umur anda: ${angka}`);
    }catch(e){
        console.log(e.name, ":", e.message);
    }
}
// Angka()

function CheckNilai() {
    try{
        let nilai = 90
        if(typeof nilai != 'number')
            throw new Error('Masukkan nilai hanya berupa angka')
        switch(true){
            case nilai >= 90 && nilai <= 100 :
                console.log('Grade A');
                break;
            case nilai >= 80 && nilai <= 89 :
                console.log('Grade B+');
                break;
            case nilai >=75 && nilai <= 79 :
                console.log('Grade B');
                break;
            case nilai >=60 && nilai <= 69 :
                console.log('Grade C+');
                break;
            case nilai >=50 && nilai <-59 :
                console.log('Grade C');
                break;
            default :
                console.log('Grade D');
        }
    }catch(e){
        console.log(e.name, ":", e.message);
    }
}
// CheckNilai()

function TryCatch(){
    try{
        let hasil = abc(10 + 10)
        throw new ReferenceError('silahkan buat fungsi dahulu');
    }catch(e){
        console.log(e.name, ":", e.message);
    }
    console.log('Benerin errornya');
}
// TryCatch()

function ForSederhana() {
    for(let i=1; i < 10; i++){
        if(i%2 == 1){
            console.log(i)
        }
    }
}
// ForSederhana()

function Iteration() {
    let ranks = 'ABC';
    for(let i in ranks){
        console.log(ranks[i]);
    }

    // for(let rank of ranks){
    //     console.log(rank)
    // }
}
// Iteration()

function Iteration2() {
    let ranks = 'ABC';
    ranks.forEach(value=>{
        console.log(value);
    })
}
// Iteration2()

//-----------------------------------//
let person = [{
    firstName: 'Bagas',
    lastName: 'Codex',
    alamat: 'Depok'   
},
{
    firstName: 'Zufar',
    lastName: 'Codex',
    alamat: 'Yogyakarta'
}];

let personObj = {
    firstName: 'Dhani',
    lastName: 'Codex'
}

// for(let prop of person) {
//     console.log(prop[0]);
// }

// for(x in personObj){
//     console.log(personObj[x]);
// }
// console.log(person)
//-----------------------------------//

//Anonymous Function
ranks.map(value=>{
    console.log(value);
})
//End

function Iteration3(){
    let ranks = ['A', 'B', 'C'];
    //Anonymous Function
    ranks.map(value=>{
        console.log(value);
    })
}
// Iteration3(person[0].firstName)

// For In
function Iteration4(){
    for(let i in person) {
        console.log(person[i].firstName)
    }
}
// Iteration4()

//Void Function
function While(){
    while(count < 10){
        console.log(count); 
    }
}
//End

//Reguler Function
function Greeting(){
    let msg = 'Halo Javascript'
    // console.log(msg);
    return msg;
}
//End

// Greeting() //Cara 1
// console.log(Greeting()); //Cara 2
// let result = Greeting(); //Cara 3
// console.log(result)

// Regular Function
function Penambahan(x, y){ 
    return x+y;
}
// console.log(Penambahan(10,20))
//End

// Arrow Function
const Penambahan2=(x, y)=>{
    return x+y
}
console.log(Penambahan2(5,5))
//End