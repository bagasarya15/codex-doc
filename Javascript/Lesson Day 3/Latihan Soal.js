/* NO 1 */
/*
const getAreaCircle=(r)=>{
    try{
       if ( r <= 0){ throw "try higher number"}
        if (isNaN(r) ){
            throw "inputan harus dalam angka"}
    
        const phi = 3.14159
     const result = (Math.pow(r,2))*phi
        console.log(result)
    } catch (e){
        console.log(e)
    }
}
getAreaCircle(5)
*/

/* NO 2 */
/*
const calculateDistance=(a,t)=>{
    try{
       if ( a <= 0 || t<= 0) { throw "try higher number"}
        if (typeof a != 'number' || typeof t != 'number'  ){
            throw "input must an number"}
    
     const result = (0.5 * a * (Math.pow(t,2)))
        console.log(result)

    } catch (e){
        console.log(e)
    }

}
calculateDistance(50,60)
*/

/* NO 3 */
/*
const fareinheitToKelvin=(f)=>{
    try{
        if (isNaN(f)) {
            throw "Fareinheit must an number"}
    
     const result = (f + 459.67)/1.8
       console.log(`Convert Fareinheit (${f}) to Kelvin = ` + (Math.round(result))
       )
    } catch (e){
        console.log(e)
    }

}
fareinheitToKelvin('1')
*/

/* NO 4 */
/*
const getSalesTax=(price,pajak)=>{
    try{
        // if (isNaN(price)) {
        // throw "Price harus dalam angka"}
        // if (isNaN(pajak)) {
        // throw "Pajak harus dalam angka"}

        if (isNaN(price) || isNaN(pajak)) {
                throw "Price & Pajak harus dalam angka"}

    const convertTax = pajak / 100
    const totalPayment = price + (price * convertTax )
    console.log("Total Sales = " + "Rp."+ price)
    console.log("Pajak = " + convertTax)
    console.log("Total Payment = " + "Rp."+ totalPayment)

    } catch (e){
        console.log(e)
    }
}
getSalesTax(4500,5)
*/

/* NO 5 */
/*
const getSalesDiscount=(price,pajak,diskon)=>{
    try{
        // if (isNaN(price)) {
        // throw "Price harus dalam angka"}
        // if (isNaN(pajak)) {
        // throw "Pajak harus dalam angka"}
        // if (isNaN(diskon)) {
        // throw "Diskon harus dalam angka"}

        if (isNaN(price) || isNaN(pajak) || isNaN(diskon)) {
                throw "Price ,Pajak & Diskon harus dalam angka"}

    const convertTax = pajak / 100
    const convertDc = diskon / 100
    const discountPrice = price * convertDc
    const priceAfterdc = price - discountPrice
    const taxFromafterdc = priceAfterdc * convertTax
    const totalPayment =  priceAfterdc + taxFromafterdc
    
        console.log("Total Sales = " + "Rp."+ price)
        console.log(`Discount (${diskon}%) = ` + "Rp."+ discountPrice)
        console.log("Price After Discount = " + "Rp."+ priceAfterdc)
        console.log(`Pajak (${pajak}%) = `+ "Rp."+ taxFromafterdc)
        console.log("----------------------------------")
        console.log("Total yang harus dibayar = "+ "Rp."+ totalPayment)

    } catch (e){
        console.log(e)
    }

}
getSalesDiscount(4500,10,5)
*/