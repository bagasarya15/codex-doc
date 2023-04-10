"use strict";
{
    function add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
    }
    console.log(add('c', 'b'));
    console.log(add(4, 5));
}
