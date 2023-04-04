const startEngine=()=>{
    console.log('Engine Start');
}

const changeGear =(gear)=>{
    console.log(`Masukkan gigi ${this} untuk menjalankan mobil`);
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

const CheckNilai=(nilai)=> {
    try{
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
            case nilai >=50 && nilai <=59 :
                console.log('Grade C');
                break;
            default :
                console.log('Grade D');
        }

        console.log(`Anda mendapatkan nilai ${nilai}`);
    }catch(e){
        console.log(e.name, ":", e.message);
    }
}
// console.log(CheckNilai(90));
// CheckNilai(89)

//Callback Function
const DriveCar=(cb)=>{
    cb();
    changeGear(1);
    goCar();
    stopCar();
    shutDownCar();
}

// DriveCar(startEngine);
//End