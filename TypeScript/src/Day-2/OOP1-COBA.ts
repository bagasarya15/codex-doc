{
    interface Summary {
        getTotalVechile():any
        getTotalIncomeVechile():any
    }
    
    abstract class SummaryAbstract {
        abstract getTotalVechile(type?:string):any
        abstract getTotalIncomeVechile(type?:string):any
    
        // getDataMobil():string{
        //     return `Total Kendaraan : `
        // }
    }
    
    class VechilePurchase extends SummaryAbstract implements Summary {
        vehicleData : {
            noPolice : string;
            vehicleType : string;
            year : number;
            price : number;
            tax : number;
            seat: number;
            transactionDate : string;
            rent : number;
            orderPerHours : number;
            driver : number;
            order : number;
            orderPerKM: number;
            total: number;
        }[]
    
        constructor() {
            super()
            this.vehicleData= [{
                noPolice:'D 1001 UM',
                vehicleType:'SUV',
                year:2010,
                price:350_000_000,
                tax:3_500_000,
                seat:4,
                transactionDate: '10/01/2023',
                rent: 500_000,
                orderPerHours: 0 ,
                driver: 150_000,
                order: 0,
                orderPerKM: 0,
                total : 650_000
            },{
                noPolice:'D 1002 UM',
                vehicleType:'SUV',
                year:2010,
                price:350_000_000,
                tax:3_500_000,
                seat:4,
                transactionDate: '10/01/2023',
                rent: 500_000,
                orderPerHours: 0 ,
                driver: 150_000,
                order: 0,
                orderPerKM: 0,
                total : 650_000
            },{
                noPolice:'D 1003 UM',
                vehicleType:'SUV',
                year:2015,
                price:350_000_000,
                tax:3_500_000,
                seat:5,
                transactionDate: '12/01/2023',
                rent: 500_000,
                orderPerHours: 0 ,
                driver: 150_000,
                order: 0,
                orderPerKM: 0,
                total : 650_000
            },{
                noPolice:'D 1004 UM',
                vehicleType:'SUV',
                year:2015,
                price:350_000_000,
                tax:3_500_000,
                seat:5,
                transactionDate: '13/01/2023',
                rent: 500_000,
                orderPerHours: 0 ,
                driver: 150_000,
                order: 0,
                orderPerKM: 0,
                total : 650_000
            },{
                noPolice:'D 11 UK',
                vehicleType:'Taxi',
                year:2002,
                price:175_000_000,
                tax:3_500_000,
                seat:4,
                transactionDate: '12/01/2023',
                rent: 500_000,
                orderPerHours: 0 ,
                driver: 150_000,
                order: 45,
                orderPerKM: 4_500,
                total : 202_500
            },{
                noPolice:'D 12 UK',
                vehicleType:'Taxi',
                year:2015,
                price:225_000_000,
                tax:2_250_000,
                seat:4,
                transactionDate: '13/01/2023',
                rent: 500_000,
                orderPerHours: 0 ,
                driver: 150_000,
                order: 75,
                orderPerKM: 4_500,
                total : 337_500
            },{
                noPolice:'D 13 UK',
                vehicleType:'Taxi',
                year:2020,
                price:275_000_000,
                tax:2_750_000,
                seat:4,
                transactionDate: '13/01/2023',
                rent: 0,
                orderPerHours: 0 ,
                driver: 150_000,
                order: 90,
                orderPerKM: 4_500,
                total : 405_000
            },{
                noPolice:'ID8089',
                vehicleType:'PrivateJet',
                year:2015,
                price:150_000_000_000,
                tax:1_500_000_000,
                seat:12,
                transactionDate: '23/12/2022',
                rent: 35_000_000,
                orderPerHours: 25_000_000 ,
                driver: 15_000_000,
                order: 0,
                orderPerKM: 0,
                total : 50_000_000
            },{
                noPolice:'ID8089',
                vehicleType:'PrivateJet',
                year:2018,
                price:175_000_000_000,
                tax:1_750_000_000,
                seat:15,
                transactionDate: '25/12/2022',
                rent: 55_000_000,
                orderPerHours: 25_000_000 ,
                driver: 25_000_000,
                order: 0,
                orderPerKM: 0,
                total : 80_000_000
            },]
        }
    
        numberFormat():string;
        numberFormat(number: number): number
        numberFormat(number?: any):any{
        return(number)? new Intl.NumberFormat("id-ID",{ 
                style:"currency",
                currency:"IDR"}).format(number): `Undenfined`
            }
        
        
        getTotalVechile():string
        getTotalVechile(type:string):string
        getTotalVechile(type?:any):any{
            return (type)? `${this.vehicleData.filter((vehicle)=>vehicle.vehicleType==type).length}` : `${this.vehicleData.length}`
        }
    
        getTotalIncomeVechile():string
        getTotalIncomeVechile(type:string):string
        getTotalIncomeVechile(type?:any):any{
    
            let result : any = this.vehicleData.filter((vehicle)=>vehicle.vehicleType==type).reduce((sum, current) => sum + current.total, 0)
    
            let result2 = this.vehicleData.reduce((sum, current) => sum + current.total, 0)
    
            return (type)? `${this.numberFormat(result)}` : `${this.numberFormat(result2)}`
        }
    
        // getDataMobil(): string {
        //     return `${super.getDataMobil()} ${this.getTotalVechile()}`
        // }
    }
    
    let object = new VechilePurchase()
    
    console.log(object.getTotalVechile())
    console.log(object.getTotalVechile('SUV'))
    console.log(object.getTotalIncomeVechile('SUV'))
    console.log(object.getTotalIncomeVechile('Taxi'))
    console.log(object.getTotalIncomeVechile('PrivateJet'))
    console.log(object.getTotalIncomeVechile())
    // console.log(mobil.getDataMobil());
}