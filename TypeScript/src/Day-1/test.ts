{
    abstract class Furniture {
      constructor(
        private brand: string,
        private model: string,
        private warna: string
      ) {}
      setnamaBrand(nb: string) {
        this.brand = nb;
      }
      setmodelFurniture(mf: string) {
        this.model = mf;
      }
      setwarna(sw: string) {
        this.warna = sw;
      }
      abstract getFurniture(): string;
      protected desc(): string {
        return ` 
              Nama Brand  : ${this.brand}
              Model       : ${this.model}
              Warna       : ${this.warna}
              `;
      }
    }
  
    class InfoFurniture extends Furniture {
      constructor(
        brand: string,
        model: string,
        warna: string,
        public jenisFurniture: string
      ) {
        super(brand, model, warna);
      }
      getFurniture(): string {
        return `Jenis Furniture : ${this.jenisFurniture}`;
      }
      desc(): string {
        //Overide
        return super.desc() + this.getFurniture();
      }
    }
  
    class Detail extends InfoFurniture {
      constructor(
        brand: string,
        model: string,
        warna: string,
        jenisFurniture: string,
        public harga: number
      ) {
        super(brand, model, warna, jenisFurniture);
      }
      //overload
      getDiscount(): string;
      getDiscount(disc: number): string;
      getDiscount(disc?: any): any {
        return disc
          ? `Dapat potongan harga sebesar ${disc}% : ${(this.harga =
              this.harga - this.harga * (disc / 100))}`
          : `Discount=0, harga normal`;
      }
      //override
      desc2(): string {
        return super.desc() + `\n            ${this.getDiscount(10)}\n`;
      }
    }
  
    const kursiObj = new Detail(
      "IKEA",
      "HUVUDSPEDLARE",
      "Black",
      "Kursi Gaming",
      900_000
    );
    
    //   kursiObj.setnamaBrand("NAPOLY");
    // console.log(kursiObj.desc2());
    //   console.log(kursiObj.getDiscount(10));
    //   console.log(kursiObj.getFurniture());
    //   console.log(kursiObj.desc()+'\n',kursiObj.getFurniture()+'\n',kursiObj.getDiscount(10));
  }