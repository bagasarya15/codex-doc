"use strict";
{
    class Elektronik {
        constructor(jenis, harga) {
            this.jenis = jenis;
            this.harga = harga;
        }
        getInfo() {
            return `Jenis ${this.jenis}, Harga ${this.harga}`;
        }
    }
    class subElektronik extends Elektronik {
        constructor(jenis, harga, nama) {
            super(jenis, harga);
            this.nama = nama;
        }
        getInfo() {
            return `${super.getInfo()}, ${this.nama}`;
        }
    }
    let object = new subElektronik("Elektronik", 1000000, 'Kulkas 2 Pintu');
    console.log(object.getInfo());
}
