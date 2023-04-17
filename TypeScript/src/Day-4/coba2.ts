{
    class Elektronik{
        constructor(public jenis:string, public harga:number) {
            
        }

        protected getInfo():any{
            return `Jenis ${this.jenis}, Harga ${this.harga}` 
        }
    }

    class subElektronik extends Elektronik{
        constructor(jenis:string, harga:number, public nama:string){
            super(jenis, harga)
        }

        getInfo():any{
            return `${super.getInfo()}, ${this.nama}`
        }
    }

    let object = new subElektronik("Elektronik", 1_000_000, 'Kulkas 2 Pintu')
    console.log(object.getInfo());
}