/* ------ SYNCRONUS ------ */

const getNomorAntri = (nomor)=>{
    return nomor
}

const pilihPaket = (nomor , paket)=>{
    try{
        if (nomor <= 0 || isNaN(nomor)){
            throw "Silahkan Antri"
        }
        if ( paket == 'A'){
            return "KFC Paket A"
        } else {
            return "KFC Paket B"
        }
} catch(e){
   console.log(e)
        
    }
}

const tagihan = (paket)=>{
    if (paket == 'KFC Paket A'){
        return 25000
    } else if  (paket == 'KFC Paket B') {
        return 24000
    } else{
        return "Belum Memesan"
    }
}

let nomor = getNomorAntri('10')
console.log(nomor)
let paket = pilihPaket(nomor,'A')
console.log(paket)
let bill = tagihan(paket)
console.log(bill) 