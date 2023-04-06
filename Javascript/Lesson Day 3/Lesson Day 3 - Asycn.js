/* -------------CONTOH ASYNCHRONUS--------------- */
//yang dikerjakan yang duluan selesai
/*
const startEngine=()=>{
    setTimeout(()=>{
        console.log('Engine Start...')},3000)
}
const changeCars=(gear)=>{
    setTimeout((gear)=>{console.log(`Masukan Gigi ${gear} untuk menjalankan mobil`)},2000,5)
}
const goCar=()=>{
    setTimeout(()=>{ console.log('Mobil Berjalan')},1000)
}
const stopCar=()=>{
    setTimeout(()=>{console.log('Mobil Berhenti')},2000)
}
const shutDownEngine=()=>{
    setTimeout(()=>{console.log('Mesin mobil dimatikan')},1000)
}

const DriveCar=(cb)=>{
    cb(); //callback
    changeCars(1);
    goCar();
    stopCar();
    shutDownEngine();
}

DriveCar(startEngine)
*/

/* ------------- Contoh 2 -------------- */
/*
const getNomorAntri = (nomor)=>{
    setTimeout(()=>{
        console.log(nomor)
        return nomor},3000)
    
}
const pilihPaket = (nomor , paket)=>{
    setTimeout(()=>{
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
    },2000)
    
}
const tagihan = (paket)=>{
    setTimeout(()=>{
        if (paket == 'KFC Paket A'){
            console.log("25000")
            return 25000
        } else if  (paket == 'KFC Paket B') {
            console.log("24000")
            return 24000
        } else{
            console.log("Belum ada Pesananan")
            return "Belum Memesan"
        }
    },1000)
    
}

let nomor = getNomorAntri('1');
console.log(nomor)
let paket = pilihPaket(nomor,'A');
console.log(paket)
let bill = tagihan(paket);
console.log(bill)
*/


/* ----------- MENGGUNAKAN SOLUSI CALLBACK ------------ */
// Contoh
/*
const getNomorAntri = (nomor,cb)=>{
    setTimeout(()=>{
        setTimeout(() => {
            console.log(nomor)
            let paket = cb(nomor,'A')
            console.log(paket)
            setTimeout(() => {
                let bill = tagihan(paket)
                console.log(bill)  
            }, 2000);     
        }, 1000);
       },3000);
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
getNomorAntri(1,pilihPaket)
*/

/* -----------------CONTOH 2------------------- */
/* ------------MENGGUNAKAN CALLBACK---------------- */
/*
const startEngine=()=>{
        console.log('Engine Start...')}

const changeCars=(gear)=>{
    console.log(`Masukan Gigi ${gear} untuk menjalankan mobil`)
}
const goCar=()=>{
    console.log('Mobil Berjalan')
}
const stopCar=()=>{
    console.log('Mobil Berhenti')
}
const shutDownEngine=()=>{
    console.log('Mesin mobil dimatikan')
}
//saling tungug
const mesinNyala=(gear,cb)=>{
    setTimeout(()=>{
        startEngine()
            setTimeout(() => {
                cb(gear)
                    setTimeout(()=>{
                     goCar()
                        setTimeout(()=>{
                           stopCar()
                            setTimeout(()=>{
                                shutDownEngine()
                        },4000)
                    },1000)
                },2000)
        }, 3000);
    },5000)
}
mesinNyala(4,changeCars)
*/

/* -------- PROMISE CHAINING -------- */
/* Contoh 1 */
/*
function getNomorAntriChaining(nomor){
    const result = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(nomor)
        }, 3000);
    })
    return result;
}
*/

/* ----------Contoh 2 DENGAN PROMISE CAHAINING-------------*/
/* 
function getNomorAntriChaining(nomor){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(nomor)
      }, 5000);
    })
    
}

function pilihPaketChaining(nomor,paket) {
     const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
           if (nomor <= 0 || isNaN(nomor)){
            reject(new Error("Silahkan antri"))
           } 
           if (paket === 'A'){
            resolve("KFC Paket A")
           } else {
            resolve("KFC Paket B")
           }
        }, 2000);
     })
    return result
}

function tagihanChaining(paket) {
    const result = new Promise ((resolve,reject) => {
       setTimeout(() => {
          
          if (paket === 'KFC Paket A'){
           resolve("25000")
          } else if (paket === 'KFC Paket B') {
           resolve("24000")
          } else {
            resolve("Belum Ada Pemesanan")
          }
       }, 2000);
    })
   return result
}

const result = getNomorAntriChaining(10)
result
.then((nomor)=>{
    console.log(nomor)
    return pilihPaketChaining(nomor,'A')
})
.then((paket)=>{
    console.log(paket)
    return tagihanChaining(paket)
})
.then((bill)=>{
    console.log(bill)
})
.catch ((err)=>{
    console.log(err.name,err,message)
})
*/

/* -----------CONTOH 3 DENGAN METODE PROMIS CHAINING----------- */
/*
const startEngine=()=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve('...Engine Menyala')
        }, 3000);
    })
    return result
}
const changeCars=(gear)=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve (`Masukan Gigi ${gear} untuk menjalankan mobil`)
        }, 2000);
    })
    return result
}
const goCar=()=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(()=>{
             resolve('Mobil Berjalan')
        },1000)
    })  
    return result
}
const stopCar=()=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve ('Mesin Berhenti')    
        }, 2000);
    })
    return result
}
const shutDownEngine=()=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
        resolve ('Mesin mobil dimatikan')
        },3000)
    })
    return result
}

const result = startEngine()
result
.then((a)=>{
    console.log(a)
    return changeCars(1)
})
.then((b)=>{
    console.log(b)
    return goCar()
})
.then((c)=>{
    console.log(c)
    return stopCar()
})

.then((d)=>{
    console.log(d)
    return shutDownEngine()
})

.then((e)=>{
    console.log(e)
})

.catch ((err)=>{
    console.log(err.name,err.message)
})
*/


/* ------------ASYNC AWAIT-------------- */
/*
function getNomorAntriChaining(nomor){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(nomor)
      }, 5000);
    })
    
}

function pilihPaketChaining(nomor,paket) {
     const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
           if (nomor <= 0 || isNaN(nomor)){
            reject(new Error("Silahkan antri"))
           } 
           if (paket === 'A'){
            resolve("KFC Paket A")
           } else {
            resolve("KFC Paket B")
           }
        }, 2000);
     })
    return result
}

function tagihanChaining(paket) {
    const result = new Promise ((resolve,reject) => {
       setTimeout(() => {
          
          if (paket === 'KFC Paket A'){
           resolve("25000")
          } else if (paket === 'KFC Paket B') {
           resolve("24000")
          } else {
            resolve("Belum Ada Pemesanan")
          }
       }, 2000);
    })
   return result
}

async function orderKFC (nomor){
    try{
        const no_urut = await getNomorAntriChaining(nomor)
        console.log(no_urut)
        const paket = await pilihPaketChaining(nomor)
        console.log(paket)
        const bill = await tagihanChaining(nomor)
        console.log(bill)

    }catch(e){
        console.log(e.toString())
    }
}

orderKFC (1)
*/

/* ------- CONTOH 2 ASYNC AWAIT -------- */
/*
const startEngine=()=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve('...Engine Menyala')
        }, 5000);
    })
    return result
}
const changeCars=(gear)=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve (`Masukan Gigi ${gear} untuk menjalankan mobil`)
        }, 2000);
    })
    return result
}
const goCar=()=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(()=>{
             resolve('Mobil Berjalan')
        },1000)
    })  
    return result
}
const stopCar=()=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve ('Mesin Berhenti')    
        }, 1000);
    })
    return result
}

const shutDownEngine=()=>{
    const result = new Promise ((resolve,reject) => {
        setTimeout(() => {
        resolve ('Mesin mobil dimatikan')
        },2000)
    })
    return result
}

async function getNyalaMobil (gear){
    try{
        const engineStart = await startEngine()
        console.log(engineStart)
        const gearChange = await changeCars(gear)
        console.log(gearChange)
        const carGo = await goCar()
        console.log(carGo)
        const carStop = await stopCar()
        console.log(carStop)
        const carShut= await shutDownEngine()
        console.log(carShut)

    }catch(e){
        console.log(e.toString())
    }
}

getNyalaMobil(2)
*/