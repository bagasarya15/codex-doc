{
    interface Ivehicle{
        noPolice?: string;
        vehicleType?: string;
        year?: number;
        price?: number;
        tax?: number;
        seat?: number;
        transactionDate?: string;
        rent?: number;
        orderPerHours?: number;
        driver?: number;
        order?: number;
        orderPerKM?: number;
        total: number;
    }
    
    let vehicleSUV:Ivehicle[]= [{
        noPolice:'D 1001 UM',
        vehicleType:'SUV',
        year:2010,
        price:350_000_000,
        tax:3_500_000,
        seat:4,
        transactionDate: '10/01/2023',
        rent: 500_000,
        driver: 150_000,
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
        driver: 150_000,
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
        driver: 150_000,
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
        driver: 150_000,
        total : 650_000
    }]

    let vehicleTaxi:Ivehicle[]= [{
        noPolice:'D 11 UK',
        vehicleType:'Taxi',
        year:2002,
        price:175_000_000,
        tax:3_500_000,
        seat:4,
        transactionDate: '12/01/2023',
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
        order: 90,
        orderPerKM: 4_500,
        total : 405_000
    }]

    let vehiclePrivateJet:Ivehicle[]= [{
        noPolice:'ID8089',
        vehicleType:'PrivateJet',
        year:2015,
        price:150_000_000_000,
        tax:1_500_000_000,
        seat:12,
        transactionDate: '23/12/2022',
        rent: 35_000_000,
        orderPerHours: 25_000_000 ,
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
        total : 80_000_000
    }]

    interface Summary  {
        getTotalVehicle():any
        getTotalIncomeVehicle():any
    }
    
    abstract class Vehicle{
        constructor
        (
            protected vehicleSUV:Ivehicle[],protected vehicleTaxi:Ivehicle[],protected vehiclePrivateJet:Ivehicle[]
        ) {}

        numberFormat():string;
        numberFormat(number: number): number
        numberFormat(number?: any):any{
            if(number){
                return new Intl.NumberFormat("id-ID",{ 
                    style:"currency",
                    currency:"IDR",
                    minimumFractionDigits: 0}).format(number)
            }else{
                return `Undenfined`
            }
        }
    }

    class SUV extends Vehicle implements Summary{
        constructor
        (
            vehicleSUV: Ivehicle[],
        ){
            super(vehicleSUV,vehicleTaxi,vehiclePrivateJet)
        }

        getTotalVehicle():string
        getTotalVehicle(type:string):string
        getTotalVehicle(type?:any):any{
            if(type){
                return `${this.vehicleSUV.filter((vehicle)=>vehicle.vehicleType==type).length}`
            }else{
                return `${this.vehicleSUV.length}`
            }
        }

        getTotalIncomeVehicle():string
        getTotalIncomeVehicle(type:string):string
        getTotalIncomeVehicle(type?:any):any{
            let result : any = this.vehicleSUV.filter((vehicle)=>vehicle.vehicleType==type).reduce((previous, current) => previous + current.total, 0)
            let result2 : any = this.vehicleSUV.reduce((previous, current) => previous + current.total, 0)
    
            if(type){
                return `${this.numberFormat(result)}`
            }else{
                return `${this.numberFormat(result2)}`
            }
        }
        
    }

    class Taxi extends Vehicle implements Summary{
        constructor
        (
            vehicleTaxi : Ivehicle[]
        ){
            super(vehicleSUV,vehicleTaxi,vehiclePrivateJet)
        }

        getTotalVehicle():string
        getTotalVehicle(type:string):string
        getTotalVehicle(type?:any):any{
            if(type){
                return `${this.vehicleTaxi.filter((vehicle)=>vehicle.vehicleType==type).length}`
            }else{
                return `${this.vehicleTaxi.length}`
            }
        }

        getTotalIncomeVehicle():string
        getTotalIncomeVehicle(type:string):string
        getTotalIncomeVehicle(type?:any):any{
            let result : any = this.vehicleTaxi.filter((vehicle)=>vehicle.vehicleType==type).reduce((previous, current) => previous + current.total, 0)
            let result2 : any = this.vehicleTaxi.reduce((previous, current) => previous + current.total, 0)
    
            if(type){
                return `${this.numberFormat(result)}`
            }else{
                return `${this.numberFormat(result2)}`
            }
        }
    }    

    class PrivateJet extends Vehicle{
        constructor
        (
            vehiclePrivateJet : Ivehicle[]
        ){
            super(vehicleSUV,vehicleTaxi,vehiclePrivateJet)
        }

        getTotalVehicle():string
        getTotalVehicle(type:string):string
        getTotalVehicle(type?:any):any{
            if(type){
                return `${this.vehiclePrivateJet.filter((vehicle)=>vehicle.vehicleType==type).length}`
            }else{
                return `${this.vehiclePrivateJet.length}`
            }
        }

        getTotalIncomeVehicle():string
        getTotalIncomeVehicle(type:string):string
        getTotalIncomeVehicle(type?:any):any{
            let result : any = this.vehiclePrivateJet.filter((vehicle)=>vehicle.vehicleType==type).reduce((previous, current) => previous + current.total, 0)
            let result2 : any = this.vehiclePrivateJet.reduce((previous, current) => previous + current.total, 0)
    
            if(type){
                return `${this.numberFormat(result)}`
            }else{
                return `${this.numberFormat(result2)}`
            }
        }
    }    

    let objectSUV = new SUV(vehicleSUV,);
    console.log(objectSUV.getTotalVehicle());
    console.log(objectSUV.getTotalIncomeVehicle());
    console.log(`-------------------------------------`);
    let objectTaxi = new Taxi(vehicleTaxi)
    console.log(objectTaxi.getTotalVehicle());
    console.log(objectTaxi.getTotalIncomeVehicle());
    console.log(`-------------------------------------`);
    let objectPrivateJet = new PrivateJet(vehiclePrivateJet);
    console.log(objectPrivateJet.getTotalVehicle());
    console.log(objectPrivateJet.getTotalIncomeVehicle());

    // let objectTaxi = new Taxi();
}