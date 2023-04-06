const sayHello=(message='Hello')=>{
    console.log(message);
}
sayHello();

/* Parameter Jika Undifined akan di isi parameter yang ditentukan */
const sayHello2=(message)=>{
    message=message != undefined?message:"Hi Javascript"
    console.log(message)
}
sayHello2();

let price = 100
function applyDiscount(price,discount = 0.05){
    return price *(1 - discount);
}
console.log(applyDiscount(price));

/* Rest Parameter */
//bisa paramenter kosong
//type data berupa array
const fnRest=(...arr)=>{
    let str="";
    for(let x of arr){
        str +=x+' ';
    }
    console.log(str)
    console.log(arr.toString()) //1,2,3
}

const fn=(y,z,...arr)=>{ // rest parameter harus paling akhir
    let str="";
    for(let x of arr){
        str += x + ' '
    }
    console.log(y,z,str)
}
fn('Rest','Parameter',1,2,3,'Saya','Belajar','Javascript')=[]//[1,2...javascript]
fnRest('Rest','Parameter',1,2,3,'Saya','Belajar','Javascript')=[]//[]