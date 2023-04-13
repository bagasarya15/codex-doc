"use strict";
class karyawanAbstract {
    constructor(tahunLahir) {
        this.tahunLahir = tahunLahir;
    }
    getTahunLahir() {
        return this.tahunLahir;
    }
    setTahunLahir(tl) {
        this.tahunLahir = tl;
    }
    getStatusKaryawan() {
        return `Status Karyawan : `;
    }
}
class karyawan extends karyawanAbstract {
    constructor(firstName, lastName, tahunLahir, tahunMasuk) {
        super(tahunLahir);
        this.firstName = firstName;
        this.lastName = lastName;
        this.tahunMasuk = tahunMasuk;
    }
    getNamaLengkap() {
        return `${this.firstName} ${this.lastName}`;
    }
    getDataKaryawan() {
        return `${this.getNamaLengkap()}\nTahun Masuk : ${this.tahunMasuk}`;
    }
    setNamaKaryawan(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    getSisaMasaPensiun() {
        const tahunNow = new Date().getFullYear();
        const umur = tahunNow - this.getTahunLahir();
        return `Sisa masa pensiun = ${60 - umur} Tahun lagi`;
    }
    getTunjanganLembur(jam) {
        if (jam) {
            return `dapat uang lembur ${jam * 100}`;
        }
        return 'tidak dapat lemburan';
    }
    getStatusKaryawan() {
        const now = new Date().getFullYear();
        if (now - this.tahunMasuk >= 1) {
            return `${super.getStatusKaryawan()} tetap`;
        }
        return `${super.getStatusKaryawan()} probation`;
    }
}
class karyawanTetap extends karyawan {
    constructor(firstName, lastName, tahunLahir, tahunMasuk, gaji, posisi) {
        super(firstName, lastName, tahunLahir, tahunMasuk);
        this.gaji = gaji;
        this.posisi = posisi;
    }
    getDetailKaryawan() {
        return super.getDataKaryawan() + `Posisi sebagai ${this.posisi}`;
    }
    getBonus() {
        const today = new Date();
        if (today.getFullYear() - this.tahunMasuk > 1) {
            return `Bonus : ${this.gaji}`;
        }
        else {
            return `Belum 1 tahun tidak dapat bonus`;
        }
    }
}
let karyawan1 = new karyawanTetap('dany', 'shadiq', 1998, 2023, 9000000, 'supervisor');
console.log(karyawan1.getDetailKaryawan());
console.log(karyawan1.getBonus());
console.log(karyawan1.getTunjanganLembur(5));
console.log(karyawan1.getStatusKaryawan());
console.log(karyawan1.getSisaMasaPensiun());
// console.log(karyawan1.getNamaLengkap())
// console.log(karyawan1.getSisaMasaPensiun())
