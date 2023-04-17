{
// let str = '123'
// let total = 0

// for(let i of str){
//     total+= +i
// }

    interface Imobil {
        getType(): string;
    }

    abstract class MobilAbstract {
        constructor(protected bahanBakar: string) {}

        abstract getBahanBakar(): string 
    }

    class Mobil extends MobilAbstract{
        constructor(protected namaMobil: string, public warna:string, bahanBakar: string){
            super(bahanBakar)
        }

        getBahanBakar() {
            return `${this.bahanBakar}`
        }

        protected getDetail(){
            return `${this.namaMobil}, ${this.warna} , ${this.getBahanBakar()}`
        }
    }

    class TypeClass extends Mobil implements Imobil{
        constructor(namaMobil:string, warna:string ,bahanBakar:string, public type:string) {
            super(namaMobil, warna, bahanBakar)
        }

        getType(){
            return `${this.type}`
        }

        setNamaMobil(nm: string){
            this.namaMobil = nm
        }

        getDetail() {
            return `${super.getDetail()}, ${this.getType()}`
        }
    }


    let object = new TypeClass('Ayla', 'Abu-Abu Metalic' ,'Bensin', 'LCGC');
    // object.setNamaMobil('Agya')
    console.log(object.getDetail());
}