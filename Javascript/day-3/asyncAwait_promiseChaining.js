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

const result=getNomorAntriChaining(5)
    result
    .then((nomor)=>{
        console.log(nomor);
        return pilihPaketChaining(nomor, 'B');
    })
    .then((paket)=>{
        console.log(paket);
        return tagihanChaining(paket);
    })
    .then((bill)=>{
        console.log(bill);
    })
    .catch((err)=>{
        console.log(err);
    })


    