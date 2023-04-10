abstract class TransportasiClassAbstract {
    constructor(private namaPemilik:string){

    }

    abstract getHargaKendaraan(): number 

    getNamaPemilik(): string {
        return `nama pemilik kendaraan: ${this.namaPemilik}`
    }

    getInfoPemilik(): string{
        return `Nama pemilik kendaraan ${this.namaPemilik} telah membayar seharga ${this.getHargaKendaraan}`
    }
}

//Karna abstract tidak bisa instance objek maka harus diturunkan ke class

class TransportasiClass extends TransportasiClassAbstract {
    constructor(namaPemilik:string, public nama:string, protected jmlhRoda:number, public jenis:string, public warna:string, public merek:string, public harga: number){
        super(namaPemilik)
    }
    getDiscount():string;
    getDiscount(disc:number):string;
    getDiscount(disc?: any):any{
        return (disc) ? `Dapat potongan harga sebesar : ${this.harga = this.harga * disc}` : `Discount=0, harga normal`
    }

    getStatement():string{
        return `Selamat datang ditoko kami`
    }
    getHargaKendaraan(): number {
        return this.harga
    }
    setNamaKendaraan(nama :string){
        this.nama = nama
    }

    protected getInfoKendaraan(): string{
        return `Nama kendaran:${this.nama} dengan merek: ${this.merek}, jumlah roda: ${this.jmlhRoda}`
    }
    getInfoDetailKendaraan(): string{
        return `jenis kendaraan : ${this.jenis}, warna kendaraan: ${this.warna}`
    }
}

class Mobil extends TransportasiClass {
    constructor(namaPemilik: string, nama:string, jmlhRoda: number, jenis:string, warna:string, merek:string, harga:number, public bahanBakar:string, public status:boolean){
        super(namaPemilik, nama, jmlhRoda, jenis, warna, merek, harga)
    }
    getJumlahRoda(): number{
        return this.jmlhRoda
    }
    setJumlahRoda(roda: number){
        this.jmlhRoda = roda;
    }
    getKendaraan(): string {
        return `${super.getInfoKendaraan()}`
    }
    getBahanBakar():string{
        return `Bahan bakar yang digunakan ${this.bahanBakar}`
    }
    getInfo():string{
        return `${this.getKendaraan()}, ${this.getBahanBakar()}`
    }
    getStatement(): string {
        return (this.status)? `Terimakasih sudah belanja ditoko kami`:super.getStatement()
    }
}

let TransporObj = new Mobil ('Bagas', 'Ayla', 4, 'Minibus', 'Hitam', 'Daihatsu', 100_000_000, 'Bensin', true)
TransporObj.warna='Abu-Abu Metalic';
(TransporObj.status)?console.log('\n'+TransporObj.getInfoPemilik()+
'\n',TransporObj.getInfo()+'\n',TransporObj.getDiscount(0.5)+'\n',TransporObj.getStatement()):console.log(TransporObj.getStatement())