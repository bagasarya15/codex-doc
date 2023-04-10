"use strict";
{
    class Furniture {
        constructor(brand, model, warna) {
            this.brand = brand;
            this.model = model;
            this.warna = warna;
        }
        getInfoBrand() {
            return `${this.brand}, ${this.model}, ${this.warna} `;
        }
        setNamaBrand(nb) {
            this.brand = nb;
        }
        desc() {
            return ` 
            Nama Brand           : ${this.brand}
            Model                : ${this.model}
            Warna                : ${this.warna}
            `;
        }
    }
    class InfoFurniture extends Furniture {
        constructor(brand, model, warna, jenisFurniture) {
            super(brand, model, warna);
            this.jenisFurniture = jenisFurniture;
        }
        getDetailbrand() {
            return super.getInfoBrand();
        }
        desc() {
            return super.desc() + `Jenis Furniture      : ${this.jenisFurniture}`;
        }
    }
    class Detail extends InfoFurniture {
        constructor(brand, model, warna, jenisFurniture, harga) {
            super(brand, model, warna, jenisFurniture);
            this.harga = harga;
        }
        desc2() {
            return super.desc() + `\n            Harga                : Rp.${this.harga}`;
        }
    }
    const detailObj = new Detail('IKEA', 'HUVUDSPEDLARE', 'Black', 'Kursi Gaming', 999999);
    // detailObj.harga = 19
    // detailObj.setNamaBrand('AEKI')
    // console.log(detailObj.getDetailbrand());
    // console.log(detailObj.desc2());
}
