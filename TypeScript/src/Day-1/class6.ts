{
    class Transportasi
    {
        constructor(protected nama:string, protected jmlhRoda:number, protected bahanBakar:string)
        {
            
        }

        protected getTransport(){
            return `Nama Kendaraan: ${this.nama} Jumlah Roda:${this.jmlhRoda} Bahan Bakar Menggunakan:${this.bahanBakar}`
        }

        setNama(nm:string){
            this.nama=nm
        }

        setRoda(rd:number){
            this.jmlhRoda=rd
        }

        setBahanBakar(bb:string){
            this.bahanBakar=bb
        }
    }

    class TransportasiDarat extends Transportasi 
    {
        static str:string = 'helo';
        static count = 0
        constructor(public nama: string, public jmlhRoda: number, public bahanBakar: string, public warna: string)
        {
            super(nama, jmlhRoda, bahanBakar)
            this.warna = warna;
            TransportasiDarat.count++
        }
        static getBB():string {
            return this.str
        }
        getDetailInfo(){
            return `${super.getTransport()} dan bewarna ${this.warna} ${TransportasiDarat.str}`
        }
    }

    
    let transportObj = new TransportasiDarat ('Gojek', 2, 'Bensin', 'Merah');
    transportObj.setNama('Motor')
    console.log(transportObj.getDetailInfo());
    
}