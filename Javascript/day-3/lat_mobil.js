// Cobaaa
function startEngine2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Engine start....')
        }, 3000)
    })
}

function changeGear2(gear){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Masukkan gigi ${gear} untuk menjalankan mobil`)
        }, 2000)
    })
    return result;
}

function goCar2(){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Mobil jalan')
        }, 4000)
    })
    return result;
}

function stopCar2(){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Mobil berhenti')
        }, 1000)
    })
    return result;
}

function shutDownCar2(){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Mobil dimatikan')
        }, 1000)
    })
    return result;
}

const result = startEngine2();
result
    .then((value) => {
        console.log(value);
        return changeGear2(2)
    }) 
    .then((value) => {
        console.log(value);
        return goCar2()
    })
    .then((value)=> {
        console.log(value);
        return stopCar2()
    })
    .then((value)=> {
        console.log(value);
        return shutDownCar2()
    })
    .catch((err)=>{
        console.log(err);
    })