/* -----ITERATION----- */

/* Contoh 1
let ranks = ['A','B','C']
for (let i = 0;i < ranks.length;i++){
console.log(ranks[i])
}
*/

/* Contoh 2
for(let i = 0; i < 10 ; i ++){
    if (i % 2 == 1){
        console.log(i)
    }
}
*/

/* Contoh 2
for(let i = 2; i < 10 ; i+=2){
        console.log(i)
}
*/

/* FOR IN (Membaca Indexny)
let ranks = ['A','B','C']
for(let i in ranks){
    console.log(i)
}
*/

/* FOR OF (Membaca isinya)
let ranks = ['A','B','C']
for (let rank of ranks){
    console.log(rank)
}
*/

/* forEach dengan arrow Fucntion */
/*
let ranks = ['A','B','C']
ranks.forEach(value => {
    console.log(value);
})
*/

/* Contoh 2 ForEach */
/*
let ranks = ['A','B','C']
const cetakData = value =>{
    console.log(value)
}
ranks.forEach(cetakData)
*/

/* CONTOH 3 DENGAN ARRAY OBJECT */
/*
let person =[{
    firstName :'John',
    lastName : 'Doe',
    ssn : '299-24-2351'
},{
    firstName :'Alex',
    lastName : 'Doe',
    ssn : '300-25-2351'
}];

// for(let i in person){
//     console.log(i + ' : ' + person[i].firstName) }

// for (let i of person){
//     console.log(i.firstName);}

//person.forEach(value =>{
//console.log(value.firstName)})
*/

/* For in adalah Iterable */
/*
let person ={
    firstName :'John',
    lastName : 'Doe',
    ssn : '299-24-2351'
}
for(let i in person){
        console.log(person[i]) }
        */

/* WHILE */
/*
let count = 1;
while(count < 10) {
    console.log(count);
    if (count === 5)
    break;
    count += 2;
}   
*/

/* DO WHILE */
/*
let x = 0;
do{
    console.log(x);
    x++
} while (x < 5)
*/