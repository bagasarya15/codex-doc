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
    
    let vehicle:Ivehicle[]= [{
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
    },{
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
    
    abstract class AbstractVehicle{
        constructor
        (
            protected vehicle:Ivehicle[]
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

        getTotalVehicle(){
            return `${vehicle.length}`
        }

        getTotalIncome(){
            return `${this.numberFormat(vehicle.reduce((previous, current) => previous + current.total, 0))}`
        }
    }

    class Vehicle extends AbstractVehicle {
        constructor
        (
            vehicle:Ivehicle[]
        ) {
            super(vehicle)
        }

        //Start Overide
        getTotalVehicle(){ 
            return `Total Keseluruhan Vehicle  : ${super.getTotalVehicle()}`
        }

        getTotalIncome(){
            return `Total Income Keseluruhan   : ${super.getTotalIncome()}`
        }
        //End Overide
    }

    class SUV extends Vehicle implements Summary{
        constructor
        (
            vehicle: Ivehicle[],
        ){
            super(vehicle)
        }

        getTotalVehicle():any{
            let result : any = `${this.vehicle.filter((vehicle)=>vehicle.vehicleType=='SUV').length}`

            return `Total Kendaraan SUV : ${result}`
        }

        getTotalIncomeVehicle():any{
            let result : any = this.vehicle.filter((vehicle)=>vehicle.vehicleType=='SUV').reduce((previous, current) => previous + current.total, 0)

            return `Total Income SUV : ${this.numberFormat(result)}`;
        }
        
    }

    class Taxi extends Vehicle implements Summary{
        constructor
        (
            vehicle: Ivehicle[],
        ){
            super(vehicle)
        }

        getTotalVehicle():any{
            let result : any = `${this.vehicle.filter((vehicle)=>vehicle.vehicleType=='Taxi').length}`

            return `Total Taxi : ${result}`
            
        }

        getTotalIncomeVehicle():any{
            let result : any = this.vehicle.filter((vehicle)=>vehicle.vehicleType=='Taxi').reduce((previous, current) => previous + current.total, 0)
            
            return `Total Income Taxi : ${this.numberFormat(result)}`;
        }
    }    

    class PrivateJet extends Vehicle{
        constructor
        (
            vehicle: Ivehicle[],
        ){
            super(vehicle)
        }

        getTotalVehicle(){
            let result: any = `${this.vehicle.filter((vehicle)=>vehicle.vehicleType=='PrivateJet').length}`

            return `Total Private Jet : ${result}`;
        }

        getTotalIncomeVehicle():any{
            let result : any = this.vehicle.filter((vehicle)=>vehicle.vehicleType=='PrivateJet').reduce((previous, current) => previous + current.total, 0)

            return `Total Income Private Jet : ${this.numberFormat(result)}`;
        }
    }    

    let objectSUV = new SUV(vehicle,);
    console.log(objectSUV.getTotalVehicle());
    console.log(objectSUV.getTotalIncomeVehicle());

    console.log(`------------------------------------------`);

    let objectTaxi = new Taxi(vehicle)
    console.log(objectTaxi.getTotalVehicle());
    console.log(objectTaxi.getTotalIncomeVehicle());

    console.log(`------------------------------------------`);

    let objectPrivateJet = new PrivateJet(vehicle);
    console.log(objectPrivateJet.getTotalVehicle());
    console.log(objectPrivateJet.getTotalIncomeVehicle());

    console.log(`------------------------------------------`);
    
    let objectVehicle = new Vehicle(vehicle);
    console.log(objectVehicle.getTotalVehicle()); 
    console.log(objectVehicle.getTotalIncome()); 
}