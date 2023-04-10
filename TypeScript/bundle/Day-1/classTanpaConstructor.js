"use strict";
{
    class PersonClass {
        constructor() {
            this.name = '';
            this.age = 0;
        }
    }
    PersonClass.alamat = '';
    class Motor {
        constructor() {
            this.make = '';
            this.model = '';
            this.color = '';
        }
    }
    const person1 = new PersonClass();
    person1.age;
    class Person {
        // ssn : string ;
        // protected firstName: string ;
        // protected lastName: string;
        constructor(ssn, firstName, lastName) {
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName;
            // this.ssn=ssn
            // this.firstName=firstName
            // this.lastName=lastName
        }
        // setFirstName(sn:string){
        //     this.firstName=sn
        // }
        // setLastName(ln:string){
        //     this.lastName=ln
        // }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    let personObj = new Person('171-28-0926', 'Bagas', 'Arya');
    // personObj.ssn = '171-28-0926'
    // personObj.setFirstName('Bagas');
    // personObj.setLastName('Arya');
    console.log(personObj.getFullName());
}
