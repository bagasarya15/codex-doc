"use strict";
{
    class MobilAbstract {
        constructor(bahanBakar) {
            this.bahanBakar = bahanBakar;
        }
    }
    class Mobil extends MobilAbstract {
        constructor(namaMobil, warna, bahanBakar) {
            super(bahanBakar);
            this.namaMobil = namaMobil;
            this.warna = warna;
        }
        getBahanBakar() {
            return `${this.bahanBakar}`;
        }
        getDetail() {
            return `${this.namaMobil}, ${this.warna} , ${this.getBahanBakar()}`;
        }
    }
    class TypeClass extends Mobil {
        constructor(namaMobil, warna, bahanBakar, type) {
            super(namaMobil, warna, bahanBakar);
            this.type = type;
        }
        getType() {
            return `${this.type}`;
        }
        setNamaMobil(nm) {
            this.namaMobil = nm;
        }
        getDetail() {
            return `${super.getDetail()}, ${this.getType()}`;
        }
    }
    let object = new TypeClass('Ayla', 'Abu-Abu Metalic', 'Bensin', 'LCGC');
    // object.setNamaMobil('Agya')
    console.log(object.getDetail());
}
