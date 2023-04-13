"use strict";
{
    class Furniture {
        constructor(brand, model, warna) {
            this.brand = brand;
            this.model = model;
            this.warna = warna;
        }
        setnamaBrand(nb) {
            this.brand = nb;
        }
        setmodelFurniture(mf) {
            this.model = mf;
        }
        setwarna(sw) {
            this.warna = sw;
        }
        desc() {
            return ` 
              Nama Brand  : ${this.brand}
              Model       : ${this.model}
              Warna       : ${this.warna}
              `;
        }
    }
    class InfoFurniture extends Furniture {
        constructor(brand, model, warna, jenisFurniture) {
            super(brand, model, warna);
            this.jenisFurniture = jenisFurniture;
        }
        getFurniture() {
            return `Jenis Furniture : ${this.jenisFurniture}`;
        }
        desc() {
            //Overide
            return super.desc() + this.getFurniture();
        }
    }
    class Detail extends InfoFurniture {
        constructor(brand, model, warna, jenisFurniture, harga) {
            super(brand, model, warna, jenisFurniture);
            this.harga = harga;
        }
        getDiscount(disc) {
            return disc
                ? `Dapat potongan harga sebesar ${disc}% : ${(this.harga =
                    this.harga - this.harga * (disc / 100))}`
                : `Discount=0, harga normal`;
        }
        //override
        desc2() {
            return super.desc() + `\n            ${this.getDiscount(10)}\n`;
        }
    }
    const kursiObj = new Detail("IKEA", "HUVUDSPEDLARE", "Black", "Kursi Gaming", 900000);
    //   kursiObj.setnamaBrand("NAPOLY");
    // console.log(kursiObj.desc2());
    //   console.log(kursiObj.getDiscount(10));
    //   console.log(kursiObj.getFurniture());
    //   console.log(kursiObj.desc()+'\n',kursiObj.getFurniture()+'\n',kursiObj.getDiscount(10));
}
