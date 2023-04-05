const fnRest=(...arr)=>{
    let str = "";
    for(let x of arr){
        str+= x + '' ;
    }
    console.log(arr.toString()); // 1,2,3
    // console.log(str);
}

const fn=(y,z, ... arr) => { //rest parameter harus paling akhir
    let str = " " ;
    for(let x of arr){
        str+= x + '' ;
    }
    console.log(y, z, str)
}

// fn('rest', 'parameter')
// fn('rest','parameter', 1,2,3, 'Saya', 'belajar', 'javascript')
// fnRest()
// fnRest('rest','parameter', 1,2,3, 'Saya', 'belajar', 'javascript') //[]