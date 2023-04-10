{
//Nomor 1
// buat const menggunakan arrow function dengan parameter radius didalamnya
const hitungLuasLingkaran = (radius:number) => {
    //fungsi try catch untuk menangani jika ada kesalahan pada penulisan code
    try {
        //declare var phi dengan nilai yang sama di soal
        let phi = 3.14159;

        //if type untuk membuat kondisi radius harus berupa angka
        // if(typeof radius !== 'number') 
        //     // ouput jika kondisi radius diinput string
        //     throw new Error('return inputan harus dalam angka')
        // //if untuk kondisi jika radius lebih kecil atau sama dengan 0
        // if(radius <= 0 ) { 
        //     // output jika nilai number kurang atau sama dengan 0
        //     throw new Error('return radius -1 <= 0, try higher')
        // }
        //return nilai var phi dikali nilai radius
        return phi * (radius * radius);
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message;
    }
}
// console.log(hitungLuasLingkaran(-1)) //return radius -1 <= or try higher
// console.log(hitungLuasLingkaran('a')) // inputan harus dalam angka
// console.log(hitungLuasLingkaran(5)) // return 78.5397

//Nomor 2
// buat const menggunakan arrow function dengan parameter a, t didalamnya
const hitungJarak = (a:number, t:number) => {
    //Penggunaan try catch untuk menangani jika ada kesalahan pada code
    try {
        //Kondisi jika a atau t bukan number
        // if(typeof a !== 'number' || typeof t !== 'number')
        //     throw new Error('input must an number')
        // //Kondisi jika a atau t lebih kecil atau sama dengan 0
        // if(a <= 0 || t <= 0 ) {
        //     throw new Error('Accelaration or time must be >= 0')
        // }
        //return nilai dari soal dengan param a & t untuk menampilkan output
        return `Jarak yang ditempuh adalah ` + 0.5 * a * (t * t) + ` meter/s`;
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }
}
// console.log(hitungJarak('a','t')) // input must a number
// console.log(hitungJarak(-1,9)) // Accelaration or time must be >=0
// console.log(hitungJarak(50,60)) // Jarak yang ditempuh adalah 90000 meter/s

//Nomor 3
// buat const menggunakan arrow function dengan parameter f didalamnya
const convertSuhu = (f:number) :any =>  {
    // penggunaan try catch untuk menangani jika ada kesalahan pada code
    try {
        //kondisi jika nilai f bukan angka
        // if(typeof f !== 'number')
        // {
        //     throw new Error('Farenhait must an number')
        // }
        //buat var kelvin dgn alias k dimana rumusnya berdasrkan yang disoal
        let k = (f + 459.67) / 1.8;
        //return nilai var k menggunakan math.round untuk membuat angka menjadi decimal
        return `Convert farenhait (${f}) to Kelvin = ` + (Math.round(k));
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }

}
// console.log(convertSuhu(45)) // Convert farenhait (45) to Kelvin = 200
// console.log(convertSuhu("1")) // Convert farenhait (1) to Kelvin = 811
// console.log(convertSuhu('F')) //farenhait must an numb

//Nomor 4
// buat const menggunakan arrow function dengan parameter price, tax didalamnya
const hitungPajak = (price:number, tax:number) => {
     //try cacth untuk menangani jika ada kesalahan pada code
    try {
        // //jika kondisi price is not number
        // if(typeof price !== 'number')
        //     throw new Error('Price harus dalam angka')
        // //jika kondisi price dan tax is not number
        // if(typeof price !== 'number' || typeof tax !== 'number')
        //     throw new Error('Price dan pajak harus dalam angka')
        // //jika kondisi tax is not number
        // if(typeof tax !== 'number')
        //     throw new Error('Pajak harus dalam angka')

        // buat var pajak dan total untuk formula hitung pajak
        let pajak = price * (tax / 100); //225
        let total = price + pajak;

        return `Total Harga + Pajak :` +  `Rp.` + total;
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }
}
// console.log(hitungPajak("a", 1)) // price harus dalam angka
// console.log(hitungPajak(500, "pajak")) //price dan pajak harus dalam angka
// console.log(hitungPajak("harga", "pajak")) //pajak harus dalam angka
// console.log(hitungPajak(4500, 5)) // total harga + pajak = rp.4725

//Nomor 5
// buat const menggunakan arrow function dengan parameter price, tax, discount didalamnya
const hitungDiscount = (price:number, tax:number, discount:number) :any => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {
        // buat variable dibawah untuk formula hitung discount dan pajaknya
        let diskon:number = discount / 100;
        let subTotalDiskon:number = price * diskon;
        let priceAfterDiscount:number = price - subTotalDiskon;
        let pajak:number = tax / 100;
        let subTotalPajak:number = priceAfterDiscount * pajak;
        let total:number = priceAfterDiscount + subTotalPajak;

        //return total semuanya
        return `Total payment : ` + `Rp.`+ total;
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }
}
// console.log(hitungDiscount("a",1,5)) //price harus dalam angka
// console.log(hitungDiscount(500,"pajak",5)) // pajak harus dalam angka
// console.log(hitungDiscount('harga','pajak','discount')) //price, tax dan discount dalam angka
// console.log(hitungDiscount(4500,10,5)) //total payment : Rp.4702.5

//Nomor 6
// buat const menggunakan arrow function dengan parameter x1,y1,x2,y2  didalamnya
const getCordinat = (x1:number, y1:number, x2:number, y2:number) => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {
        //buat var cordinat dengan menggunakan function math sqrt akar dan Math.pow untuk pangkat 2 / ^2
        let cordinat =  Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
        //return cordinat untuk menampilkan output
        return cordinat;
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }
}
// console.log(getCordinat(3,4,-4,-5)) // 11.40175425099138
// console.log(getCordinat("1","2","-1","-2")) // 4.47213595499958
// console.log(getCordinat("x","2","-y","-2")) // Input kordinat dalam angka
// console.log(getCordinat(3.2,4.5,-4.4,-5)) // 12.165936051122411

//Nomor 7
// buat const menggunakan arrow function dengan parameter n didalamnya
const sumDigit = (n:number) => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {
        //kondisi jika n lebih besar atau sama dengan 10000
        if(n >= 10000){
            throw new Error(`${n} harus lebih kecil dari 10000...`);
        }else{
            //var string terdapat toString untuk merubah menjadi string_
            //dan split untuk merubah menjadi array dan reduce untuk nilai_
            //hasil kalkulasi pada elemen sebelumnya
            let num:any[] = n.toString().split('')
            let sum = num.reduce((a, b) => Number(a) + Number (b))
            //return nilai sum untuk menampilkan output
            return sum;
        }
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }
}
// console.log(sumDigit(1234)); //10
// console.log(sumDigit("1234")); //10
// console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
// console.log(sumDigit("a123")); //a123 is not number try again...

//Nomor 8
//buat const menggunakan arrow function dengan parameter seconds didalamnya
const elapsedTime = (seconds:number) => {
    // penggunaan try catch untuk menangani jika ada kesalahan dalam penulisan code
    try {
        //Hitung menggunakan Math.floor untuk membulatkan nilai ke bawah
        let hari:number  = Math.floor(seconds / (3600 * 24)); //untuk hitung hari
        let jam:number   = Math.floor((seconds - (hari * 3600 * 24)) / 3600); //untuk hitung jam
        let menit:number = Math.floor((seconds - (hari * 3600 * 24) - (jam * 3600)) / 60); // untuk hitung menit
        let detik:number = seconds - (hari * 3600 * 24) - (jam * 3600) - (menit * 60); // untuk hitung detik

        //return var yang dideclare diatas menggunakan backtip ` ` untuk mendapatkan output_
        //hari, jam, menit dan detik
        return `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`;
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }
}
// console.log(elapsedTime("70000A")); //70000A is not a number try again...
// console.log(elapsedTime("700005")); //8 Hari 2 Jam 26 Menit 45 Detik

//Nomor 9
// buat const menggunakan arrow function dengan parameter password didalamnya
const getRandomPass = (password:string) => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {
        //var generate untuk membuat nilai random menggunakan fungsi Math.random()
        let generate = Math.random().toString(36).slice(7);
        //return generate untuk menampilkan ouput
        return generate ;
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message;
    }

}
// console.log(getRandomPass("123456")) //123456 Password must be a character...
// console.log(getRandomPass(3422)) // 3422 Password must be a character...
// console.log(getRandomPass("code")) // Password length must be greater than 6
// console.log(getRandomPass("codeid")) //pc0bdi

//Nomor 10
// buat const menggunakan arrow function dengan parameter mmoney dan konversi didalamnya
const convertToRupiah = (money:number, konversi:string) => {
    //fungsi try untuk menangani jika ada kesalahan pada penulisan code
    try {
        //const rupiah untuk memformat nilai mata uang ke bentuk IDR
        const rupiah = (number:number) =>{
            return new Intl.NumberFormat("id-ID",{
                style:"currency",
                currency:"IDR"}).format(number);
        }

        //buat var nilai_convert untuk membuat kondisi mata uang yang diconvert
        let nilai_convert;
        if(konversi === 'yen'){
            nilai_convert = 130.12 * money
        }else if(konversi === 'usd'){
            nilai_convert = 14382.5 * money
        }else if(konversi === 'euro'){
            nilai_convert = 16000 * money
        }else {
            // var alert untuk menampilkan error ketika tidak ada tipe mata uang yang sesuai_
            // pada kondisi diatas 
            // let alert = 'no match type curency';
            //     return alert;
            throw new Error('no match type curency');
        }

        //return const rupiah dengan var nilai_convert didalamnya untuk menampilkan output
        return rupiah(nilai_convert).replace(',00','');
        
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message   
    }
}

// console.log(convertToRupiah(1000,'yen')); //Rp 130.120,00
// console.log(convertToRupiah(100,'usd'));  //Rp 1.438.250,00
// console.log(convertToRupiah(100,'euro'));  //Rp 1.600.000,00
// console.log(convertToRupiah(100,'')); //no match type curency

//Nomor 11
// buat const menggunakan arrow function dengan parameter w1,w2,w3  didalamnya
const getHeavier = (w1:number, w2:number, w3:number) => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {
        //kondisi jika w1 lebih besar atau sama dengan w2 dan w1 lebih besar atau sama dengan w3
        if(w1 >= w2 && w1>= w3){
            return w1;
        //kondisi jika w2 lebih besar atau sama dengan w1 dan w2 lebih besar atau sama dengan w3
        }else if(w2 >= w1 && w2>= w3){
            return w2;
        }else{
            return w3;
        }
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }
}
// console.log(getHeavier(12,70,45)); //7

//Nomor 12
// buat const menggunakan arrow function dengan parameter m dan y sebagai alias dari month dan year didalamnya
const getDay = (m:number,y:number) => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {
        //menggunakan switch case untuk mendapatkan nilai month
        switch (m) {
            // Start case untuk bulan yang berjumlah 31 hari
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return `This month has 31 hari`
            //End
            // Start case untuk bulan yang berjumlah 30 hari
            case 4:
            case 6:
            case 9:
            case 11:
                return `This month has 30 hari`
            //End
            // Start case untuk bulan yang berjumlah 28 / 29 hari
            case 2:
                //kondisi untuk mencari tahun kabisat
                if((y % 4 == 0 && !(y % 100 == 0)) || y % 400 == 0){
                    return `This month has 29 days, ${y} adalah tahun kabisat`
                }else{
                    return `This month has 28, ${y} adalah tahun kabisat`
                }
            //End
            default:
                //default error output
                throw new Error('inputan bulan harus dalam integer')
        }
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }   
}
// console.log(getDay("a", 2021)); //inputan bulan harus dalam integer
// console.log(getDay("2", "year")); //inputan tahun harus dalam integer
// console.log(getDay("m", "year")); //inputan bulan dan tahun harus dalam integer
// console.log(getDay(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
// console.log(getDay(8, 2021)); //This month has 31 hari

//Nomor 13
// buat const menggunakan arrow function dengan parameter angka  didalamnya
const isPalindrome = (angka:number | string) => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {
         //kondisi jika params angka is not number
        if(typeof angka !== 'number') 
        {
            throw new Error (`${angka} input is not number`)
        }

        // buat var input untuk merubah angka menjadi string dan array
        let input = angka.toString().split('')

        // kondisi untuk menemukan output palindrome atau bukannya
        if(input[0] !== input[3] || input[1] !== input[2]){
            throw new Error(`${angka} is not palindrome`)
        }else{
            return `${input} is palindrome`
            // console.log(`${input}`);
        } 
    } catch (error:any) {
        //Error ditampilkan jika ada kesalahan penulisan code pada blok try
        return error.message
    }
}
// console.log(isPalindrome("abcd")); //abcd input is not number
// console.log(isPalindrome("123a")); //123a input is not number
// console.log(isPalindrome("1234")); //1234 is not palindrome
// console.log(isPalindrome(1221)); //1,2,2,1 is palindrome
// console.log(isPalindrome("8888")); //8,8,8,8 is palindrome

//No 14
//buat arrow function dengan parameter income1 dan income2
const getProsentase = (income1:number, income2:number) => {
    //fungsi try cath untuk menangani jika ada kesalahan penulisan pada code
    try {    
        // var untuk hitung total kenaikan dan turun income
        let totalIncome = income2 - income1;
        const percentage = (totalIncome / income1) * 100;
    
        // kondisi jika total income naik
        if (totalIncome > 0) {
            return `Total kenaikan income ${percentage.toFixed(0)}%`;
        // kondisi jika total income turun
        } else if (totalIncome < 0) {
            return `Total penurunan income ${Math.ceil(percentage)}%`; //
        } else {
            return ``;
        }
    } catch (error:any) {
        // Menampilkan pesan error jika terjadi kesalahan
        return error.message;
    }};

// console.log(getProsentase("abc", "bca")); //abc dan bca harus dalam angka
// console.log(getProsentase(600000.00, 750000.00)); //Total kenaikan income 25%
// console.log(getProsentase(750000.00, 650000.00)); //Total penurunan income -13%

//No 15
//const menggunakan arrow function dengan parameter alias s1, s2, s3 "S = Salary"
const totalGaji = (s1:number, s2:number, s3:number) => {
    //try cacth untuk menangani jika ada kesalahan pada code
    try {;
        
        //var untuk formula pajak dan total employe
        let pajakEmp1 = s1 * 0.02;
        let totalEmp1 = s1 + pajakEmp1;
    
        let pajakEmp2 = s2 * 0.05;
        let totalEmp2 = s2 + pajakEmp2;
    
        let pajakEmp3 = s3 * 0.1;
        let totalEmp3 = s3 + pajakEmp3;
    
        let totalGaji = totalEmp1 + totalEmp2 + totalEmp3;
    
        //return untuk menampilkan output
        return `Total gaji yang harus dibayar : 
                Emp1    : Rp.${s1} + Pajak(2%) = Rp.${totalEmp1}
                Emp2    : Rp.${s2} + Pajak(5%) = Rp.${totalEmp2}
                Emp3    : Rp.${s3} + Pajak(10%) = Rp.${totalEmp3}
                Total   : Rp.${totalGaji}`;
    } catch (error:any) {
        // Menampilkan pesan error jika terjadi kesalahan
        return error.message;
    }
    };
    // console.log(totalGaji(500, 2000, 12000)) 
    
    //output: Total gaji yang harus dibayar :
    // Emp1    : Rp.500 + Pajak(2%) = Rp.510
    // Emp2    : Rp.2000 + Pajak(5%) = Rp.2100
    // Emp3    : Rp.12000 + Pajak(10%) = Rp.13200
    // Total   : Rp.15810



// BagasAryaPradipta_Kuis_Batch3 //
}