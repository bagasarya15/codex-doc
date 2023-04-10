"use strict";
{
    //default params, rest params," optional params hanya di ts "
    function multiply(a, b, c) {
        if (typeof a !== 'undefined' && typeof b !== 'undefined' && typeof c !== 'undefined') { //if (c)
            return a * b * c;
        }
        //return (a * b)
        return 0;
    }
    console.log(multiply());
}
