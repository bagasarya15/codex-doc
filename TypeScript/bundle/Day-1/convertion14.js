"use strict";
{
    let number = '20';
    console.log(typeof number);
    let z = +number;
    console.log(typeof z);
    let string = 20;
    console.log(typeof string);
    let newString = String(string);
    console.log(newString);
    let stringBool = 'false'; // false diconvert akan selalu true karna string kosong saja bernilai false
    console.log(typeof stringBool);
    let newStringBool = Boolean(stringBool);
    console.log(typeof newStringBool);
    console.log(newStringBool);
    console.log(newStringBool, toString());
    console.log(+newStringBool);
}
