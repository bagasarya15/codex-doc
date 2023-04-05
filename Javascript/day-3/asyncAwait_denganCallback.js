//Asynchronus dengan callback

const getNomorAntri = (nomor, cb) => {
    setTimeout(()=>{
        setTimeout(()=>{
            console.log(nomor);
            let paket = cb(nomor, 'B')
            setTimeout(()=>{
                let bill = tagihan(paket)
                console.log(bill);
            },1000)
        },2000)
    },3000)
}

const pilihPaket = (nomor, paket) => {
    try {
        if(nomor <= 0 || isNaN(nomor)){
            throw 'Silahkan ambil nomor antri dahulu'
        }

        if(paket == 'A'){
            return 'KFC Paket A';
        }else {
            return 'KFC Paket B';
        }

    } catch (error) {
        return error
    }
}

const tagihan = (paket) => {
    if(paket === 'KFC Paket A'){
        return 25000;
    }else if(paket === 'KFC Paket B') {
        return 24000;
    }else{
        return 'Belum ada pesanan'
    }
}

getNomorAntri(2, pilihPaket)