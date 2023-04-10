"use strict";
{
    class PersonInherit {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        describe() {
            return `This is ${this.firstName} ${this, this.lastName}`;
        }
    }
    class Employee extends PersonInherit {
        constructor(firstName, lastName, jobTitle) {
            super(firstName, lastName);
            this.jobTitle = jobTitle;
        }
        getFullNameEmployee() {
            return super.getFullName(); //super untuk memanggil property / method dr class parent
        }
        describe() {
            return super.describe() + ` Iam ${this.jobTitle}`;
        }
    }
    //Instansiasi
    let employe = new Employee('Bagas', 'Arya', 'FullStack Developer');
    console.log(employe.describe());
    console.log(employe.getFullNameEmployee());
}
