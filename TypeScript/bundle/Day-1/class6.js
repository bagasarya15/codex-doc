"use strict";
{
    class Transportasi {
        constructor(nama, jmlhRoda, bahanBakar) {
            this.nama = nama;
            this.jmlhRoda = jmlhRoda;
            this.bahanBakar = bahanBakar;
        }
        getTransport() {
            return `Nama Kendaraan: ${this.nama} Jumlah Roda:${this.jmlhRoda} Bahan Bakar Menggunakan:${this.bahanBakar}`;
        }
        setNama(nm) {
            this.nama = nm;
        }
        setRoda(rd) {
            this.jmlhRoda = rd;
        }
        setBahanBakar(bb) {
            this.bahanBakar = bb;
        }
    }
    class TransportasiDarat extends Transportasi {
        constructor(nama, jmlhRoda, bahanBakar, warna) {
            super(nama, jmlhRoda, bahanBakar);
            this.nama = nama;
            this.jmlhRoda = jmlhRoda;
            this.bahanBakar = bahanBakar;
            this.warna = warna;
            this.warna = warna;
            TransportasiDarat.count++;
        }
        static getBB() {
            return this.str;
        }
        getDetailInfo() {
            return `${super.getTransport()} dan bewarna ${this.warna} ${TransportasiDarat.str}`;
        }
    }
    TransportasiDarat.str = 'helo';
    TransportasiDarat.count = 0;
    let transportObj = new TransportasiDarat('Gojek', 2, 'Bensin', 'Merah');
    transportObj.setNama('Motor');
    console.log(transportObj.getDetailInfo());
}
