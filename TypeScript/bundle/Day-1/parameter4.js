"use strict";
{
    //default params, rest params," optional params hanya di ts "
    //Optiobnal Parameter
    // function multiply(a?:number, b?:number, c?:number) : number //=> typedata untuk parameter & typedata untuk  bentuk number
    // {
    //     if(typeof a !== 'undefined' && typeof b !== 'undefined' && typeof c !== 'undefined' )
    //     { //if (c)
    //         return a * b * c;
    //     }
    //     //return (a * b)
    //     return 0;
    // }
    // console.log(multiply());
    // function multiply2(a: number, b:number, c?:number) :number
    // {
    //     if(isNaN(c)) //=>tidak pakai isNaN karna type number atau undenfined
    //     {
    //         return a * b;
    //     }
    //     return a * b * c;
    // }
    // console.log(multiply2());
    //Default Parameter
    // function applyDiscountType(price=0, discount = 0.5)
    // {
    //     return price * (1-discount)
    // }
    // console.log(applyDiscountType(100, 0.25));
    //Rest Parameter
    function getTotal(a, b, ...numbers) {
        let total = 0;
        numbers.forEach((num) => total += num);
        return total + a + b;
    }
    // console.log(getTotal(4,3,1,2,3,4,5,6));
}
