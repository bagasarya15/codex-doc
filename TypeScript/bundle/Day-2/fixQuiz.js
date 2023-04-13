"use strict";
{
    let vehicleSUV = [{
            noPolice: 'D 1001 UM',
            vehicleType: 'SUV',
            year: 2010,
            price: 350000000,
            tax: 3500000,
            seat: 4,
            transactionDate: '10/01/2023',
            rent: 500000,
            driver: 150000,
            total: 650000
        }, {
            noPolice: 'D 1002 UM',
            vehicleType: 'SUV',
            year: 2010,
            price: 350000000,
            tax: 3500000,
            seat: 4,
            transactionDate: '10/01/2023',
            rent: 500000,
            driver: 150000,
            total: 650000
        }, {
            noPolice: 'D 1003 UM',
            vehicleType: 'SUV',
            year: 2015,
            price: 350000000,
            tax: 3500000,
            seat: 5,
            transactionDate: '12/01/2023',
            rent: 500000,
            driver: 150000,
            total: 650000
        }, {
            noPolice: 'D 1004 UM',
            vehicleType: 'SUV',
            year: 2015,
            price: 350000000,
            tax: 3500000,
            seat: 5,
            transactionDate: '13/01/2023',
            rent: 500000,
            driver: 150000,
            total: 650000
        }];
    let vehicleTaxi = [{
            noPolice: 'D 11 UK',
            vehicleType: 'Taxi',
            year: 2002,
            price: 175000000,
            tax: 3500000,
            seat: 4,
            transactionDate: '12/01/2023',
            order: 45,
            orderPerKM: 4500,
            total: 202500
        }, {
            noPolice: 'D 12 UK',
            vehicleType: 'Taxi',
            year: 2015,
            price: 225000000,
            tax: 2250000,
            seat: 4,
            transactionDate: '13/01/2023',
            order: 75,
            orderPerKM: 4500,
            total: 337500
        }, {
            noPolice: 'D 13 UK',
            vehicleType: 'Taxi',
            year: 2020,
            price: 275000000,
            tax: 2750000,
            seat: 4,
            transactionDate: '13/01/2023',
            order: 90,
            orderPerKM: 4500,
            total: 405000
        }];
    class Vehicle {
        constructor(vehicleData1, vehicleData2) {
            this.vehicleData1 = vehicleData1;
            this.vehicleData2 = vehicleData2;
        }
        numberFormat(number) {
            if (number) {
                return new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0
                }).format(number);
            }
            else {
                return `Undenfined`;
            }
        }
    }
    class SUV extends Vehicle {
        constructor(vehicleData1, vehicleData2) {
            super(vehicleData1, vehicleData2);
        }
        getTotalVehicle(type) {
            if (type) {
                return `${this.vehicleData1.filter((vehicle) => vehicle.vehicleType == type).length}`;
            }
            else {
                return `${this.vehicleData1.length}`;
            }
        }
        getTotalIncomeVehicle(type) {
            let result = this.vehicleData1.filter((vehicle) => vehicle.vehicleType == type).reduce((previous, current) => previous + current.total, 0);
            let result2 = this.vehicleData1.reduce((previous, current) => previous + current.total, 0);
            if (type) {
                return `${this.numberFormat(result)}`;
            }
            else {
                return `${this.numberFormat(result2)}`;
            }
        }
    }
    // class Taxi extends Vehicle implements Summary{
    //     constructor(vehicleData2 : IvehicleTaxi[]) {
    //         super(vehicleData2)
    //     }
    // }    
    // class SuperJet extends Vehicle{
    //     constructor(vehicleData : Ivehicle[]) {
    //         super(vehicleData)
    //     }
    // }    
    let objectSUV = new SUV(vehicleSUV, vehicleTaxi);
    console.log(objectSUV.getTotalVehicle());
    console.log(objectSUV.getTotalIncomeVehicle());
    // let objectTaxi = new Taxi();
}
