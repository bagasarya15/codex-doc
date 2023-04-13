{
    interface Greting {
        getHello(): string
    }

    abstract class FurnitureAbstract{
        constructor(protected brand: string)
        {

        }
        
        abstract getModel(): string;
        abstract getWarna(): string;
        
        getBrand(): string {
            return `${this.brand}`
        }

        getInfoBrand(): string{
            return `
                    Nama Brand      : ${this.brand} 
                    Model           : ${this.getModel()} 
                    warna           : ${this.getWarna()}
                `
        }
    }

    class Furniture extends FurnitureAbstract implements Greting{
        constructor(brand: string, public model: string,public warna:string, public jenisFurniture:string)
        {
            super(brand)
        }

        getHello(): string {
            return `Selamat datang di toko furnitur kami, berikut detail belanja anda :`
        }

        getModel(): string{
            return this.model
        };

        getWarna(): string{
            return this.warna
        };

        getJenis(): string{
            return `  Jenis Furniture :${this.jenisFurniture}`
        };

        getInfoBrand(): string{ //Overide
            return `${super.getInfoBrand()}  ${this.getJenis()}`
        }
    }

    interface Info extends Greting{
        message(): string
    }

    class DetailFurniture extends Furniture implements Info{
        constructor(brand: string, model:string, warna:string, jenisFurniture:string, public harga:number)
        {
            super(brand, model, warna, jenisFurniture)
        }

        message(): string {
            return `~TERIMAKASIH TELAH BELANJA DI TOKO KAMI~`
        }
        
        //Overload
        getDiscount():string;
        getDiscount(disc:number):string;
        getDiscount(disc?: any):any
        {
            return (disc) ? `Subtotal Harga Rp.${this.harga} Potongan Disc ${disc}% \n                    Total Harga ${this.harga = this.harga - (this.harga * (disc/100))}` : `Tidak dapat potongan`
        }
        
        setNamaBrand(nb:string){
            super.brand = nb;
        }

        getHarga():number{
            return this.harga
        }

        getInfoBrand(): string{ //Overide
            return `
                ${this.getHello()} 
                ${super.getInfoBrand()}
                    ${this.getDiscount(10)} 
                    ${this.message()}
            `
        }
    }

    const object = new DetailFurniture(
        "IKEA",
        "HUVUDSPEDLARE",
        "Black",
        "Kursi Gaming",
        900_000,
    );
    console.log(object.getInfoBrand());
    //   console.log(object.getDiscount(10));
    //   console.log(object.getFurniture());
    // console.log(object.getInfoBrand()+'\n',object.getModel()+'\n',object.getWarna());


    const objek2 = new Furniture(
        "IKEA",
        "HUVUDSPEDLARE",
        "Black",
        "Kursi Gaming",
    )
    // console.log(objek2.getInfoBrand());
}