"use strict";
{
    class FurnitureAbstract {
        constructor(brand) {
            this.brand = brand;
        }
        getBrand() {
            return `${this.brand}`;
        }
        getInfoBrand() {
            return `
                    Nama Brand      : ${this.brand} 
                    Model           : ${this.getModel()} 
                    warna           : ${this.getWarna()}
                `;
        }
    }
    class Furniture extends FurnitureAbstract {
        constructor(brand, model, warna, jenisFurniture) {
            super(brand);
            this.model = model;
            this.warna = warna;
            this.jenisFurniture = jenisFurniture;
        }
        getHello() {
            return `Selamat datang di toko furnitur kami, berikut detail belanja anda :`;
        }
        getModel() {
            return this.model;
        }
        ;
        getWarna() {
            return this.warna;
        }
        ;
        getJenis() {
            return `  Jenis Furniture :${this.jenisFurniture}`;
        }
        ;
        getInfoBrand() {
            return `${super.getInfoBrand()}  ${this.getJenis()}`;
        }
    }
    class DetailFurniture extends Furniture {
        constructor(brand, model, warna, jenisFurniture, harga) {
            super(brand, model, warna, jenisFurniture);
            this.harga = harga;
        }
        message() {
            return `~TERIMAKASIH TELAH BELANJA DI TOKO KAMI~`;
        }
        getDiscount(disc) {
            return (disc) ? `Subtotal Harga Rp.${this.harga} Potongan Disc ${disc}% \n                    Total Harga ${this.harga = this.harga - (this.harga * (disc / 100))}` : `Tidak dapat potongan`;
        }
        setNamaBrand(nb) {
            super.brand = nb;
        }
        getHarga() {
            return this.harga;
        }
        getInfoBrand() {
            return `
                ${this.getHello()} 
                ${super.getInfoBrand()}
                    ${this.getDiscount(10)} 
                    ${this.message()}
            `;
        }
    }
    const object = new DetailFurniture("IKEA", "HUVUDSPEDLARE", "Black", "Kursi Gaming", 900000);
    console.log(object.getInfoBrand());
    //   console.log(object.getDiscount(10));
    //   console.log(object.getFurniture());
    // console.log(object.getInfoBrand()+'\n',object.getModel()+'\n',object.getWarna());
    const objek2 = new Furniture("IKEA", "HUVUDSPEDLARE", "Black", "Kursi Gaming");
    // console.log(objek2.getInfoBrand());
}
