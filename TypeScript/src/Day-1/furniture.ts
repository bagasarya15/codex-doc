{
    class Furniture
    {
        constructor(private brand: string, private model:string, private warna:string)
        {

        }
        protected getInfoBrand():string{
            return `${this.brand}, ${this.model}, ${this.warna} `
        }

        setNamaBrand(nb:string){
            this.brand = nb;
        }

        desc():string{
            return ` 
            Nama Brand           : ${this.brand}
            Model                : ${this.model}
            Warna                : ${this.warna}
            `
        }
    }
    
    class InfoFurniture extends Furniture
    {
        constructor(brand: string, model:string, warna:string, public jenisFurniture:string)//Acces Modifier
        {
            super(brand, model, warna)
        }

        getDetailbrand():string{
            return super.getInfoBrand()
        }
        
        desc(): string{ //Overide
            return super.desc() + `Jenis Furniture      : ${this.jenisFurniture}`
        }
    }
    
    class Detail extends InfoFurniture
    {
        constructor(brand: string, model:string, warna:string, jenisFurniture:string, public harga:number)
        {
            super(brand, model, warna, jenisFurniture)
        }

        desc2():string{ //Overide
            return super.desc() + `\n            Harga                : Rp.${this.harga}`
        }
    }

    
    const detailObj = new Detail('IKEA', 'HUVUDSPEDLARE', 'Black', 'Kursi Gaming', 999_999) 
    // detailObj.harga = 19
    // detailObj.setNamaBrand('AEKI')
    // console.log(detailObj.getDetailbrand());
    // console.log(detailObj.desc2());

}