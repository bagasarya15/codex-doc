interface Ikaryawan {
    getTunjanganLembur(): string;
    getStatusKaryawan(): string;
}

abstract class karyawanAbstract{

    constructor(private tahunLahir:number) {
        
    }
    abstract getSisaMasaPensiun():any

    getTahunLahir():number{
        return this.tahunLahir
    }

    setTahunLahir(tl:number){
        this.tahunLahir=tl
    }

    getStatusKaryawan(): string {
        return `Status Karyawan : `
    }
}

class karyawan extends karyawanAbstract implements Ikaryawan{
    constructor(
        private firstName:string,
        private lastName:string,
        tahunLahir : number,
        public tahunMasuk:number,
        
        ) {  
        super(tahunLahir)   
    }

    getNamaLengkap():string{
        return `${this.firstName} ${this.lastName}`
    }

    protected getDataKaryawan():string{
        return `${this.getNamaLengkap()}\nTahun Masuk : ${this.tahunMasuk}`
    }
    setNamaKaryawan(fn :string,ln:string){
        this.firstName=fn
        this.lastName=ln
    }

    getSisaMasaPensiun(): any {
        const tahunNow = new Date().getFullYear()
        const umur = tahunNow - this.getTahunLahir()
        return `Sisa masa pensiun = ${60 - umur} Tahun lagi`
    }


    getTunjanganLembur(): string;
    getTunjanganLembur(jam: number): string;
    getTunjanganLembur(jam?:any): any {
        if(jam){
            return `dapat uang lembur ${jam * 100}`
        }
        return 'tidak dapat lemburan'
    }

    getStatusKaryawan(): string {
        const now = new Date().getFullYear()
        if( now - this.tahunMasuk >= 1){
            return `${super.getStatusKaryawan()} tetap`
        }
        return `${super.getStatusKaryawan()} probation`
    }
}

class karyawanTetap extends karyawan{
    constructor(firstName:string, lastName:string,tahunLahir : number, tahunMasuk:number, public gaji:number,public posisi:string) {
        super(firstName,lastName,tahunLahir,tahunMasuk)
    }

    getDetailKaryawan():string{
        return super.getDataKaryawan()+`Posisi sebagai ${this.posisi}`
    }

    getBonus():any{
        const today = new Date()
        if (today.getFullYear()-this.tahunMasuk > 1){
        return `Bonus : ${this.gaji}`}
        else {
            return `Belum 1 tahun tidak dapat bonus`
        }

    }
}




let karyawan1 = new karyawanTetap('dany','shadiq',1998,2023,9_000_000,'supervisor')
console.log(karyawan1.getDetailKaryawan())
console.log(karyawan1.getBonus())
console.log(karyawan1.getTunjanganLembur(5))
console.log(karyawan1.getStatusKaryawan())
console.log(karyawan1.getSisaMasaPensiun())
// console.log(karyawan1.getNamaLengkap())
// console.log(karyawan1.getSisaMasaPensiun())