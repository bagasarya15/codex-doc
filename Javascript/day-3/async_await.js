const startEngine=()=>{
    setTimeout(()=>{
        console.log('Engine Start')
    },4000);;
}

const changeGear =(gear=2)=>{
    setTimeout(()=>{
        console.log(`Masukkan gigi ${gear} untuk menjalankan mobil`);
    }, 2000)
}

const goCar=()=>{
    setTimeout(()=>{
        console.log('Mobil jalan');
    }, 1000)
}

const stopCar=()=>{
    setTimeout(()=>{
        console.log('Rem mobil untuk berhenti')
    }, 2000)
}

const shutDownCar=()=>{
    setTimeout(()=>{
        console.log('Mesin mobil dimatikan');
    }, 3000)
}

const DriveCar=(cb)=>{
    cb();
    changeGear(1);
    goCar();
    stopCar();
    shutDownCar();
}

DriveCar(startEngine);