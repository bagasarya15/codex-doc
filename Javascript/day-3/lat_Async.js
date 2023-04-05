const startEngine=(gear, cb)=>{
    setTimeout(()=>{
        console.log('Engine Start');
        setTimeout(()=>{
            cb(gear);
            setTimeout(()=>{
                goCar();
                setTimeout(()=>{
                    stopCar()
                    setTimeout(()=>{
                        shutDownCar()
                    },3000)
                },2000)
            },1000)
        },2000)
    },4000)
}

const changeGear =(gear)=>{
    console.log(`Masukkan gigi ${gear} untuk menjalankan mobil`);
}

const goCar=()=>{
    console.log('Mobil jalan');
}

const stopCar=()=>{
    console.log('Rem mobil untuk berhenti')
}

const shutDownCar=()=>{
    console.log('Mesin mobil dimatikan');
}

startEngine(1, changeGear)

// Cobaa

