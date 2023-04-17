"use strict";
{
    // let arr: number [] = [1,2,3]
    let genap = [{
            id: 1,
            value: 2
        }, {
            id: 2,
            value: 4
        }, {
            id: 3,
            value: 6
        }, {
            id: 4,
            value: 8
        }, {
            id: 5,
            value: 10
        }];
    // console.log(genap);
    let id = 0;
    let value = 0;
    let array = [];
    for (let i = 0; i <= 5; i++) {
        array.push({ id: i, value: i * 2 });
    }
    //reverse
    for (let i = 10; i >= 1; i--) {
        array.push({ id: i, value: i * 2 });
    }
    console.log(array);
}
