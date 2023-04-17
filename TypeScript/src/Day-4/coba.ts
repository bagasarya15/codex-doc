{
    interface JenisMobil {
        MobilSport: boolean,
        MobilUmum: boolean,
        Truk: boolean
    }
    interface TipeKendaraan {
        getTipeKendaraan(): any
    }
    
    abstract class MobilAbstract {
        constructor(public bahanBakar: string) { }
        abstract getBahanBakar(): string
    }
    
    class Mobil extends MobilAbstract {
        constructor(private warna: string, public merek: string, bahanBakar: string) { super(bahanBakar) }
        getBahanBakar(): string {
            return `bahan bakar adalah ${this.bahanBakar}`
        }
        getData() {
            return `mobil ini warna ${this.warna} merek ${this.merek}`
        }
        setWarna(wn: string) { this.warna = wn }
    }
    class Taxi extends Mobil implements TipeKendaraan {
        constructor(public harga: number, warna: string, merek: string, bahanBakar: string, public status: JenisMobil) { 
            super(warna, merek, bahanBakar) 
        }

        getHarga() { 
            return `merek ${this.merek} seharaga ${this.harga}` 
        }
        
        getTipeKendaraan() {
            if (this.status.MobilSport) {
                return `mobil ini merupakan mobil sport`
            }
            if (this.status.MobilUmum) {
                return `mobil ini merupakan mobil umum`
            }
            if (this.status.Truk) {
                return `mobil ini merupakan truck`
            }
        }
    }
    
    let objMobil = new Taxi(3_000_000, "kuning", "toyota", "pertalite", { MobilSport: true, MobilUmum: false, Truk: false })
    console.log(objMobil.getData(), objMobil.getHarga(), objMobil.getBahanBakar(), objMobil.getTipeKendaraan());
}