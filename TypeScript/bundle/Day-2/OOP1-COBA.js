"use strict";
{
    class SummaryAbstract {
    }
    class VechilePurchase extends SummaryAbstract {
        constructor() {
            super();
            this.vehicleData = [{
                    noPolice: 'D 1001 UM',
                    vehicleType: 'SUV',
                    year: 2010,
                    price: 350000000,
                    tax: 3500000,
                    seat: 4,
                    transactionDate: '10/01/2023',
                    rent: 500000,
                    orderPerHours: 0,
                    driver: 150000,
                    order: 0,
                    orderPerKM: 0,
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
                    orderPerHours: 0,
                    driver: 150000,
                    order: 0,
                    orderPerKM: 0,
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
                    orderPerHours: 0,
                    driver: 150000,
                    order: 0,
                    orderPerKM: 0,
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
                    orderPerHours: 0,
                    driver: 150000,
                    order: 0,
                    orderPerKM: 0,
                    total: 650000
                }, {
                    noPolice: 'D 11 UK',
                    vehicleType: 'Taxi',
                    year: 2002,
                    price: 175000000,
                    tax: 3500000,
                    seat: 4,
                    transactionDate: '12/01/2023',
                    rent: 500000,
                    orderPerHours: 0,
                    driver: 150000,
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
                    rent: 500000,
                    orderPerHours: 0,
                    driver: 150000,
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
                    rent: 0,
                    orderPerHours: 0,
                    driver: 150000,
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
                    driver: 15000000,
                    order: 0,
                    orderPerKM: 0,
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
                    driver: 25000000,
                    order: 0,
                    orderPerKM: 0,
                    total: 80000000
                },];
        }
        numberFormat(number) {
            return (number) ? new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            }).format(number) : `Undenfined`;
        }
        getTotalVechile(type) {
            return (type) ? `${this.vehicleData.filter((vehicle) => vehicle.vehicleType == type).length}` : `${this.vehicleData.length}`;
        }
        getTotalIncomeVechile(type) {
            let result = this.vehicleData.filter((vehicle) => vehicle.vehicleType == type).reduce((sum, current) => sum + current.total, 0);
            let result2 = this.vehicleData.reduce((sum, current) => sum + current.total, 0);
            return (type) ? `${this.numberFormat(result)}` : `${this.numberFormat(result2)}`;
        }
    }
    let object = new VechilePurchase();
    console.log(object.getTotalVechile());
    console.log(object.getTotalVechile('SUV'));
    console.log(object.getTotalIncomeVechile('SUV'));
    console.log(object.getTotalIncomeVechile('Taxi'));
    console.log(object.getTotalIncomeVechile('PrivateJet'));
    console.log(object.getTotalIncomeVechile());
    // console.log(mobil.getDataMobil());
}
