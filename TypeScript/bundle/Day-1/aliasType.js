"use strict";
{
    let input;
    input = 100;
    input = 'Hi';
    function addUnion(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
    }
    console.log(addUnion);
}
