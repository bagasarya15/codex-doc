const outputObject = () => {
    let result = {
        statusRespon: 'Oke',
        message: 'Data berhasil disimpan'
    }
    return result;
}
console.log(outputObject());

let result=outputObject()
console.log(result);

let {statusRespon, message}=outputObject()
console.log(statusRespon, message);