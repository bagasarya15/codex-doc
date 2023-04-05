async function orderKFC (nomor) {
    try {
        const no_urut = await getNomorAntriPromiseChaining(nomor);
        console.log(no_urut);

        const paket = await pilihPaketChaining(no_urut, 'B');
        console.log(paket);
        
        const bill = await tagihanChaining(paket);
        console.log(bill);
    } catch (error) {
        console.log(error.toString());
    }
}

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


async function mobil(gear) {
    try {
        const star = await startEngine2();
        console.log(star);

        const change_gear = await changeGear2(gear);
        console.log(change_gear);

        const go_car = await goCar2();
        console.log(go_car);

        const stop_car = await stopCar2();
        console.log(stop_car);

        const shut_down = await shutDownCar2();
        console.log(shut_down);
    } catch (error) {
        console.log(error.toString());
    }
}

mobil(2)