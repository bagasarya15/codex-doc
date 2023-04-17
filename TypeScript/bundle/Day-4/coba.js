"use strict";
{
    class MobilAbstract {
        constructor(bahanBakar) {
            this.bahanBakar = bahanBakar;
        }
    }
    class Mobil extends MobilAbstract {
        constructor(warna, merek, bahanBakar) {
            super(bahanBakar);
            this.warna = warna;
            this.merek = merek;
        }
        getBahanBakar() {
            return `bahan bakar adalah ${this.bahanBakar}`;
        }
        getData() {
            return `mobil ini warna ${this.warna} merek ${this.merek}`;
        }
        setWarna(wn) { this.warna = wn; }
    }
    class Taxi extends Mobil {
        constructor(harga, warna, merek, bahanBakar, status) {
            super(warna, merek, bahanBakar);
            this.harga = harga;
            this.status = status;
        }
        getHarga() {
            return `merek ${this.merek} seharaga ${this.harga}`;
        }
        getTipeKendaraan() {
            if (this.status.MobilSport) {
                return `mobil ini merupakan mobil sport`;
            }
            if (this.status.MobilUmum) {
                return `mobil ini merupakan mobil umum`;
            }
            if (this.status.Truk) {
                return `mobil ini merupakan truck`;
            }
        }
    }
    let objMobil = new Taxi(3000000, "kuning", "toyota", "pertalite", { MobilSport: true, MobilUmum: false, Truk: false });
    console.log(objMobil.getData(), objMobil.getHarga(), objMobil.getBahanBakar(), objMobil.getTipeKendaraan());
}
