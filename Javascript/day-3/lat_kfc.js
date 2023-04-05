function getNomorAntriChaining(nomor){
    // const result = new Promise((resolve , reject)=>{
    //     setTimeout(()=>{
    //         resolve(nomor)
    //     }, 3000)
    // })
    // return result;

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(nomor)
        }, 3000)
    })
}

function pilihPaketChaining(nomor, paket){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(nomor <= 0 || isNaN(nomor)){
                reject(new Error("Silahkan antri"))
            }

            if(paket === 'A'){
                resolve("KFC Paket A");
            }

            if(paket === 'B'){
                resolve("KFC Paket B")
            }
        }, 2000)
    })
    return result;
}

function tagihanChaining(paket){
    const result = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(paket === 'KFC Paket A'){
                resolve(25000)
            }else if(paket === 'KFC Paket B'){
                resolve(24000)
            }else{
                resolve('Belum ada pesanan')
            }
        }, 1000)
    });
    return result;
}

async function orderKFC (nomor) {
    try {
        const no_urut = await getNomorAntriChaining(nomor);
        console.log(no_urut);

        const paket = await pilihPaketChaining(no_urut, 'B');
        console.log(paket);
        
        const bill = await tagihanChaining(paket);
        console.log(bill);
    } catch (error) {
        console.log(error.toString());
    }
}

orderKFC(5)