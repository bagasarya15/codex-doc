const outputArray=()=> {
    let arrStr=['Java', 'Script'];
    return arrStr
}
console.log(outputArray());
const strArr=outputArray();
console.log(strArr);

const [x, y] = outputArray()
console.log(x, y);
