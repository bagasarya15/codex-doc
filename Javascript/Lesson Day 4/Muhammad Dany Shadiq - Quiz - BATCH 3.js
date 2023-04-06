/* ===================== NO 6 ===================== */

const getCordinat=(x1,y1,x2,y2)=>{ //arrow function untuk menampung nilai yng akan di input

    try{ //sebagai exeption jika terjadi kesalahan pada kode program dan akan menjalankan yang ada pada catch
        if (isNaN(x1)||isNaN(x2)||isNaN(y1)||isNaN(y2)) 
        { throw "Input kordinat dalam angka"} //untuk mengcheck inputannya apakah number/bukan

        let x1x2= Math.pow((x1 - x2),2) // variable untuk menampung hasil pangkat(pow) 2 dari x1 dan x2
        let y1y2= Math.pow((y1 - y2),2) // variable untuk menampung hasil pangkat(pow) 2 dari y1 dan y2
        const d = Math.sqrt( x1x2 + y1y2 ) // variable untuk menampung hasil kuadrat
        console.log(d) // untuk menampilkan hasil d
    } catch(e) {
        console.log(e)
    } 
}
getCordinat(3,4,-4,-5) //11.40175425099138
// getCordinat("1","2","-1","-2") //4.47213595499958
// getCordinat("x","2","-y","-2") //input kordinat dalam angka
// getCordinat(3.2,4.5,-4.4,-5) //12.165936051122411




/* ===================== NO 7 ===================== */

const sumDigit=(n)=>{
    try{
        if (n >= 10000) { throw `${n} harus lebih kecil dari 10000`} // mengecek jika n lebih dari 10_000
        if (isNaN(n)) { throw `${n} is not number , try again`} // mengecek jika n adalah number
        const num = n.toString().split('') //menkonvert n menjadi array dengan split agar bisa menggunkan function reduce 
    
        const sum =  num.reduce((a,b) => Number(a) + Number(b)) // untuk menambahkan data yang ada di dalam array

        console.log(sum)
    } catch(e) {
        console.log(e)
    } 
}
sumDigit(10000) // 10000 harus lebih kecil dari 10000
// sumDigit('a222') // a222 is not number , try again
// sumDigit(9999) // 36





/* ===================== NO 8 ===================== */

const elapsedTime=(detik)=>{

    try{
        if (isNaN(detik)) { throw `${detik} is not number , try again`}
        
        var d = Math.floor(detik / (3600*24)); // perhitungan untuk mencari hari
        var h = Math.floor(detik % (3600*24) / 3600); // perhitungan untuk mencari jam
        var m = Math.floor(detik % 3600 / 60);// perhitungan untuk mencari menit
        var s = Math.floor(detik % 60); // perhitungan untuk mencari detik

        console.log(`${d} Hari ${h} Jam ${m} Menit ${s} Detik`)
    } catch(e) {
        console.log(e)
    } 
}
elapsedTime('700005')// 8 Hari 2 Jam 26 Menit 45 Detik
elapsedTime('700005A')// 700005A is not number




/* ===================== NO 9 ===================== */

const getRandomPassword=(pass)=>{

    try{
       
        let textData = /^[a-zA-Z].{5}$/ //regex input hanya karakter dengan panjang diatas 5 (5 ny tidak termasuk) 
        let number = /[0-9]+$/ // regex untuk hanya angka
        if(pass.toString().match(textData)) {
            let random = Math.random().toString(36).substring(7)//untuk menggenerate karakter random
            console.log(random)
        } else if (pass.toString().match(number)){ // jika inputan semuanya angka 
            throw 'Value must be character'
        } else {
            throw 'Length must more than 6'
        }
         
    } catch(e) {
        console.log(e)
    } 
}
// getRandomPassword(12346)// Value must be character
// getRandomPassword(3422)// Value must be character
// getRandomPassword("code")//Length must more than 6
getRandomPassword("codeid")//generate randow password




/* ===================== NO 10 ===================== */

const covertToRupiah=(value, currencyType)=>{
    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID",{ // function rupiah  berfungsi untuk memformat angka menjadi rupiah 
            style:"currency",
            currency:"IDR"}).format(number);
    }
        try{

        if ( currencyType=='yen' ){
            let convertMoney = value * 130.12
            console.log(rupiah(convertMoney))
        } else if ( currencyType=='usd' ){
            let convertMoney = value * 14382.5
            console.log(rupiah(convertMoney))
        }else if ( currencyType=='euro'){
            let convertMoney = value * 16000
            console.log(rupiah(convertMoney))
        } else {
            throw 'no match type currency'
        }
        
       
    }catch(e){
        console.log(e)
    }
    
}
covertToRupiah(1000,'yen')//Rp 130.120,00
covertToRupiah(100,'usd')//Rp 1.438.250,00
covertToRupiah(100,'euro')//Rp 1.600.000,00
covertToRupiah(1000,'')//no match type currency'


/* ===================== NO 11 ===================== */

const getHavier=(w1,w2,w3)=>{
    try{
    let num = [w1,w2,w3] // menampung nilai w1,w2,w3 pada num[]
    console.log
    (num.reduce((prev, curr) => prev > curr ? prev : curr, undefined)) 
        /* fungsi reduce untuk memanipulasi array, dalam baris kode diatas untuk 
        membandingkan nilai selanjutnya dengan nilai yang sekrang 
        undefined akan dikembalikan jika inputan kosong */
    }catch(e){
        console.log(e.message)

    }
}
getHavier(12,45,70)//70



/* ===================== NO 12 ===================== */

const getDays=(month,year)=>{

const getDaysInMonth=(month,year)=>{
    return new Date(year,month,0).getDate(); // fungsi untuk mengambil hari dari tahun dan bulan yang di tuju
}

    try { 
        if ( isNaN(month) && isNaN(year)){
            throw 'Inputan bulan & tahun harus dalam integer'
        }
        if (isNaN(month)){
            throw 'Inputan bulan harus dalam integer'
        }
        if (isNaN(year)){
            throw 'Inputan tahun harus dalam integer'
        }

    const daysinMonth = getDaysInMonth(month,year)
        if (daysinMonth == 29){ // pada bulan februari terdapat tahun yang memiliki jumalah hari sebanyak 29
            console.log(`This month has ${daysinMonth} days, ${year} adalah tahun kabisat`)
         } else {
            console.log(`This month has ${daysinMonth} days`)
        }

    }catch(e){
        console.log(e)

    }    
}

// getDays('a',2021)//inputan bulan harus dalam integer
// getDays('2','year')//inputan tahun harus dalam integer
// getDays('m','year')//Inputan bulan & tahun harus dalam integer
// getDays(2,2000)//This month has 29 days, 2000 adalah tahun kabisat
getDays(8,2021)//This month has 31 days




/* ===================== NO 13 ===================== */

const isPalindrome=(angka)=>{
   try {
    if (isNaN(angka)){ throw `${angka} is not an number`}
    let input =angka.toString().split('')
    if(input[0] == input[3] && input[1] == input[2] ) { 
       /*karna inputan dari soal hanya diminta 4 digit dengan membandingkan index data
       seperti yang diatas , maka akan dapat mengetahui input itu palindrom atau bukan */
        console.log(`${angka} is Palindrome`)
    }else{
        console.log(`${angka} is not Palindrome`)
    }
}catch (e){
    console.log(e)
}
}
// isPalindrome('abcd')//abcd is not an number
// isPalindrome('123a')//123a is not an number
// isPalindrome("1234")//1234 is not Palindrome
// isPalindrome(1221)//1221 is Palindrome
isPalindrome("8888")//8888 is Palindrome



/* ===================== NO 14 ===================== */


const getProsentase=(income1 , income2)=>{
    try{
    if (isNaN(income1)||isNaN(income2))
    { throw `${income1} or ${income2} is not an number`}

    if (income1 < income2){
        let result = ((income2 - income1)/income1)*100 //rumus untuk mencari presentase jika income1 < income2
        console.log(`Total Kenaikan income ${result}%`)
    } else if (income1 > income2){
        let result = ((income1 - income2)/income1)*100 //rumus untuk mencari presentase jika income1 > income2
        console.log(`Total penururan income -${Math.ceil(result)}%`)// math ceil agar bilangan bulan ke atas
    }
    }catch(e){
        console.log(e)
    }
}
// getProsentase('abc','bca') //abc or bca is not an number
// getProsentase(600000,750000)//Total Kenaikan income 25%
getProsentase(750000,650000)//Total penururan income -14%


/* ===================== NO 15 ===================== */

const totalGaji=(gaji1,gaji2,gaji3)=>{
try {

    if((isNaN(gaji1))||(isNaN(gaji1))||(isNaN(gaji1))){
        throw 'input is not a number'
    }
    /* melakukan perhitungan untuk mendapatkan
        gaji yang sudah termasuk pajak */
    let emp1 = gaji1 + (0.02 *gaji1)//pajak 2%
    let emp2 = gaji2 + (0.05 *gaji2)//pajak 5%
    let emp3 = gaji3 + (0.1 *gaji3)//pajak 10%

    let total = emp1 + emp2 + emp3
    console.log('Total Gaji yang harus dibayar')
    console.log(`Emp1 : Rp.${gaji1} + Pajak(2%) = Rp.${emp1}`)
    console.log(`Emp2 : Rp.${gaji2} + Pajak(5%) = Rp.${emp2}`)
    console.log(`Emp3 : Rp.${gaji3} + Pajak(10%) = Rp.${emp3}`)
    console.log(`Total : Rp.${total}`)
}catch(e){
    console.log(e.message)
}

}
totalGaji(500,2000,12000)
/* hasil output
Total Gaji yang harus dibayar
Emp1 : Rp.500 + Pajak(2%) = Rp.510
Emp2 : Rp.2000 + Pajak(5%) = Rp.2100
Emp3 : Rp.12000 + Pajak(10%) = Rp.13200
Total : Rp.15810
*/

