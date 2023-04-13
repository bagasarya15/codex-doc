"use strict";
{
    let vehicle = [{
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
        }, {
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
        }, {
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
    class AbstractVehicle {
        constructor(vehicle) {
            this.vehicle = vehicle;
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
        getTotalVehicle() {
            return `${vehicle.length}`;
        }
        getTotalIncome() {
            return `${this.numberFormat(vehicle.reduce((previous, current) => previous + current.total, 0))}`;
        }
    }
    class Vehicle extends AbstractVehicle {
        constructor(vehicle) {
            super(vehicle);
        }
        getTotalVehicle() {
            return `Total Kendaraan : ${super.getTotalVehicle()}`;
        }
        getTotalIncome() {
            return `Total Income    : ${super.getTotalIncome()}`;
        }
    }
    class SUV extends Vehicle {
        constructor(vehicle) {
            super(vehicle);
        }
        getTotalVehicle() {
            return `Total Kendaraan SUV : ${this.vehicle.filter((vehicle) => vehicle.vehicleType == 'SUV').length}`;
        }
        getTotalIncomeVehicle() {
            let result = this.vehicle.filter((vehicle) => vehicle.vehicleType == 'SUV').reduce((previous, current) => previous + current.total, 0);
            return this.numberFormat(result);
        }
    }
    class Taxi extends Vehicle {
        constructor(vehicle) {
            super(vehicle);
        }
        getTotalVehicle() {
            return `${this.vehicle.filter((vehicle) => vehicle.vehicleType == 'Taxi').length}`;
        }
        getTotalIncomeVehicle() {
            let result = this.vehicle.filter((vehicle) => vehicle.vehicleType == 'Taxi').reduce((previous, current) => previous + current.total, 0);
            return this.numberFormat(result);
        }
    }
    class PrivateJet extends Vehicle {
        constructor(vehicle) {
            super(vehicle);
        }
        getTotalVehicle(type) {
            if (type) {
                return `${this.vehicle.filter((vehicle) => vehicle.vehicleType == type).length}`;
            }
            else {
                return `${this.vehicle.length}`;
            }
        }
        getTotalIncomeVehicle() {
            let result = this.vehicle.filter((vehicle) => vehicle.vehicleType == 'PrivateJet').reduce((previous, current) => previous + current.total, 0);
            return this.numberFormat(result);
        }
    }
    let objectSUV = new SUV(vehicle);
    console.log(objectSUV.getTotalVehicle());
    console.log(objectSUV.getTotalIncomeVehicle());
    console.log(`-------------------------------------`);
    let objectTaxi = new Taxi(vehicle);
    console.log(objectTaxi.getTotalVehicle());
    console.log(objectTaxi.getTotalIncomeVehicle());
    console.log(`-------------------------------------`);
    let objectPrivateJet = new PrivateJet(vehicle);
    console.log(objectPrivateJet.getTotalVehicle('PrivateJet'));
    console.log(objectPrivateJet.getTotalIncomeVehicle());
    console.log(`-------------------------------------`);
    let objectVehicle = new Vehicle(vehicle);
    console.log(objectVehicle.getTotalVehicle());
    console.log(objectVehicle.getTotalIncome());
}
