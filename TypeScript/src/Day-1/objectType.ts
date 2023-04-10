{
    // let employee: {};

    let employee: {
        firstName:string;
        lastName?:string;
        age: number; 
        jobTitle:string;
    } = {
        firstName: 'Bagas',
        lastName: 'Arya',
        age: 22,
        jobTitle: 'Web Developer'
    }

    console.log(employee);

    let person: {} = {};
    let person1

    console.log(person1); //Akan Undenfined
}