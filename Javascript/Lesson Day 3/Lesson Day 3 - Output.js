/* OUTPUT ARRAY */
const outputArray=()=>{
    let arrStr=['java','Script']
    return arrStr
}

console.log(outputArray())

const strArr = outputArray()

console.log(strArr)

const [x,y]=outputArray()//menggunakan kurung siku
console.log(x,y)


/* OUTPUT OBJECT */
const outputObject =()=>{
    let result ={
        statusRespon:'Oke',
        message :'Data berhasil disimpan'
    }
    return result
}
console.log(outputObject())//cara 1 membaca output 

let result = outputObject()//cara 2 membaca output
console.log(result)

//cara 3 membaca output
let {statusRespon,message}=outputArray()//object menggunakn kurung kurawal
console.log(statusRespon,message)