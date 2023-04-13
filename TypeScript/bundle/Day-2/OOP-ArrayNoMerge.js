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
    let vehiclePrivateJet = [{
            noPolice: 'ID8089',
            vehicleType: 'PrivateJet',
            year: 2015,
            price: 150000000000,
            tax: 1500000000,
            seat: 12,
            transactionDate: '23/12/2022',
            rent: 35000000,
            orderPerHours: 25000000,
            total: 50000000
        }, {
            noPolice: 'ID8089',
            vehicleType: 'PrivateJet',
            year: 2018,
            price: 175000000000,
            tax: 1750000000,
            seat: 15,
            transactionDate: '25/12/2022',
            rent: 55000000,
            orderPerHours: 25000000,
            total: 80000000
        }];
    class Vehicle {
        constructor(vehicleSUV, vehicleTaxi, vehiclePrivateJet) {
            this.vehicleSUV = vehicleSUV;
            this.vehicleTaxi = vehicleTaxi;
            this.vehiclePrivateJet = vehiclePrivateJet;
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
        constructor(vehicleSUV) {
            super(vehicleSUV, vehicleTaxi, vehiclePrivateJet);
        }
        getTotalVehicle(type) {
            if (type) {
                return `${this.vehicleSUV.filter((vehicle) => vehicle.vehicleType == type).length}`;
            }
            else {
                return `${this.vehicleSUV.length}`;
            }
        }
        getTotalIncomeVehicle(type) {
            let result = this.vehicleSUV.filter((vehicle) => vehicle.vehicleType == type).reduce((previous, current) => previous + current.total, 0);
            let result2 = this.vehicleSUV.reduce((previous, current) => previous + current.total, 0);
            if (type) {
                return `${this.numberFormat(result)}`;
            }
            else {
                return `${this.numberFormat(result2)}`;
            }
        }
    }
    class Taxi extends Vehicle {
        constructor(vehicleTaxi) {
            super(vehicleSUV, vehicleTaxi, vehiclePrivateJet);
        }
        getTotalVehicle(type) {
            if (type) {
                return `${this.vehicleTaxi.filter((vehicle) => vehicle.vehicleType == type).length}`;
            }
            else {
                return `${this.vehicleTaxi.length}`;
            }
        }
        getTotalIncomeVehicle(type) {
            let result = this.vehicleTaxi.filter((vehicle) => vehicle.vehicleType == type).reduce((previous, current) => previous + current.total, 0);
            let result2 = this.vehicleTaxi.reduce((previous, current) => previous + current.total, 0);
            if (type) {
                return `${this.numberFormat(result)}`;
            }
            else {
                return `${this.numberFormat(result2)}`;
            }
        }
    }
    class PrivateJet extends Vehicle {
        constructor(vehiclePrivateJet) {
            super(vehicleSUV, vehicleTaxi, vehiclePrivateJet);
        }
        getTotalVehicle(type) {
            if (type) {
                return `${this.vehiclePrivateJet.filter((vehicle) => vehicle.vehicleType == type).length}`;
            }
            else {
                return `${this.vehiclePrivateJet.length}`;
            }
        }
        getTotalIncomeVehicle(type) {
            let result = this.vehiclePrivateJet.filter((vehicle) => vehicle.vehicleType == type).reduce((previous, current) => previous + current.total, 0);
            let result2 = this.vehiclePrivateJet.reduce((previous, current) => previous + current.total, 0);
            if (type) {
                return `${this.numberFormat(result)}`;
            }
            else {
                return `${this.numberFormat(result2)}`;
            }
        }
    }
    let objectSUV = new SUV(vehicleSUV);
    console.log(objectSUV.getTotalVehicle());
    console.log(objectSUV.getTotalIncomeVehicle());
    console.log(`-------------------------------------`);
    let objectTaxi = new Taxi(vehicleTaxi);
    console.log(objectTaxi.getTotalVehicle());
    console.log(objectTaxi.getTotalIncomeVehicle());
    console.log(`-------------------------------------`);
    let objectPrivateJet = new PrivateJet(vehiclePrivateJet);
    console.log(objectPrivateJet.getTotalVehicle());
    console.log(objectPrivateJet.getTotalIncomeVehicle());
    // let objectTaxi = new Taxi();
}
