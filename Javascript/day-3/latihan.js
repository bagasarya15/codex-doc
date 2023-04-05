//Nomor 1
const hitungLuasLingkaran = (radius) => {
    try {
        let phi = 3.14159;
        if(typeof radius !== 'number')
            throw new Error('return inputan harus dalam angka')
        if(radius <= 0 ) {
            throw new Error('return radius -1 <= 0, try higher')
        }
        return phi * (radius * radius);
    } catch (error) {
        return error.message;
    }
}
// console.log(hitungLuasLingkaran(-1))
// console.log(hitungLuasLingkaran('a'))
// console.log(hitungLuasLingkaran(5))

//Nomor 2
const hitungJarak = (a, t) => {
    try {
        if(typeof a !== 'number' || typeof t !== 'number')
            throw new Error('input must an number')
        if(a <= 0 || t <= 0 ) {
            throw new Error('Accelaration or time must be >= 0')
        }
        return 0.5 * a * (t * t);
    } catch (error) {
        return error.message
    }
}
// console.log(hitungJarak('a','t'))
// console.log(hitungJarak(-1,9))
// console.log(hitungJarak(50,60))

//Nomor 3
const convertSuhu = (f) => {
    try {
        let k = (f + 459.67) / 1.8;
        if(isNaN(f))
            throw new Error('Farenhait must an number')
        return (Math.round(k)); //math round untuk membuat angka decimal
    } catch (error) {
        return error.message
    }

}
// console.log(convertSuhu(45))
// console.log(convertSuhu("1"))
// console.log(convertSuhu('F'))

//Nomor 4
const hitungPajak = (price, tax) => {
    try {
        let pajak = price * (tax / 100);
        let total = price + pajak;
        if(isNaN(price))
            throw new Error('Price harus dalam angka')
        if(isNaN(price) || isNaN(tax))
            throw new Error('Price dan pajak harus dalam angka')
        if(isNaN(tax))
            throw new Error('Pajak harus dalam angka')
        return total;
    } catch (error) {
        return error.message
    }
}
console.log(hitungPajak("a", 1))
console.log(hitungPajak(500, "pajak"))
console.log(hitungPajak("harga", "pajak"))
console.log(hitungPajak(4500, 5))

//Nomor 5
const hitungDiscount = (price, tax, discount) => {
    try {

        let diskon = discount / 100;
        let subTotal = price * diskon;
        let priceAfterDiscount = price - subTotal;
        let pajak = tax / 100;
        let subTotalPajak = priceAfterDiscount * pajak;
        let total = priceAfterDiscount + subTotalPajak;

        if(isNaN(price))
            throw new Error('Price harus dalam angka')
        if(isNaN(price) || isNaN(tax))
            throw new Error('Price dan pajak harus dalam angka')
        if(isNaN(price) || isNaN(tax) || isNaN(discount))
            throw new Error('Price, Tax & Discount harus dalam angka')
            return total;
    } catch (error) {
        return error.message
    }
}
// console.log(hitungDiscount("a",1,5))
// console.log(hitungDiscount(500,"pajak",5))
// console.log(hitungDiscount('harga','pajak','discount'))
// console.log(hitungDiscount(4500,10,5))
