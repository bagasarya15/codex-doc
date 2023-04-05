//Asynchronus

const getNomorAntri = (nomor) => {
    setTimeout(()=>{
        console.log(nomor);
        return nomor;
    }, 3000)
}

const pilihPaket = (nomor, paket) => {
    setTimeout(()=>{
        try {
            if(nomor <= 0 || isNaN(nomor)){
                throw 'Silahkan ambil nomor antri dahulu'
            }
    
            if(paket == 'A'){
                console.log('KFC Paket B');
                return 'KFC Paket A';
            }else {
                console.log('KFC Paket B');
                return 'KFC Paket B';
            }
    
        } catch (error) {
            console.log(error);
            return error
        }
    }, 2000)
}

const tagihan = (paket) => {
    setTimeout(()=>{
        if(paket === 'KFC Paket A'){
            console.log(25000);
            return 25000;
        }else if(paket === 'KFC Paket B') {
            console.log(2400);
            return 24000;
        }else{
            console.log('Belum ada pesanan');
            return 'Belum ada pesanan'
        }
    },1000)
}

let nomor = getNomorAntri('10');
console.log(nomor);

let paket = pilihPaket(nomor, 'A')
console.log(paket);

let bill = tagihan(paket);
console.log(bill);

// getNomorAntri(-2, 'A')