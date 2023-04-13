"use strict";
class TransportasiClassAbstract {
    constructor(namaPemilik) {
        this.namaPemilik = namaPemilik;
    }
    getNamaPemilik() {
        return `nama pemilik kendaraan: ${this.namaPemilik}`;
    }
    getInfoPemilik() {
        return `Nama pemilik kendaraan ${this.namaPemilik} telah membayar seharga ${this.getHargaKendaraan()}`;
    }
}
//Karna abstract tidak bisa instance objek maka harus diturunkan ke class
class TransportasiClass extends TransportasiClassAbstract {
    constructor(namaPemilik, nama, jmlhRoda, jenis, warna, merek, harga) {
        super(namaPemilik);
        this.nama = nama;
        this.jmlhRoda = jmlhRoda;
        this.jenis = jenis;
        this.warna = warna;
        this.merek = merek;
        this.harga = harga;
    }
    getDiscount(disc) {
        return (disc) ? `Dapat potongan harga sebesar : ${this.harga = this.harga * disc}` : `Discount=0, harga normal`;
    }
    getStatement() {
        return `Selamat datang ditoko kami`;
    }
    getHargaKendaraan() {
        return this.harga;
    }
    setNamaKendaraan(nama) {
        this.nama = nama;
    }
    getInfoKendaraan() {
        return `Nama kendaran:${this.nama} dengan merek: ${this.merek}, jumlah roda: ${this.jmlhRoda}`;
    }
    getInfoDetailKendaraan() {
        return `jenis kendaraan : ${this.jenis}, warna kendaraan: ${this.warna}`;
    }
}
class Mobil extends TransportasiClass {
    constructor(namaPemilik, nama, jmlhRoda, jenis, warna, merek, harga, bahanBakar, status) {
        super(namaPemilik, nama, jmlhRoda, jenis, warna, merek, harga);
        this.bahanBakar = bahanBakar;
        this.status = status;
    }
    getJumlahRoda() {
        return this.jmlhRoda;
    }
    setJumlahRoda(roda) {
        this.jmlhRoda = roda;
    }
    getKendaraan() {
        return `${super.getInfoKendaraan()}`;
    }
    getBahanBakar() {
        return `Bahan bakar yang digunakan ${this.bahanBakar}`;
    }
    getInfo() {
        return `${this.getKendaraan()}, ${this.getBahanBakar()}`;
    }
    getStatement() {
        return (this.status) ? `Terimakasih sudah belanja ditoko kami` : super.getStatement();
    }
}
let TransporObj = new Mobil('Bagas', 'Ayla', 4, 'Minibus', 'Hitam', 'Daihatsu', 100000000, 'Bensin', true);
TransporObj.warna = 'Abu-Abu Metalic';
(TransporObj.status) ? console.log('\n' + TransporObj.getInfoPemilik() +
    '\n', TransporObj.getInfo() + '\n', TransporObj.getDiscount(0.5) + '\n', TransporObj.getStatement()) : console.log(TransporObj.getStatement());
