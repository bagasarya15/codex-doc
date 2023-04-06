//Nomor 6

const getCordinat = (x1, y1, x2, y2) => {
    try {
        let cordinat = ( (x1 - x2) * (x1 - x2) ) + ( (y1 - y2) * (y1 - y2) )
        if(isNaN(x1) && isNaN(y1) && isNaN(x2) && isNaN(y2))
            throw new Error('Input kordinat dalam angka')
            return cordinat;
    } catch (error) {
        error.message
    }    
}
// console.log(getCordinat(3, 4, -4, -5));

//Nomor 7

const sumDigit = (n) => {
    try {
        let total = n;
        
        $.each(arr,function() {
            total += n;
        });
        return Math.sum(total);
    } catch (error) {
        error.message
    }
}
// console.log(sumDigit(1234));

//Nomor 8

const elapsedTime = (seconds) => {
    try {
        
    } catch (error) {
        error.message
    }
}

//Nomor 9

const getRandomPass = (pass) => {
    try {   
        if( typeof pass !== 'String')
            throw new Error('Value must be character')

        let generate = Math.random(pass).toString(36)
        return typeof "asu";
    } catch (error) {
        error.message
    }
}

console.log(getRandomPass(1234))
// console.log(getRandomPass("codeid"))