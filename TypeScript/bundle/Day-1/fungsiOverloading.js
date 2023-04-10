"use strict";
{
    function sum(a, b, c) {
        if (a && b && c)
            return a + b + c;
        else if (a && b)
            return a + b;
        else if (a)
            return a;
        else
            return `Angka untuk dijumlahkan tidak ditemukan`;
    }
    //Method Overload
    class Counter {
        constructor() {
            this.current = 0;
        }
        count(target) {
            if (target) {
                let values = [];
                for (let start = this.current; start <= target; start++) {
                    values.push(start);
                }
                this.current = target;
                return values;
            }
            return ++this.current;
        }
    }
    let counter = new Counter();
    console.log(counter.count()); // return a number
    console.log(counter.count(20)); //return an array
}
